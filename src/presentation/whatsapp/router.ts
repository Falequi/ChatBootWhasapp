import { Router } from "express";
import { RespuestasWhasappController } from "./controller";





export class WhatsappRoutes{

    static get routes(): Router{

        const router = Router();
        const respuestasWhasappController = new RespuestasWhasappController();

        router.post('/',respuestasWhasappController.getWha);

        return router;
    }
}