const connection = require("../db/sqlConn");
const Chat = require("../models/jobChat");

const getAll = async (req, res) => {
  // console.log(req.email + "  " + req.id);
  // provider = 1;
  // connection.query(
  //   "SELECT * FROM `authtoken_token`",
  //   function (err, data, fields) {
  //     if (!err) {
  //       console.log(data);
  //       return res.json({
  //         data: data,
  //       });
  //     } else return res.json({ message: "error occured" });
  //   }
  // );
  const data = await Chat.findOne({ jobID: "63f4faa7c282634ed7211258" });
  console.log(data);
};

module.exports = getAll;

// const connect = require("../db/sqlConn");

// const fetch = async (req, res) => {
//   connect.query(
//     "SELECT * FROM authtoken_token",
//     function (error, results, fields) {
//       if (error) return res.status(500).json({ message: error });
//       res.status(200).json({
//         message: results,
//       });
//     }
//   );
//   // When done with the connection, release it.
//   connect.release();
// };

// module.exports = fetch;
