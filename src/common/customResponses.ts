import {Response} from 'express';

/**
 * Generates a bad response with a status code of 500 and a JSON payload
 * containing an error message.
 *
 * @param {Response} res - The response object used to send the bad response.
 * @return {void} This function does not return a value.
 */
export const badResponse = (res: Response) => {
    // Set the response status code to 500 and send a JSON payload with an error message
    res.status(500).json({
        ok: false,
        msg: `Ha ocurrido un error vuelva a intentarlo`,
    });
};

/**
 * Creates a custom response object and sends it as JSON.
 *
 * @param {boolean} ok - Indicates whether the response is successful.
 * @param {Response} res - The response object.
 * @param {number} status - The status code of the response.
 * @param {string} msg - The message to include in the response.
 * @param {any} data - The data to include in the response.
 * @return {void}
 */
export const customeResponse = ({ok, res, status, msg, data}: CustomResponse) => {
    // Set the status code and send the response as JSON

    const isValidStatus = Number.isInteger(status) && status >= 100 && status <= 599;
    if (!isValidStatus) {
        throw new Error('Invalid HTTP status code');
    }

    const isValidMsg = typeof msg === 'string';
    if (!isValidMsg) {
        throw new Error('Message must be a string');
    }

    res.status(status).json({
        ok,
        msg,
        data,
    });
};

interface CustomResponse {
    res: Response;
    ok: boolean;
    status: number;
    msg: string;
    data?: any;
}
