export interface Item {
    name: string;
    src: string;
}

export interface ItemCategories {
    [category: string]: Item[];
}
  