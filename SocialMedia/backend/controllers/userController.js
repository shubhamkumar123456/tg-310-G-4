const userCollection = require("../models/userModel");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const jwt_secret = "jackSparrow@123";
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");

// console.log(process.env.NODE_MAILER)

const createUser = async (req, res) => {
  // res.send("create function is running")
  const { name, email, password } = req.body;

  let existingUser = await userCollection.findOne({ email: email }); //{_id, name,email,password} or null

  if (existingUser) {
    return res.status(401).json({ msg: "user already registered" });
  } else {
    let hashedPassword = await bcrypt.hash(password, salt); //12345-->%@#$%^&*(LKJHGFDFGHJK)
    let data = await userCollection.insertOne({
      name: name,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ msg: "user registered successfully" });
  }
};

const loginUser = async (req, res) => {
  // res.send("login function is running")
  const { email, password } = req.body;
  const getUser = await userCollection.findOne({ email }); ////{_id, name,email,password} or null
  if (getUser) {
    let comparePassword = await bcrypt.compare(password, getUser.password); //true or false
    if (comparePassword) {
      let token = jwt.sign({ _id: getUser._id }, jwt_secret);
      res
        .status(200)
        .json({ msg: "user login successfully", data: getUser, token });
    } else {
      res.status(401).json({ msg: "wrong password" });
    }
  } else {
    return res.status(401).json({ msg: "user not found please signup" });
  }
};

const updateUser = async (req, res) => {
  let { name, password } = req.body;
  if (password) {
    var hashedPassword = await bcrypt.hash(password, salt);
  }
  let data = await userCollection.updateOne(
    { _id: req.user },
    { $set: { name: name, password: hashedPassword } },
  );
  res.status(200).json({ msg: "user updated successfully" });
};

const deleteUser = async (req, res) => {
  try {
    let data = await userCollection.findByIdAndDelete(req.user);
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "error in deleting user", error: error.message });
  }
};

const followUser = async (req, res) => {
  let { friendId } = req.params;
  let userId = req.user;

  let user = await userCollection.findById(userId); // {_id , name,email, password , followers:[], followings:[]}

  let friend = await userCollection.findById(friendId);

  console.log(user);

  if (user.followings.includes(friendId)) {
    user.followings.pull(friendId);
    friend.followers.pull(userId);
    await user.save();
    await friend.save();
    return res.status(200).json({ msg: "user unfollow successfull" });
  } else {
    user.followings.push(friendId);
    friend.followers.push(userId);
    await user.save();
    await friend.save();
    return res.status(200).json({ msg: "user follow successfull" });
  }
};

const getLoggedInUSer = async (req, res) => {
  let userId = req.user;
  let user = await userCollection.findById(userId).select("-password");
  res.status(200).json({ user });
};

// ********************update password functionality starts here ******************
const forgetPassword = async (req, res) => {
  const { email } = req.body;
  let user = await userCollection.findOne({ email });

  if (user) {

    let resetToken = randomstring.generate(60);
      user.resetPasswordToken = resetToken;
      await user.save();

    // write your nodemailer code here..
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
      auth: {
        user: 'shubhamfarainzi@gmail.com',
        pass: process.env.NODE_MAILER,
      },
    });

    try {
  const info = await transporter.sendMail({
    from: '"Socialmedia Team" <shubhamfarainzi@gmail.com>', // sender address
    to: email, // list of recipients
    subject: "forget password request", // subject line
    text: `click the link below to reset your password \n http://localhost:8090/users/resetToken/${resetToken}`, // plain text body
    // html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent: %s", info.messageId);
  // Preview URL is only available when using an Ethereal test account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
return res.status(200).json({msg:"please check your email for further information"})
} catch (err) {
  console.error("Error while sending mail:", err);
}
  } else {
    return res.status(404).json({ msg: "user not found" });
  }
};


const passwordToken = async(req, res)=>{
  const {token} = req.params
  // res.send("all is well")
  // res.sendFile(__dirname+'/forgetPassword.html')
  res.render('forgetPassword', {token})
}

const updatePassword = async(req,res)=>{
   const {password} = req.body;
   const {token} = req.params;

   let user = await userCollection.findOne({resetPasswordToken:token})

   let hashedPassword = bcrypt.hashSync(password,salt);
   user.password = hashedPassword;
   user.resetPasswordToken = ''
   await user.save();
   return res.json({msg:"password updated successfully"})

}
// ********************update password functionality end here ******************

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  followUser,
  getLoggedInUSer,
  forgetPassword,
  passwordToken,
  updatePassword
};
