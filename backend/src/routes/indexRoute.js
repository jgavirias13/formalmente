import pkg from "express";
const {Router, json} = pkg;
import cors from "cors";

class IndexRoute {
  constructor() {
    this.router = Router();
    this.router.use(json);
    this.router.use(cors({ origin: "*" }));
  }
}

export default IndexRoute;