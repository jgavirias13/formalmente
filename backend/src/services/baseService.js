export class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async get(id) {
    const entity = await this.repository.get(id);
    return entity;
  }

  async getAll() {
    return await this.repository.getAll();
  }

  async create(entity) {
    return await this.repository.create(entity);
  }

  async update(id, entity) {
    return await this.repository.update(id, entity);
  }

  async delete(id) {
    return await this.repository.delete(id);
  }
}
