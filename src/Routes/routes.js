import express from 'express'
import {responseMessage} from '../Controllers/responseController'


const router = express();

// router.get("/message", (req, res) => {

//   console.log(req.body);
//   console.log(req.query);
//   res.send("Hi!! with age :"+req.query.age);
// });
// router.get("/headerss", (req, res) => {
//     console.log(req.headers);
//     res.header({
//         "custom-header":"Valor personalizado"
//     })
//    res.send("Hi post!!");
//  });

router.post("/", (req, res) => {
    //   res.status(201).send({
    //     error: "",
    //     body: "Creado Correctamente",
    //   });
    // response(req, res, 'Solicitud de creacion recibida', null, 203)
    
    console.log(req.query);
    req.query.error
    ? (responseMessage(req, res, 'Error Inesperado',req.query.error,500, 'Error en el servidor, caido')) 
    : (responseMessage(req,res, 'Query Success','', 201))
    
    
    
    });
    
    router.get("/", (req, res) => {
      console.log(req.headers);
     
    });
    
    router.use('/router', express.static('public'));
    
    // router.use("/", (req, res) => {
    //   res.send("Hi!");
    // });
    
    export {router}