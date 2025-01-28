import 'dotenv/config';

const env = (name, defaultName) => {
  const value = process.env[name];
  if (value) return value;
  if (defaultName) return defaultName;
  throw new Error(`Missing process.env[${name}]`);
};

export default env;
