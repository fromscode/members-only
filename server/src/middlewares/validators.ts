import {body} from 'express-validator';

const validateUsernameOrEmail = body('username').escape().notEmpty().withMessage('Please provide either username or email');

const validatePassword = body('password').escape().notEmpty().withMessage('Please provide a password').isLength({
    min: 6
}).withMessage('Password needs to be atleast 6 characters long');


export {
    validateUsernameOrEmail,
    validatePassword
}

