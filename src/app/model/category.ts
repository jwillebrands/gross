export class Category {
  static readonly UNCATEGORIZED = new Category("Uncategorized");

  constructor(
    public readonly name: string,
    public readonly parent?: Category) { }

  isCategorized() {
    return this !== Category.UNCATEGORIZED;
  }
}