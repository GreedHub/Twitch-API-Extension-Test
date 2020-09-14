import {Router} from 'express';
import { TwitchController } from '../controllers/';

let router = Router();

router
    .route("/healtcheck")
    .get(async (req,res)=>{

        const {login} = req.query;

        let twitchController = await TwitchController.getInstance();

        twitchController.getUserInfo(login)
            .then(response=>{
                res.send(response);
            })
            .catch(err=>{
                console.log(err)
            })

    })

export {router};