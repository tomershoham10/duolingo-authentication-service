import Express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import AuthManager from "./manager.js";
dotenv.config();

const accessToken =
  "cd24b2634fedbecca3eae5f1e25db63276aa79d82de13693b3ba206ee116a3bf870040c8719cda2c65a4974f4f1c4c5fba52bdf5c7eeed56a09fa7677dfd8b4a";

export class AuthController {
  static async tokensGenerate(req: Express.Request, res: Express.Response) {
    try {
      const userName = req.body.userName;
      console.log("auth-controller userName", userName, accessToken);
      const token = jwt.sign({ userName: userName }, accessToken, {
        expiresIn: "10m",
      });
      console.log("auth-controller token", token);
      res.status(200).json({ token });
    } catch (err) {
      //   console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async vetifyToken(req: Express.Request, res: Express.Response) {
    try {
      const userName = req.body.userName;
      const reqAccessToken = req.headers.Authorization as string;
      const reqRefreshToken = req.headers.refershToken as string;
      const response = await AuthManager.vetifyToken(
        userName,
        reqAccessToken,
        reqRefreshToken
      );
      if (response) {
      } else {
        res.status(401).json({ error: "Tokens are invalid. Log in again." });
      }
    } catch (err) {
      //   console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
