"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 7000;
// Предварительные данные
const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" }
];
// Настройка CORS, если сервер и фронт работают на разных портах
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
// Эндпоинт для отдачи данных пользователей
app.get('/api/users', (req, res) => {
    res.json(users);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
