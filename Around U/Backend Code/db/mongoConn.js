const mongoose = require("mongoose");

const conn_str =
  "mongodb+srv://gracy:<Password>.bxkzbco.mongodb.net/aroundu?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);
mongoose.connect(
  conn_str,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
      console.log("error in connection");
    } else {
      console.log("mongodb is connected");
    }
  }
);
