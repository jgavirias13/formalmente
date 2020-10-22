import mongoose from 'mongoose';

export class Db {
  constructor({ Config, Logger }) {
    this.Config = Config;
    this.Logger = Logger;
  }

  connect() {
    return mongoose.connect(this.Config.parms.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      connectTimeoutMS: 5000
    });
  }
}
