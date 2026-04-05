import jwt from "jsonwebtoken";

export default function generateToken(user: any) {
  const currTimeInSec = Math.floor(Date.now() / 1000);

  const payload = {
    sub: user.id,
    iat: currTimeInSec,
    exp: currTimeInSec + 24 * 60 * 60,
    admin: user.role === "ADMIN",
  };

  const privateKey = Buffer.from(
    process.env.PRIVATE_KEY!,
    "base64url",
  ).toString();

  return jwt.sign(
    payload,
    { key: privateKey, passphrase: process.env.passphrase! },
    {
      algorithm: "RS256",
    },
  );
}
