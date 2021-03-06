import knex from 'knex';
import Knex from 'knex';

export abstract class BaseDataBase {
    private static KNEX_CONNECTION: Knex | null = null;

    protected connection(){
        if(BaseDataBase.KNEX_CONNECTION === null){
            BaseDataBase.KNEX_CONNECTION = knex({
                client: "mysql",
                connection:{
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE_NAME,
                },
            });
        }

        return BaseDataBase.KNEX_CONNECTION
    }

    public static async destroyConnection(){
        if(BaseDataBase.KNEX_CONNECTION !== null){
            await BaseDataBase.KNEX_CONNECTION.destroy()
        }
        BaseDataBase.KNEX_CONNECTION = null
    }
}