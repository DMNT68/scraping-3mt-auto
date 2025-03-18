import jwt, {decode} from 'jsonwebtoken';
import {SECRETORPRIVATEKEY} from '../config/constants';

/**
 * Generates a JSON Web Token (JWT) based on the provided object and expiration time.
 *
 * @param {object} object - The object to be encoded in the token payload.
 * @param {string | number | undefined} time - The expiration time for the token.
 * @param {string} secret - The secret or private key used for signing the token.
 * @return {Promise<string>} - A promise that resolves with the generated JWT.
 */
export const generateJWT = ({object, time, secret}: {object: {}; time: any; secret: string}) => {
    return new Promise((resolve, reject) => {
        // Create the payload object with the given object
        const payload = {
            object,
        };

        // Sign the payload with the secret and set the expiration time
        jwt.sign(
            payload,
            secret,
            {
                expiresIn: time,
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject('Unable to generate the token'); // Reject the promise if there is an error
                } else {
                    resolve(token); // Resolve the promise with the generated token
                }
            },
        );
    });
};

/**
 * Generates a JSON Web Token (JWT) object with the given object and expiration time.
 *
 * @param {object} object - The object to be included in the payload of the JWT.
 * @param {string | number | undefined} time - The expiration time for the JWT.
 * @return {Promise<string>} - A promise that resolves to the generated JWT.
 */
export const generateJWTObjectWhiteTime = (object: {}, time: any) => {
    return new Promise((resolve, reject) => {
        // Create the payload object with the given object
        const payload = {
            object,
        };

        // Sign the payload with the secret or private key and set the expiration time
        jwt.sign(
            payload,
            `${SECRETORPRIVATEKEY}`,
            {
                expiresIn: time,
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject('No se pudo generar el token'); // Reject the promise if there is an error
                } else {
                    resolve(token); // Resolve the promise with the generated token
                }
            },
        );
    });
};

/**
 * Decode a JWT payload.
 *
 * @param {string} payload - The JWT payload to decode.
 * @return {Promise<any>} A promise that resolves to the decoded payload.
 */
export const decodeJWT = (payload: string) => {
    return new Promise((resolve) => {
        // Decode the JWT payload
        const data = decode(payload);
        // Resolve the promise with the decoded payload
        resolve(data);
    });
};

/**
 * Verifies a JWT token and returns an array indicating the verification status and the decoded object if the token is valid.
 *
 * @param {string} token - The JWT token to be verified.
 * @returns {Array<boolean, any>} - An array containing a boolean indicating the verification status and the decoded object if the token is valid.
 */
export const comprobarJWT = (token: string = ''): [boolean, any] => {
    try {
        const {object}: any = jwt.verify(token, `${SECRETORPRIVATEKEY}`);
        return [true, object];
    } catch (error) {
        return [false, null];
    }
};
