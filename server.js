import express from "express";
import { PORT } from './src/Config/config.js'
import { routes } from "./src/Routes/routes.js";

const app = express();
app.use(express.json());

routes(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});


