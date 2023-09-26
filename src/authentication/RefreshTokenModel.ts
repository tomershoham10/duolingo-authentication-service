const mongoose = require("mongoose");

const refreshTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  userName: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});

const RefreshTokenModel = mongoose.model("RefreshToken", refreshTokenSchema);
export { RefreshTokenModel };
