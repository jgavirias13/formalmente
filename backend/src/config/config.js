import dotenv from 'dotenv';
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
            const unparseParams = dotenv.config();
            this.parms = dotenvExpand(unparseParams).parsed;
            this.parms.ENV = process.env.ENV;
        }else{
            _.each(process.env, (value, key) => {
                this.parms[key] = value;
            })
        }
    }
}

export default Config;