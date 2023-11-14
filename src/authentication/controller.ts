import Express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const accessToken =
  "cd24b2634fedbecca3eae5f1e25db63276aa79d82de13693b3ba206ee116a3bf870040c8719cda2c65a4974f4f1c4c5fba52bdf5c7eeed56a09fa7677dfd8b4a";

export class AuthController {
  static async tokensGenerate(req: Express.Request, res: Express.Response) {
    try {
      const userName = req.body.userName;
      const userId = req.body.userId;
      const nextLessonId = req.body.nextLessonId;
      const role = req.body.role;

      console.log("auth-controller userName", userName, userId, role, accessToken);
      const token = jwt.sign({ userName: userName, userId: userId, nextLessonId: nextLessonId, role: role }, accessToken, {
        expiresIn: "10m",
      });
      console.log("auth-controller token", token);
      res.status(200).json({ token });
    } catch (err) {
      //   console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
