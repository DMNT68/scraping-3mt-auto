import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

import {customeResponse} from '../common/customResponses';
import {SECRETORPRIVATEKEY} from '../config/constants';

/**
 * Middleware function that checks if the token is present in the request, verifies it, and if valid,
 * adds the user data to the request body.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The function to call when moving to the next middleware.
 * @returns {void}
 */
export const validatorJWT = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Get the Authorization header from the request
        const Authorization = req.header('Authorization');

        // If no Authorization header is found, return a 401 response with an error message
        if (!Authorization) {
            return res.status(401).json({
                msg: 'No token found in the request',
            });
        }

        // Verify the token and extract the user id from it
        const {object}: any = jwt.verify(Authorization, `${SECRETORPRIVATEKEY}`);
        const {id} = object;

        // Find the user by id using the findUserByIdForToken function

        // If no user is found, return a custom response with a 401 status code and an error message
      

        // Add the user data to the request body
      

        // Call the next middleware function
        next();
    } catch (error) {
        console.log('-->', error);

        // Return a custom response with a 401 status code and an error message
        return customeResponse({res, ok: false, msg: 'Access denied', status: 401});
    }
};
