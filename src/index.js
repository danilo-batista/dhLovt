import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(express.static(__dirname + '/public'));

app.get("/", (request, response) => {
    return response.sendFile(path.join(__dirname, "src/views/index.html"));
});

app.listen(3333, () => {
    console.log("Server is running at port 3333...");
});