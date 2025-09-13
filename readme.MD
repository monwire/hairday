# 💇‍♂️ Hair Day

**Aplicação web para agendamento de cortes de cabelo.**  
Este projeto foi desenvolvido junto com o professor no **Curso FullStack da Rocketseat**, com o objetivo de praticar **JavaScript moderno (ESModules), Day.js, consumo de API fake (JSON Server)** e o uso de **Webpack** para empacotamento.

---

## 🚀 Tecnologias

- **HTML5**
- **CSS3**
- **JavaScript (ESModules)**
- **Day.js** – manipulação de datas
- **JSON Server** – API fake para simular backend
- **Webpack** – empacotamento e build
- **Babel** – compatibilidade de código

---

## 📂 Estrutura do Projeto

hairday/
├── dist/ # Build final gerado pelo Webpack
├── node_modules/ # Dependências do projeto
├── src/
│ ├── assets/ # Imagens e ícones
│ │ ├── afternoon.svg
│ │ ├── arrow-down.svg
│ │ ├── calendar.svg
│ │ ├── cancel.svg
│ │ ├── logo.svg
│ │ ├── morning.svg
│ │ ├── night.svg
│ │ ├── person.svg
│ │ └── scissors.svg
│ │
│ ├── libs/ # Bibliotecas externas
│ │ └── dayjs.js
│ │
│ ├── modules/ # Código modularizado
│ │ ├── form/ # Funcionalidades do formulário
│ │ │ ├── date-change.js
│ │ │ ├── hours-click.js
│ │ │ ├── hours-load.js
│ │ │ └── submit.js
│ │ │
│ │ ├── schedules/ # Funcionalidades dos agendamentos
│ │ │ ├── cancel.js
│ │ │ ├── load.js
│ │ │ ├── show.js
│ │ │ └── page-load.js
│ │
│ │
│ ├── services/ # Serviços de API
│ │ ├── api-config.js
│ │ ├── schedule-cancel.js
│ │ ├── schedule-fetch-by-day.js
│ │ └── schedule-new.js
│ │
│ ├── styles/ # Arquivos CSS
│ │ ├── form.css
│ │ ├── global.css
│ │ └── schedule.css
│ │
│ ├── utils/ # Funções utilitárias
│ │ └── opening-hours.js
│ │
│ └── main.js # Entry point principal
│
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── readme.md
├── server.json
└── webpack.config.js

---

## ⚙️ Funcionalidades

- Seleção de **data** para agendamento.
- Exibição de **horários disponíveis** (manhã, tarde e noite).
- Agendamento com **nome do cliente**.
- Listagem dos agendamentos por período.
- Cancelamento de agendamentos.
- Armazenamento em **API fake (JSON Server)**.

---

## Aprendizados

Durante o desenvolvimento, foram praticados conceitos como:

- Organização de código em módulos (ESModules).
- Manipulação de datas com Day.js.
- Comunicação com API usando fetch.
- Simulação de backend com JSON Server.
- Configuração de build com Webpack e Babel.

## Créditos

Projeto desenvolvido durante o Curso Full-Stack da Rocketseat
