import Model from "./model.js";

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

    async create(details) {
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