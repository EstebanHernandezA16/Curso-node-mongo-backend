// export const success = (req, res, message, error, statusCode)=>{
//     res.status(statusCode || 200 ).send({
//         error:error,
//         body:message

//     })
//     };
    //Esto puede ser uno mismo

    export const responseMessage = (req, res, message, error, statusCode, details)=>{
        console.log('[response]'+details);
        res.status(statusCode || 102).send({
            error:error || 'Error not found',
            message: message || 'Message not found',
        })


    }
    
    // export const error = (req,res, message, error, statusCode)=>{
    //  res.status(statusCode || 500).send({
    //     error:error,
    //     body:message
    //  })
    // };
    