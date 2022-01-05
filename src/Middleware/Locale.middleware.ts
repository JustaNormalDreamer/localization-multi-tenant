import { Request, Response, NextFunction } from "express";
import {ExpressMiddlewareInterface, Middleware} from "routing-controllers";
import {config} from "../config/config";

@Middleware({ type: "before" })
export class LocaleMiddleware implements ExpressMiddlewareInterface {
    use(request: Request, response: Response, next: NextFunction) {

        const supportedLocale: string[] = ['np', 'en'];

        const locale: string = request.headers['x-localization']?.toString();

        if(supportedLocale.includes(locale)) {
            config.locale = locale;
        } else {
            config.locale = config.defaultLocale;
        }

        // do something before controller is executed
        next();
    }
}