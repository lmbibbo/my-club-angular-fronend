import {IPlayer} from './iplayer';

export interface CustomResponse {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    data: {players?: IPlayer[], player?: IPlayer}
}