import { Request, Response } from "express";



export class RespuestasWhasappController{

    public getWha = (req: Request , res: Response) =>{
        res.status(200).json({mesage:"hola"});
    }
}