import { body } from "express-validator";

const validateUsernameOrEmail = body("username")
  .escape()
  .notEmpty()
  .withMessage("Please provide either username or email")
  .isLength({
    min: 3,
  })
  .withMessage("Username should be at least 3 characters long");

const validatePassword = body("password")
  .escape()
  .notEmpty()
  .withMessage("Please provide a password")
  .isLength({
    min: 6,
  })
  .withMessage("Password needs to be atleast 6 characters long");

const validateFirstname = body("firstname")
  .escape()
  .notEmpty()
  .withMessage("Please provide your first name");

const validateLastname = body("lastname")
  .escape()
  .notEmpty()
  .withMessage("Please provide your last name");

const validateUsername = body("username")
  .escape()
  .notEmpty()
  .withMessage("Please provide a username")
  .isLength({
    min: 3,
  })
  .withMessage("Username should be at least 3 characters long");

const validateEmail = body("email")
  .escape()
  .notEmpty()
  .withMessage("Please provide your email")
  .isEmail()
  .withMessage("Please provide a valid email");

const validateConfirmPassword = body("confirmPassword")
  .custom((value, { req }) => {
    return value === req.body.password;
  })
  .withMessage("Password and Confirm Password does not match");

export default {
  validateUsernameOrEmail,
  validatePassword,
  validateFirstname,
  validateLastname,
  validateUsername,
  validateEmail,
  validateConfirmPassword,
};
