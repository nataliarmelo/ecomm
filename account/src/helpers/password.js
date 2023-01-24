import bcrypt from "bcryptjs";

export async function hashPassword(password) {
  const passHash = await bcrypt.hashSync(password, 10);
  return passHash;
}

export async function comparePassword(password, passHash) {
  const isMatch = await bcrypt.compare(password, passHash);
  return isMatch;
}
