let axios = require('axios');
import {AppConfig} from '../configuration';
import { TwitchToken } from '../models';

const TwitchApi = {
    getAccessToken,
    getUserInfo,
}


/* POST https://id.twitch.tv/oauth2/token
    ?client_id=<your client ID>
    &client_secret=<your client secret>
    &grant_type=client_credentials
    &scope=<space-separated list of scopes> 
    
    
    {
    "access_token": "<user access token>",
    "refresh_token": "",
    "expires_in": <number of seconds until the token expires>,
    "scope": ["<your previously listed scope(s)>"],
    "token_type": "bearer"
    }
*/

function getAccessToken():Promise<TwitchToken>{

    return new Promise(async(resolve,reject)=>{

        const {twitch} = AppConfig;

        let url = `${twitch.loginUrl}/oauth2/token`;
        url += `?client_id=${twitch.ext_client_id}`;
        url += `&client_secret=${twitch.ext_client_secret}`;
        url += `&grant_type=client_credentials`;


        const params = {
            url,
            method: "post",
        };

        axios(params).then(response=>{
            
                resolve(response.data);
                
            }).catch(err=>{
                reject(err);
            })

    })
   
}


/* 

curl  -H 'Client-ID: uo6dggojyb8d6soh92zknwmi5ej1q2' \
-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
-X GET 'https://api.twitch.tv/helix/users?id=44322889'

*/
function getUserInfo(authToken:string,login:string){

    return new Promise(async(resolve,reject)=>{

        const {twitch} = AppConfig;

        const params = {
            method: 'get',
            url: `${twitch.apiUrl}/helix/users?login=${login}`,
            headers:{
                "Client-ID": twitch.ext_client_id,
                "Authorization": `Bearer ${authToken}`,
            }
        };

        axios(params)
            .then(response=>{
                resolve(response.data);                    
            }).catch(err=>{
                reject(err);
            })

    })
   
} 

export { TwitchApi };