const express = require("express")
const axios = require("axios")
const cors = require("cors")

const app = express()
app.listen(process.env.port || 3000);

app.use(cors())

const API_KEY = "37a80d90a9e0aacbcb808059e0c8c5ba"

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message)
    }
})