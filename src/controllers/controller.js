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
            body("password")
                .isLength({ min: 8 })
                .withMessage("Password must be at least 8 characters long"),
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
        res.render("Home/index.ejs", {
            title: "Express Version ES6 with MVC",
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quia! Ut, sint suscipit quam enim porro quisquam necessitatibus quasi natus inventore nulla provident temporibus placeat voluptate deleniti velit magni cumque."
        });
    }
}




export default new Controller;