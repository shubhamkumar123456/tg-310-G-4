const multer = require('multer');
const path = require('path');

// storage config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // folder
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + path.extname(file.originalname);
        // example --> path.extname("myphoto.png") will returned ".png"
        cb(null, uniqueName);
    }
});

// file filter (optional)
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image')) {
//         cb(null, true);
//     } else {
//         cb(new Error('Only images allowed'), false);
//     }
// };

// const upload = multer({ storage, fileFilter });
const upload = multer({ storage });

module.exports = upload;
