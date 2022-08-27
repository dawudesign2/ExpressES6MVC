import database from '../../database.js';

class Model {

    constructor() {
        this.db = database;
    }

    async DB() {
        return this.db.promise();
    }

    async find(table, details) {
        const db = await this.DB();
        const intialSql = `SELECT * FROM ${table}`;
        const where = [];
        for (const key in details) {
           if(details[key] != null) {
               where.push({
                   field: key,
                   value: details[key],
                   operator: "="
               })
           }
        }
        return db.query(
            where.reduce(
                (sql, {field, operator}, index) => `${sql} ${index === 0 ? 'WHERE' : 'AND'} ${field} ${operator} ?`,
                intialSql
            ),
            where.map(({value}) => value)
        )

    }

    async findById(table, id) {
        const db = await this.DB();
        const sql = `SELECT * FROM ${table} WHERE id = ${id}`;
        return db.query(sql)
    }

    async create(table, details) {
        const db = await this.DB();
        const sql = `INSERT INTO ${table} SET ?`;
        return db.query(sql, details)
    }

    async update(table, details) {
        const db = await this.DB();
        const sql = `UPDATE ${table} SET ? WHERE id = ${details.id}`;
        return db.query(sql, details)
    }

    async delete(table, id) {
        const db = await this.DB();
        const sql = `DELETE FROM ${table} WHERE id = ${id}`;
        return db.query(sql)
    }

    
}

export default Model;