

class  ApiError extends Error {
    constructor(
        message= "something went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message =message
        this.sucess = false
        this.error = error

        if(statck){
            this.stack = statck
        } else{
            Error.captureStackTrace(this , this.constroctor)
        }
    }
}


export {ApiError}