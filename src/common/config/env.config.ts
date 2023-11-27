export const EnvConfiguration = () => ({
  environment: process.env.STAGE || 'dev',
  port: +process.env.PORT,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: +process.env.DB_PORT,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
});
