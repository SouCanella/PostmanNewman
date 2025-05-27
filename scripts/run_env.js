// scripts/run_env.js
require("dotenv").config(); // Carrega o .env

const { execSync } = require("child_process");
const { mkdirSync } = require("fs");
const path = require("path");

const env = process.env.ENV || "dev";
const timestamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\..+/, "").replace("T", "_");

const baseUrls = {
  dev: process.env.BASE_URL_DEV,
  staging: process.env.BASE_URL_STAGING,
  prod: process.env.BASE_URL_PROD
};

const baseUrl = baseUrls[env];

if (!baseUrl) {
  console.error(`❌ Ambiente '${env}' não definido no .env`);
  process.exit(1);
}

const collection = path.join(".postman", "collections", "api-main.postman_collection.json");
const htmlReport = path.join("reports", `report-${env}_${timestamp}.html`);
const jsonReport = path.join("reports", `report-${env}_${timestamp}.json`);

mkdirSync("reports", { recursive: true });

const command = `npx newman run ${collection} --env-var "base_url=${baseUrl}" -r htmlextra,json --reporter-htmlextra-export ${htmlReport} --reporter-json-export ${jsonReport}`;

console.log(`🧪 Executando testes no ambiente: ${env}`);
execSync(command, { stdio: "inherit" });
console.log(`📄 Relatórios gerados em: ${htmlReport}`);
