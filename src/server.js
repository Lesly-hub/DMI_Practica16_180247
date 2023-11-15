import express from "express";
import playerRoutes from "./routes/playerRoutes.js"
import dbConnection from "./config/db.js";
import Player from "./models/Player.js";

const api = new express()

const port = 18024 //matricula individual 

api.use("/players", playerRoutes)
try
{
    console.log("STATUS -> Intentando contectarse a la Base de Datos ...")
    dbConnection.authenticate()
    console.log("STATUS -> Conexión a la BD exitosa ...")
    console.log("STATUS -> Sincronizando la BD con los Objetos existentes ...")
    dbConnection.sync();
    console.log("STATUS -> BD lista para realizar operaciones ...")
}
catch (error)
{
    console.log("Han ocurrido errores intentando conectarse a la BD")
    console.log(error)
}

api.listen(port, () => {
    console.log(`El API ha sido iniciada y se encuentra escuchando por el puerto: ${port}`)
})