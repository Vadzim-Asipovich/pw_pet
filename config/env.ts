import dotenv from 'dotenv';

dotenv.config();

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env variable: ${name}`);
  }
  return value;
}

export default {
  baseUrl: getEnv('BASE_URL'),
  username: getEnv('SAUCE_USERNAME'),
  password: getEnv('SAUCE_PASSWORD'),
};
