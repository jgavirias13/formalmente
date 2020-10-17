const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const lodash = require('lodash');

class Config{
    constructor({Logger}){
        this.logger = Logger;
        this.initConfig();
    }

    initConfig(){
        this.parms = {};
        this.logger.writeInfo(`Configurando ambiente ${process.env.ENV}`);
        if(process.env.ENV == 'develop'){
            const unparseParams = dotenv.config();
            this.parms = dotenvExpand(unparseParams).parsed;
        }else{
            lodash._.each(process.env, (value, key) => {
                this.parms[key] = value;
            })
        }
    }
}

module.exports = Config;