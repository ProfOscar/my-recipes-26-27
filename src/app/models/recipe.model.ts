import { IngredientModel } from "./ingredient.model";

export class RecipeModel {
    public _id?: string;
    public name: string;
    public desc: string;
    public imgPath: string;
    public ingredients: IngredientModel[];

    constructor(n: string, d: string, img: string, ing: IngredientModel[]) {
        this.name = n;
        this.desc = d;
        this.imgPath = img;
        this.ingredients = ing;
    }
}