# API Tests — Postman + Newman

Este projeto executa testes de API utilizando coleções do Postman com automação via Newman, geração de relatórios HTML com timestamp, suporte a múltiplos ambientes (`dev`, `staging`, `prod`) e variáveis controladas via `.env`.

---

## 🚀 Requisitos

- Node.js **v18** (compatível com Newman)
- npm

---

## 📂 Estrutura de Pastas

```
.
├── .postman/
│   ├── collections/
│   │   └── api-main.postman_collection.json
│   └── environments/
│       ├── dev.postman_environment.json
│       ├── staging.postman_environment.json
│       └── prod.postman_environment.json
├── scripts/
│   └── run_env.js
├── reports/
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Setup

```bash
npm install
```

---

## 🌐 Configuração de Ambientes

Crie um arquivo `.env` com as URLs dos ambientes:

```dotenv
BASE_URL_DEV=https://jsonplaceholder.typicode.com
BASE_URL_STAGING=https://staging.api.meusistema.com
BASE_URL_PROD=https://api.meusistema.com
```

---

## 🧪 Executar os testes

```bash
npm run test:dev      # Executa com BASE_URL_DEV
npm run test:staging  # Executa com BASE_URL_STAGING
npm run test:prod     # Executa com BASE_URL_PROD
```

Relatórios serão salvos com timestamp em `reports/`.

---

## 📁 Ignorados no Git

Certifique-se de ignorar os seguintes arquivos:

```
node_modules/
reports/
.env
```

---

## 📋 Licença

Este projeto é privado e não possui licença pública.
