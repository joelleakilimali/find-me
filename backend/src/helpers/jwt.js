// const verified = await jwt.verify(token, JWT_KEY);
//         if (verified) {
//           user_id = verified.user_id;
//           const user = await getUserById(user_id);
//           if (user) {
//             next();
//           } else {
//             return res.status(403).json({ message: "Not authorized" });
//           }
//         } else {
//           return res.status(400).json({ message: "Invalid token" });
//         }
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

module.exports = {
  verifyToken: async (token) => {
    let email = -1;
    if (token != null) {
      try {
        let jwtToken = jwt.verify(token, JWT_KEY);
        if (jwtToken != null) {
          email = jwtToken.email;
        }
      } catch (err) {}
    }
    return email;
  },
  getEmailFromToken: async (token) => {
    let email = "";
    if (token != null) {
      try {
        let jwtToken = jwt.verify(token, JWT_KEY, { ignoreExpiration: true });
        if (jwtToken != null) {
          email = jwtToken.email;
        }
      } catch (err) {}
    }
    return email;
  },
};
