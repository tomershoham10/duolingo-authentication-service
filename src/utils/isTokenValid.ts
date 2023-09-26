import jwt from "jsonwebtoken";

function isTokenValid(token: string, secretKey: string) {
  try {
    const decodedToken = jwt.verify(token, secretKey);
    return true;
  } catch (error) {
    return false;
  }
}

export default isTokenValid;
