import {NotFoundException} from '../errors/notFoundException.js';

export class DocumentController{

  constructor({DocumentService, AuthMiddleware}){
    this.DocumentService = DocumentService;
    this.AuthMiddleware = AuthMiddleware;
    this.resource = 'document';
  }

  get = async(req, res) => {
    const docId = req.params.docId;
    const document = await this.DocumentService.get(docId);
    if(!document){
      return new NotFoundException();
    }

    this.AuthMiddleware.authorizeToResource(req, document.owner, 'read', this.resource)
    return res.send(document);
  }

  getAll = async(req, res) => {
    const docs = await this.DocumentService.getAll();

    return res.send(docs);
  }

  create = async(req, res) => {
    const body = req.body;
    const userId = body.owner;
    this.AuthMiddleware.authorizeToResource(req, userId, 'create', this.resource);
    const newDocument = await this.DocumentService.create(body);
    
    return res.send(newDocument);
  }
}