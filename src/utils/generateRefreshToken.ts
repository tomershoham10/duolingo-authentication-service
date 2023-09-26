import jwt from "jsonwebtoken";

const refreshTokenKey = process.env.REFRESH_TOKEN_SECRET as string;

function generateRefreshToken(useName: string) {
  const refreshToken = jwt.sign({ useName: useName }, refreshTokenKey, {
    expiresIn: "7d",
  });

  return refreshToken;
}

export default generateRefreshToken;
