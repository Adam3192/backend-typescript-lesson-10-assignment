import { Sequelize } from "sequelize";
import { CoffeeFactory } from "./coffee";

const dbName = 'restDB';
const username = 'sqluser';
const password = 'password';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

CoffeeFactory(sequelize);

export const db = sequelize;