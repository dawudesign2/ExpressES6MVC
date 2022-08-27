import { body, validationResult } from 'express-validator';
class Controller {

    validateUser() {
        return [
            body("email")
                .isEmail()
                .withMessage("Please enter a valid email"),
            body("firstname")
                .isLength({ max: 255 })
                .withMessage("Firstname must be less than 255 characters"),
            body("lastname")
                .isLength({ max: 255 })
                .withMessage("Lastname must be less than 255 characters"),
            (req, res, next) => {
              const errors = validationResult(req);
          
              if (!errors.isEmpty()) {
                res.status(422).json({ validationErrors: errors.array() });
              } else {
                next();
              }
            },
        ];  
    }

    index(_ ,res) {
        res.send('Express ES6 MVC is working!');
    }
}




export default new Controller;