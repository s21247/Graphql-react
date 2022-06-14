import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json" assert{type: "json"};

export const firebaseDB = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://savoy-db-18cee-default-rtdb.europe-west1.firebasedatabase.app"
})

export const testDB = admin.initializeApp({
    projectId: process.env.DATABASE_URL,
    databaseURL: "http://localhost:9000/?ns=data"
},'testDB');