import { Request, Response, Router } from "express";




export class AppRoutes{
    static get routes(): Router{
        const router =  Router();

        router.use('/respuestas',(req:Request,res:Response)=>{
            console.log("entro");
            res.send('hola');
        });

        return router;
    }



}