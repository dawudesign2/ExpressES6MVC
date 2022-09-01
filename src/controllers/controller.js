import { body, validationResult } from 'express-validator';
import Movie from '../models/Movie.js';
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

    async index(_ ,res) {
        const movies = new Movie();
        const allMovies = await movies.findAll();
        res.render('Home/index', { movies: allMovies[0]});
    }
}




export default new Controller;