
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

let gitValues: string[] = ['git-icon-svg', 'bg-white', 'infos blablabla'];
let githubValues: string[] = ['github-icon-svg', 'bg-black', 'infos blablabla'];
let githubActionsValues: string[] = ['github-actions-icon-svg', 'bg-white', 'infos blablabla'];
let dockerValues: string[] = ['docker-icon-svg', 'bg-white', 'infos blablabla'];
let jenkinsValues: string[] = ['jenkins-icon-svg', 'bg-black', 'infos blablabla'];
let KubernetesValues: string[] = ['kubernetes-icon-svg', 'bg-white', 'infos blablabla'];
let awsValue: string[] = ['aws-icon-svg', 'bg-aws-gray', 'infos blablabla'];
let azureValues: string[] = ['azure-icon-svg', 'bg-white', 'infos blablabla'];
let googleCloudValues: string[] = ['google-cloud-icon-svg', 'bg-white', 'infos blablabla'];

let DevOpsMap = new Map<string, Array<string>>([
    ["Git.", gitValues],
    ["GitHub", githubValues],
    ["GitHub Actions", githubActionsValues],
    ["Docker", dockerValues],
    ["Jenkins", jenkinsValues],
    ["Kubernetes", KubernetesValues],
    ["AWS Cloud Provider", awsValue],
    ["Microsoft Azure", azureValues],
    ["Google Cloud Provider", googleCloudValues],
  ]);

let excelValues: string[] = ['excel-icon-svg', 'bg-excel-green', 'infos blablabla'];
let powerBiValues: string[] = ['powerbi-icon-svg', 'bg-white', 'infos blablabla'];
let agileValues: string[] = ['agile-icon-svg', 'bg-white', 'infos blablabla'];
let notionValues: string[] = ['notion-icon-svg', 'bg-white', 'infos blablabla'];
let trelloValues: string[] = ['trello-icon-svg', 'bg-white', 'infos blablabla'];
let linuxValues: string[] = ['linux-icon-svg', 'transparent-grey', 'infos blablabla'];
let windowsValues: string[] = ['windows-icon-svg', 'bg-windows-blue', 'infos blablabla'];


let OthersMap = new Map<string, Array<string>>([
    ["Microsoft Excel", excelValues],
    ["Microsoft PowerBI", powerBiValues],
    ["Agile Method", agileValues],
    ["Notion", notionValues],
    ["Trello", trelloValues],
    ["Linux/MacOS", linuxValues],
    ["Windows", windowsValues],
  ]);

export { WebToolsMap, DevOpsMap, OthersMap };
