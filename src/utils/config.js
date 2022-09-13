const dotenv = require('dotenv')
dotenv.config()

let pgConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
}


const firebaseConfig = {
    apiKey: "AIzaSyDbolEtGnup__Gyz6wxwbT-wxvpzbLa-6s",
    authDomain: "eaturkish-ae0b4.firebaseapp.com",
    projectId: "eaturkish-ae0b4",
    storageBucket: "eaturkish-ae0b4.appspot.com",
    messagingSenderId: "878810146163",
    appId: "1:878810146163:web:39e9d5b69ce2cb5264d106",
    measurementId: "G-H2BNEK93XN"
};

module.exports = {
    pgConfig,
    firebaseConfig
}