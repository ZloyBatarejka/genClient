const fs = require("node:fs");
const { Eta } = require("eta");

// Создаём инстанс Eta
const eta = new Eta();

// Шаблон (можно также положить в отдельный файл)
const template = `<% const users = ["Alice","Bob"] %>
<% users.forEach(u => { %>
console.log("<%= u %>");
<% }) %>`;

// Рендерим шаблон
const result = eta.renderString(template);

console.log(result);
