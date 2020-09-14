import { TwitchApi } from '../servicios';
import { TwitchToken } from '../models';


class TwitchController{

    private static instance:TwitchController;
    token:TwitchToken;

    private constructor(){}

    public static async getInstance(){
        if(!TwitchController.instance){
            TwitchController.instance = new TwitchController();
            await TwitchController.instance.getAccessToken();
        }
        
        return TwitchController.instance;
    }

    getAccessToken(){

        return new Promise(async(resolve,reject)=>{

            let response = await TwitchApi.getAccessToken()
                .catch(err=>{
                    console.error(err);
                    reject(err);
                });

            //TODO: Revisa de hacer bien el typecast
            this.token = new TwitchToken(response);

            resolve();

        });
    }

    public getUserInfo(login:string){

        return new Promise(async(resolve,reject)=>{

            let response = await TwitchApi.getUserInfo(this.token.access_token,login)
                .catch(err=>{
                    console.error(err)
                })

            resolve(response);
            
        });

    }


}

export { TwitchController };