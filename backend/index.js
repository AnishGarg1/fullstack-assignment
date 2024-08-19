const epxress = require("express");
const app = epxress();
const cors = require("cors");
const cardRoutes = require("./routes/Card");

const dbConnect = require("./config/database");

const dotenv = require("dotenv");
dotenv.config();

dbConnect();
const port = process.env.PORT || 4000;

// middleware
app.use(epxress.json());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
)

// Connecting the routes
app.use("/api/v1/card", cardRoutes)

app.get("/", (req, res) => {
    res.send("<h1>Help Center App</h1>")
})

app.listen(port, (req, res) => {
    console.log(`Server is listening on port: ${port}`);
});