import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  let token = req.header("token");
  jwt.verify(token, process.env.JWT_KEY, async (err, decoded) => {
    if (err)
      return res.json({ message: "error token or token not provided", err });
    req.userId = decoded.userId;
    next();
  });
};
