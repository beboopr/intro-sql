import pg from "pg"
import readline from "readline-sync"
const { Pool } = pg
import { creds } from "./creds.js"




const pool = new Pool(creds);



async function runQuery(query) {
    return await pool.query(query);
}
while (true) {
    const answer = readline.question("Run what?")
    let query = ""
    let results = ""
    switch (answer) {
        case "1":   //1. select * from customer
            query = "select customer_id,first_name,last_name from customer";
            const rows = await runQuery(query)
            console.table(rows.rows)
        case "2": //2. add a new customer
            query = `INSERT INTO customer(
            first_name, last_name, phone, email)
           VALUES ('Todd', 'Albert', '5615737773', 'todd@bocacode.com');`
           results = await runQuery(query)
           console.log("customer added")
            break;
        case "3": //3. update that custoomer
            query = `UPDATE customers
            SET first_name='super', 
            last_name='fantastic',
        --	email=?, phone=?, 
        -- 	created_at=?, 
            updated_at=NOW()
            WHERE customer_id=1;`
            results = await runQuery(query)
            console.log("customer updated");
            break;
        default:
            console.log("what?")
            break;
    }
}