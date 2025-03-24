import express from 'express';

const app = express();
const port = 7000;

// Предварительные данные
const users = [
    { id: 1, name: "Матвей Смородин" },
    { id: 2, name: "Вася Пупкин" },
    { id: 3, name: "Женя Березин" }
];

// Настройка CORS, если сервер и фронт работают на разных портах
import cors from 'cors';
app.use(cors());

// Эндпоинт для отдачи данных пользователей
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
