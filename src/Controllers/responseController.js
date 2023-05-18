// export const success = (req, res, message, error, statusCode)=>{
//     res.status(statusCode || 200 ).send({
//         error:error,
//         body:message

//     })
//     };
    //Esto puede ser uno mismo

    export const responseMessage = (req, res, message, error, statusCode, details)=>{
        // console.log('[response]'+details);
        res.status(statusCode).send({
            error:error,
            message: message ,
            body :details,
        })


    }
    
    // export const error = (req,res, message, error, statusCode)=>{
    //  res.status(statusCode || 500).send({
    //     error:error,
    //     body:message
    //  })
    // };
    