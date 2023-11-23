
const asyncHanddler = (requestHeader) =>{
    (req , res , next) =>{
        Promise.resolve(requestHeader(req ,res , next)).
        catch((err)=> next(err)) 
    }
}



export {asyncHanddler}

// const asyncHanddler = (fn)=> async (req , res , next) =>{
//     try {
//         await fn(req , res , next);
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }