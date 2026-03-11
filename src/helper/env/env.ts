import * as dotenv from 'dotenv'

export const getEnv = () => {
    if (process.env.ENV) {
       // console.log("Env ENV "+process.env.ENV);
        

        dotenv.config({
            override: true,
            path: `src/helper/env/.env.${process.env.ENV}`
        })
    } else {
        console.error("NO ENV PASSED!")
    }



   
}