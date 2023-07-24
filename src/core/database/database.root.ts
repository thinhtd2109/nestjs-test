import { Sequelize } from 'sequelize-typescript';
import { DEVELOPMENT, PRODUCTION, TEST } from "../constants";
import { databaseConfig } from "./database.config";

let config;
switch (process.env.NODE_ENV) {
    case DEVELOPMENT:
        config = databaseConfig.development;
        break;
    case TEST:
        config = databaseConfig.test;
        break;
    case PRODUCTION:
        config = databaseConfig.production;
        break;
    default:
        config = databaseConfig.development;
}
const sequelize = new Sequelize(config);

export default sequelize;