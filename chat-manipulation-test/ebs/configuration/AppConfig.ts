const AppConfig = {

    twitch:{
        ext_client_id:     process.env.EXT_CLIENT_ID,
        ext_client_secret: process.env.EXT_SECRET,
        ext_owner_id:      process.env.EXT_OWNER_ID,
        loginUrl:          process.env.TWITCH_LOGIN_URL,
        apiUrl:            process.env.TWITCH_API_URL,
    }

}

export {AppConfig};