import Player from "../models/Player.js";

const createPlayer = (rq, rs) =>
{
    console.logs("Se ha solicitado la creación de un nuevo jugador");
    rs.status(200);
    rs.send("Se ha solicitado la creacion de un nuevo jugador"); 
} 
const findAll = (rq,res) =>
{
    console.log("Se ha solicitado la consulta der todos los jugadores");
    const allPlayers = Player.findAll()
    console.log(allPlayers.every(player => player instanceof Player)); 
    console.log("All players:", JSON.stringify(allPlayers, null, 2));
}

const findOneByID= (rq, rs) =>
{
    console.log(`Se ha solicitado buscar al jugador con id: ${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitado buscar al jugador con id: ${playerID}`);
} 

const findOneByIdEmail = (rq, rs) =>
{
    const playerEmail = rq.params.playerEmail
    console.log(`Se ha solicitado buscar al jugador con id: ${playerEmail}`);
    rs.status(200);
    rs.send(`Se ha solicitado buscar al jugador con id: ${playerEmail}`);
} 

const updatePlayer = (rq, rs) =>
{
    const playerID = rq.params.player.ID
    console.log(`Se ha solicitado el cambio de la imagen del perfil del jugador: ${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitado el cambio de la imagen del perfil del jugador: ${playerID}`);
} 

const changePlayerPortrait = (rq, rs) =>
{
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado buscar al jugador con id: ${playerEmail}`);
    rs.status(200);
    rs.send(`Se ha solicitado buscar al jugador con id: ${playerEmail}`);
} 

const deletePlayer = (rq, rs) =>
{
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado la eliminacion del jugador: ${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitado la eliminacion del jugador: ${playerID}`);
} 


export {createPlayer,findOneByID, findOneByIdEmail, changePlayerPortrait, deletePlayer, updatePlayer, findAll}