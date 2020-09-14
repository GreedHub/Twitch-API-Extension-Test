require('dotenv').config({ path: './variables.env' });
import express = require('express');
import bodyParser = require('body-parser');
import {router} from './routes';
import{ AppConfig } from './configuration';


let port = 5000;

let bodyParserConfig = {
    limit: '100mb',
    parameterLimit: 100, 
    extended: true
}

let app = express();
app.use(bodyParser.json(bodyParserConfig));
app.use(bodyParser.urlencoded(bodyParserConfig));
app.use(router);

app.listen(port,()=>{
    console.log(`ebs running on port ${port}`)
})