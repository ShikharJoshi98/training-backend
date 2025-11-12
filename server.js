const express = require("express");
const { PORT, FRONTEND_URL,NEXT_FRONTEND_URL, DB_HOST } = require("./config");
const apiRoutes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const allowedOrigins = [
  NEXT_FRONTEND_URL,
  FRONTEND_URL
];

app.use(cors({  
  origin:true,
  credentials: true                
}));
app.use(cookieParser());
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({ limit: "10mb",extended: true }));

app.use('/api', apiRoutes);

//test-API
app.get('/', (req, res) => {
    res.send("Server working");
})

console.log(`Database connected successfully ${DB_HOST}`)

app.listen(PORT, () => {
    console.log(`Server working on ${PORT}`);
})