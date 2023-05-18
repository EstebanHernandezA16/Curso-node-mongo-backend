import express from "express";
import { PORT } from './src/Config/config.js'
import { router } from "./src/Routes/routes.js";


router.use(express.json());

router.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});


