import User from "../models/User.js";
class AuthController {
    login(_ , res) {
        res.render("Auth/login.ejs");
    }

    async register(req ,res) {
        const { firstname, lastname, email, password } = req.body;
        const details = {
            firstname,
            lastname,
            email,
            password
        }
        if(!firstname || !lastname || !email || !password) {
            res.render("Auth/register");
        } else {
            if (password === req.body.password_confirmation ) {
                const user = new User();
                const result = await user.create(details);
                if(result) {
                    res.render("Auth/login");
                } else {
                    res.render("Auth/register");
                }
                res.render("Auth/login");
            } else {
                console.log('passwords do not match');
            }
        }
        res.render("Auth/register");
    }
}

export default new AuthController();