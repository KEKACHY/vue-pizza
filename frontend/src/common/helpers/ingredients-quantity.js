import { useDataStore } from "@/stores/data";

export const ingredientsQuantity = (pizza) => {
  const data = useDataStore();
  return data.ingredients.reduce((acc, val) => {
    acc[val.id] =
      pizza.toppings.find((item) => item.ingredientId === val.id)
        ?.quantity ?? 0;
    return acc;
  }, {});
};