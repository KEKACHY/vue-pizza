import { CrudService } from "@/services/crud/crud.service";

export class IngredientResource extends CrudService {
  constructor() {
    super("/api/ingredients");
  }

  getIngredients() {
    return this.get();
  }
}