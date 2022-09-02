class Auth {

    constructor() {
        this.user = null;
        this.token = null;
    }
    
    async login(email, password) {
        const user = await this.findByEmail(email);
        if(user) {
            const isValid = await this.comparePassword(password, user.password);
            if(isValid) {
                this.user = user;
                this.token = this.generateToken();
                return this.token;
            }
        }
        return false;
    }

    async register(email, password) {
        const user = await this.findByEmail(email);
        if(user) {
            return false;
        }
        const hash = await this.hashPassword(password);
        const newUser = await this.create({
            email,
            password: hash
        });
        this.user = newUser;
        this.token = this.generateToken();
        return this.token;
    }
alter 

}



export default Auth();