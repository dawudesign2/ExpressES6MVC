import Model from "./model.js";
import argon from "argon2";

class User extends Model {
    constructor() {
        super();
        this.table = "users";
        this.model = new Model();
    }

    async find(details) {
        return this.model.find(this.table, details);
    }

    async findAll() {
        return this.model.findAll(this.table);
    }

    async findById(id) {
        return this.model.findById(this.table, id);
    }

    async findByEmail(email) {
        return this.model.findByEmail(this.table, email);
    }

    hashingOptions = {
        hashLength: 32,
        timeCost: 3,
        memoryCost: 1024,
        parallelism: 1,
        type: argon.argon2id
    }

    async hashPassword(password) {
        return argon.hash(password, this.hashingOptions);
    }


    async create(details) {
        console.log(details);
        const hashedPassword = await this.hashPassword(details.password);
        const user = {
            firstname: details.firstname,
            lastname: details.lastname,
            email: details.email,
            password: hashedPassword
        }
        return this.model.create(this.table, user);
    }

    async update(details) {
        return this.model.update(this.table, details);
    }

    async delete(id) {
        return this.model.delete(this.table, id);
    }
}


export default User;