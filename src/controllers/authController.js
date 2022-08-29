class AuthController {
    login(_, res) {
        res.render("Auth/login.ejs");
    }
  
}

export default new AuthController();