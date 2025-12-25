import ratelimit from "../config/upstash.js";

const rateLimiter = async (req,res,next) => {
    try{
        //if we use authentication, replace my-limit-key with user id
        const {success} = await ratelimit.limit("my-limit-key");
        if (!success){
            return res.status(429).json("Too many requests, please try again later");
        }
        next();
    } catch(error){
        console.log("Rate limit error", error);
        next(error);
    }
}

export default rateLimiter;