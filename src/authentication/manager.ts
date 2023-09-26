import AuthRepository from "./repository.js";

export default class AuthManager {
  static async vetifyToken(
    userName: string,
    reqAccessToken: string,
    reqRefreshToken: string
  ): Promise<string | boolean> {
    const response = await AuthRepository.vetifyToken(
      userName,
      reqAccessToken,
      reqRefreshToken
    );
    return response;
  }
}
