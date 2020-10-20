import dotenv from 'dotenv';
const { config } = dotenv;
import dotenvExpand from 'dotenv-expand';
import lodash from 'lodash';
const { _ } = lodash;

class Config{
    constructor({Logger}){
        this.logger = Logger;
        this.initConfig();
    }

    initConfig(){
        this.parms = {};
        this.logger.writeInfo(`Configurando ambiente ${process.env.ENV}`);
        if(process.env.ENV == 'develop'){
            const unparseParams = config();
            this.parms = dotenvExpand(unparseParams).parsed;
        }else{
            _.each(process.env, (value, key) => {
                this.parms[key] = value;
            })
        }
    }
}

export default Config;