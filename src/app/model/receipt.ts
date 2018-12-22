import { Category } from "./category";
import { List } from "immutable";

export class Receipt {

  constructor(
    public readonly store: string,
    public readonly date: Date,
    public readonly items: ReceiptItem[]) {

    }

  totalCost(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  costPerCategory(): [Category, number][] {
    return List(this.items).groupBy(item => item.category)
      .map(items => items.reduce((cost, item) => cost + item.price, 0))
      .toArray();
  }
}

export class ReceiptItem {

  constructor(
    public readonly name: string,
    public readonly price: number,
    public readonly category: Category = Category.UNCATEGORIZED
  ) {}
}