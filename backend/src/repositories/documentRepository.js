import {BaseRepository} from './baseRepository.js';

export class DocumentRepository extends BaseRepository{
  constructor({Document}){
    super(Document);
    this.Document = Document;
  }

  async getDocumentsByUserId(userId){
    return await this.Document.find({owner: userId});
  }
}