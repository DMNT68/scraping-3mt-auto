import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

/**
 * Validates the fields of a request and returns a 400 status code with the errors if any.
 * Otherwise, calls the next function.
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {NextFunction} next - The function to call when moving to the next middleware
 * @returns The errors if any.
 */
export const validatorField = (req: Request, res: Response, next: NextFunction) => {
  // Validate the fields of the request
  const errors = validationResult(req);

  // If there are errors, return a 400 status code with the errors
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  // Call the next function
  next();
};
