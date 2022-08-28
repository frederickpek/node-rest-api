import express from 'express';
import bodyParser from 'body-parser';
import { promises as fs } from 'fs';
import people from './people';

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send('Hey!');
});

app.get('/people', (req, res) => {
    res.json(people);
});

app.get('/people/:name', (req, res) => {
    const { name } = req.params;
    const person = people.find((x) => x.name === name);
    res.json(person);
});

app.get('/file-data', async (req, res) => {
    const data = await fs.readFile(`${__dirname}/people-data.json`);
    const loadedPeople = JSON.parse(data);
    res.json(loadedPeople);
});

app.post('/people', (req, res) => {
    const newPerson = req.body;
    people.push(newPerson);
    res.json(people);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
