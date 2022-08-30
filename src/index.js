import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(express.static(__dirname + '/public'));

app.get("/", (request, response) => {
    return response.json({ message: "Hello World!" });
});

app.listen(3333, () => {
    console.log("Server is running at port 3333...");
});