export * from './kamajiClastixIoV1alpha1Api';
import { KamajiClastixIoV1alpha1Api } from './kamajiClastixIoV1alpha1Api';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { type RequestFile } from '../model/models';

export const APIS = [KamajiClastixIoV1alpha1Api];
