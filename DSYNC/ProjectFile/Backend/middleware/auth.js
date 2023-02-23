const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const config = process.env;

const verifyToken = async (req, res, next) => {
  //const token =
    //req.cookie['auth'].token || req.query.token || req.headers["x-access-token"];
    console.log(req.cookies)
  const { auth } = req.cookies;
  console.log(auth, 'auth token');
 const token = auth
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    //console.log(token, 'token');
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    console.log(decoded, 'decoded user');
    const user = await User.find({_id : decoded.user_id})
    req.user = decoded;
    console.log('Hello', req.user)
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken 