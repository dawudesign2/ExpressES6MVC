
class AuthController {
    login(_ , res) {
        res.render("Auth/login.ejs");
    }

    register(_ ,res) {
        res.render("Auth/register.ejs");
    }
}

export default new AuthController();