const { execSync } = require("child_process");
const { mkdirSync } = require("fs");
const path = require("path");

const timestamp = new Date()
  .toISOString()
  .replace(/[-:]/g, "")
  .replace(/\..+/, "")
  .replace("T", "_");

const collection = path.join(".postman", "collections", "api-main.postman_collection.json");
const environment = path.join(".postman", "environments", "dev.postman_environment.json");
const htmlReport = path.join("reports", `report-htmlextra_${timestamp}.html`);
const jsonReport = path.join("reports", `report_${timestamp}.json`);

mkdirSync("reports", { recursive: true });

const command = `npx newman run ${collection} -e ${environment} -r htmlextra,json --reporter-htmlextra-export ${htmlReport} --reporter-json-export ${jsonReport}`;

console.log("📦 Executando testes Newman com timestamp...");
execSync(command, { stdio: "inherit" });
console.log(`✅ Relatórios gerados em: ${htmlReport}`);
