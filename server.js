const express = require("express");
const { PORT } = require("./config");
const apiRoutes = require("./routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

//test-API
app.get('/', (req, res) => {
    res.send("Server working");
})

app.listen(PORT, () => {
    console.log(`Server working on ${PORT}`);
})