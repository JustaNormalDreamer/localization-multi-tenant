import {config} from "./config/config";


export function BaseResponse<T>() {

    class BaseResponseHost {

        private readonly _locale: string;

        private _code: string;

        private _message: string;

        private _data?: T[] | T;

        constructor(code: string, message: string, data?: T | T[]) {
            this._locale = config.locale;
            this._code = code;
            this._message = message;
            this._data = data;
        }

        get code(): string {
            return this._code;
        }

        set code(value: string) {
            this._code = value;
        }

        get message(): string {
            return this._message;
        }

        set message(value: string) {
            this._message = value;
        }

        get data(): T[] | T {
            return this._data;
        }

        set data(value: T[] | T) {
            this._data = value;
        }

        get locale(): string {
            return this._locale;
        }
    }
    return BaseResponseHost;
}