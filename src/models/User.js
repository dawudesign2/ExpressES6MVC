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

    async findById(id) {
        return this.model.findById(this.table, id);
    }

    hashingOptions = {
        hashLength: 32,
        timeCost: 3,
        memoryCost: 1024,
        parallelism: 1,
        type: argon.argon2id
    }

    async hashPassword(password) {
        return argon.hash(password, hashingOptions);
    } 

    async comparePassword(password, hash) {
        return argon.verify(hash, password, hashingOptions);
    }

    async create(details) {
        this.hashPassword(details.password);
        return this.model.create(this.table, details);
    }

    async update(details) {
        return this.model.update(this.table, details);
    }

    async delete(id) {
        return this.model.delete(this.table, id);
    }
    

}


export default User;