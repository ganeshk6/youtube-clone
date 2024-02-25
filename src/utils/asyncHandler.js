const asyncHandler = (asyncHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, re, next)).catch((err)=> {
            next(err)
        })
    }
}

export {asyncHandler}