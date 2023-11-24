
const asyncHandler = (requestHeader) =>{
    (req , res , next) =>{
        Promise.resolve(requestHeader(req ,res , next)).
        catch((err)=> next(err)) 
    }
}



export {asyncHandler}

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