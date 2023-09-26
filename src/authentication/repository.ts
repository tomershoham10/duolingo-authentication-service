import { JwtPayload } from "jsonwebtoken";
import { RefreshTokenModel } from "./RefreshTokenModel.js";
import isTokenValid from "../utils/isTokenValid.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";

const accessToken =
  "cd24b2634fedbecca3eae5f1e25db63276aa79d82de13693b3ba206ee116a3bf870040c8719cda2c65a4974f4f1c4c5fba52bdf5c7eeed56a09fa7677dfd8b4a";

export default class AuthRepository {
  static async vetifyToken(
    userName: string,
    reqAccessToken: string,
    reqRefreshToken: string
  ): Promise<string | boolean> {
    const isAccessVerifed = isTokenValid(reqAccessToken, accessToken);
    const isRefreshVerifed = isTokenValid(reqRefreshToken, accessToken);
    if (isAccessVerifed) {
      return isAccessVerifed;
    } else if (isRefreshVerifed) {
      const newRefreshToken = generateRefreshToken(userName);
      const currentDate = new Date();

      const sevenDaysLater = new Date();
      sevenDaysLater.setDate(currentDate.getDate() + 7);
      const newOption = await RefreshTokenModel.create({
        token: newRefreshToken,
        userName: userName,
        expiresAt: sevenDaysLater,
      });

      return newOption.token;
    } else {
      return false;
    }
  }
}
