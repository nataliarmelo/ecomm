import jwt from "jsonwebtoken";

export function decriptToken(token) {
  try {
    const tokenSecret = process.env.TOKEN_SECRET;
    const { userId } = jwt.verify(token, tokenSecret);

    return { userId };
  } catch (error) {
    console.log("verifiy ", error.message);
    return {};
  }
}
