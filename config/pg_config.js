import {Client } from "pg"

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "wojtek",
    database: "savoy"
});

client.connect();