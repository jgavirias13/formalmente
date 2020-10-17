const express = require('express');

class Server{
    constructor({Config}){
        this.app = express();
        this.config = Config;
    }

    start(){
        return new Promise((resolve, reject) => {
            this.app.listen(this.config.parms.PORT, () => {
                resolve();
            }).on('error', function(err){
                reject(err);
            });
        });
    }
}

module.exports = Server;