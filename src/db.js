import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: 'database',
    user: 'db_user',
    password: 'db_games',
    port: 3306,
    database: 'games_db'
})