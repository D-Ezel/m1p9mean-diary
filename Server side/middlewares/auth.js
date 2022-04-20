import jwt from "jsonwebtoken";
import createHttpError from "http-errors";

//const config = process.env;

const verifyToken = (req, res, next) => {
  // const authHeader = req.headers["authorization"];
  // const token = authHeader && authHeader.split(" ")[1];
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"] || req.headers["authorization"];

  if (!token) {
    // return res.status(403).send("A token is required for authentication");
    return next(
      new createHttpError.Forbidden("A token is required for authentication")
    );
  }
  try {
    const bearer = token.split(' ');
    const decoded = jwt.verify(bearer[1], "lol");
    req.user = decoded;
  } catch (err) {
    // return res.status(401).send("Invalid Token");
    return next(new createHttpError.Unauthorized("Invalid Token"));
  }
  next();
};

export {
  verifyToken
}
