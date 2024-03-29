import { Request, Response } from "express";
import MessagingResponse from "twilio/lib/twiml/MessagingResponse";





export class RespuestasWhasappController {



    public getWha = (req: Request, res: Response) => {
        const { body } = req;
        const goodBoyUrl = 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?'
            + 'ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

        let message;

        if (body.NumMedia > 0) {
            message = new MessagingResponse().message("Thanks for the image! Here's one for you!");
            message.media(goodBoyUrl);
        } else {
            message = new MessagingResponse().message('Send us an image!');
        }

        res.set('Content-Type', 'text/xml');
        res.send(message.toString()).status(200);
    }
}