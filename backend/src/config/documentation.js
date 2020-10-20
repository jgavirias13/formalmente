import swaggerUiExpress from "swagger-ui-express";
import yaml from 'yamljs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const swaggerDocumentFile = yaml.load(`${__dirname}/apiDocumentation.yaml`)
const Docs = {
  swaggerUi: swaggerUiExpress,
  swaggerDocument: swaggerDocumentFile
};

export default Docs;
