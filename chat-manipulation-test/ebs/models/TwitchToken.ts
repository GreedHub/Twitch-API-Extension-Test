class TwitchToken{
    
    "access_token": string;
    "refresh_token": string;
    "expires_in": Number;
    "scope": string[];
    "token_type": string;
    

    constructor(token:any){
        Object.keys(token).forEach(key=>{
            this[key] = token[key];
        })
    }

}

export { TwitchToken };