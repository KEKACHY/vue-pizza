import ApiService from "@/services/http/axios.service";

export default class CrudService extends ApiService {
  constructor(resource) {
    super();
    this.resource = resource;
  }

  getAll() {
    return this.get(this.resource);
  }

  getById(id) {
    return this.get(`${this.resource}/${id}`);
  }

  create(payload) {
    return this.post(this.resource, payload);
  }

  update(id, payload) {
    return this.put(`${this.resource}/${id}`, payload);
  }

  remove(id) {
    return this.delete(`${this.resource}/${id}`);
  }
}
