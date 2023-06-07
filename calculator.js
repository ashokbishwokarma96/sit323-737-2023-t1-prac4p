const express = require('express');
const app = express();
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'loss/combined.log' })]
})

logger.log({
    level: 'info',
    message: 'Hello distributed log files!',
})

app.get('/', (req, res) => {
    console.log("hello");
    res.json(200).json({})
})

// Addition endpoint
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ error: 'Invalid parameters' });
    } else {
        const result = num1 + num2;
        res.json({ result });
    }
});

// Subtraction endpoint
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ error: 'Invalid parameters' });
    } else {
        const result = num1 - num2;
        res.json({ result });
    }
});

// Multiplication endpoint
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ error: 'Invalid parameters' });
    } else {
        const result = num1 * num2;
        res.json({ result });
    }
});

// Division endpoint
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ error: 'Invalid parameters' });
    } else {
        const result = num1 / num2;
        res.json({ result });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
