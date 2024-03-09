import { Router } from "express";
import { WhatsappRoutes } from "./whatsapp/router";




export class AppRoutes{
    
    static get routes(): Router{
        const router =  Router();

        router.use('/respuestas',WhatsappRoutes.routes);

        return router;
    }



}