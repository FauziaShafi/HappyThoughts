const mongoose = require("mongoose");
require('dotenv').config(); 
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/posts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
    console.log(
      "⛔ There was an error connecting to MongoDB. See above for details."
    );
    console.log("Shutting down.");
    process.exit(1);
  });

module.exports = mongoose.connection;
