import express from "express"
import { createPlayer, findOneByID, findOneByIdEmail, updatePlayer, changePlayerPortrait, deletePlayer,findAll} from "../controllers/playerController.js"

//enrutador es como una guia que te define donde se encuentra cada cosa
const router = express.Router()

router.post("/newPlayer", createPlayer)
router.get("/findOneById/:playerID", findOneByID)
router.get("/findAll/:playerID", findAll)
router.get("/findOneByEmail/:playerEmail",findOneByIdEmail)
router.put("/update/:playerID",updatePlayer)
router.patch("/changePortrait/:playerID",changePlayerPortrait)
router.delete("/deletPlayer/:playerID", deletePlayer)


export default router 