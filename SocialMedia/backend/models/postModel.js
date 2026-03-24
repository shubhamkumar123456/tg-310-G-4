const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    file: {
      type: String,
    },
    userId: {
      type: String,
      ref:'users',
      required:true

    },
  },
  { timestamps: true },
);

postSchema.add({
  likes:[{type:String, ref:'users'}]
})

module.exports = mongoose.model('posts',postSchema )
