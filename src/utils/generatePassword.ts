import dotenv from 'dotenv';
dotenv.config();

export const generatePassword = (fileName: string) => {
  const ZIP_PASSWORD_KEY = process.env.PASSWORD_KEY || 'password';

  function hashString(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
      hash = hash & hash;
    }
    return hash;
  }

  const combinedStr = fileName + ZIP_PASSWORD_KEY;

  let hash = hashString(combinedStr);

  if (hash < 0) {
    hash = -hash;
  }

  const password = (hash % 90000) + 10000;

  return password;
};
