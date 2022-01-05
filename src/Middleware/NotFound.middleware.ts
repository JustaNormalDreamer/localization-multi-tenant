import {ExpressErrorMiddlewareInterface, Middleware} from "routing-controllers";
import { Request, Response, NextFunction } from "express";
import {EntityNotFoundError} from "typeorm";

@Middleware({ type: "after" })
export class NotFoundMiddleware implements ExpressErrorMiddlewareInterface {
    error(error: any, request: Request, response: Response, next: NextFunction) {

        if(error instanceof EntityNotFoundError) {
            response.status(404).json({
                status: 404,
                message: "Not Found"
            });
        }

        next();
    }

}