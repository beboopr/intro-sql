import {creds} from "./creds.js"
import pg from "pg" //to import pg from npm/grabbed our libary
const { Client, Pool } = pg // to activate it


const pool = new Pool(creds)

const query = "select * from customers order by customerid" // copy paste a sql line

pool.query(query, (err, data) => { // pool is to connect to database
    if (err) {
        console.error(err)
        return
    }
    console.table(data.rows)

    pool.end() // to end task
}) 