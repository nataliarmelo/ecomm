import jwt from "jsonwebtoken";

export function generateToken(id, expiration = 5) {
  const tokenSecret = process.env.TOKEN_SECRET;
  const token = jwt.sign({ userId: id }, tokenSecret, {
    expiresIn: `${expiration}s`,
  });
  return token;
}
