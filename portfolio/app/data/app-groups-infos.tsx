
let tailwindValues: string[] = ['tailwind-icon-svg', 'bg-tailwind-gray', 'infos blablabla'];
let SQLValues: string[] = ['sql-icon-svg', 'bg-white', 'infos blablabla'];
let PostGreSQLValues: string[] = ['postgresql-icon-svg', 'bg-postgres-blue', 'infos blablabla'];
let mySQLValues: string[] = ['mysql-icon-svg', 'bg-mysql-orange', 'infos blablabla'];
let SnowflakeValues: string[] = ['snowflake-icon-svg', 'bg-white', 'infos blablabla'];
let MongoDBValues: string[] = ['mongodb-icon-svg', 'bg-white', 'infos blablabla'];
let APIValues: string[] = ['api-icon-svg', 'bg-white', 'infos blablabla'];

let WebToolsMap = new Map<string, Array<string>>([
  ["Tailwind CSS", tailwindValues],
  ["SQL Language", SQLValues],
  ["PostGreSQL", PostGreSQLValues],
  ["MySQL", mySQLValues],
  ["Snowflake", SnowflakeValues],
  ["Mongo DB", MongoDBValues],
  ["API Integrations", APIValues],
]);

export { WebToolsMap };
