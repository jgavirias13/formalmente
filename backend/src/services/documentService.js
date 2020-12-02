import {BaseService} from './baseService.js';

export class DocumentService extends BaseService{
  constructor({DocumentRepository}){
    super(DocumentRepository);
    this.DocumentRepository = DocumentRepository;
  }

  async getDocumentByUser(userId){
    return await this.DocumentRepository.getDocumentsByUserId(userId);
  }
}