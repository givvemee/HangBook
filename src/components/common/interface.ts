export interface IBook {
    title: string;
    description?: string;
    categoryName?: string;
    cover?: string;
    isbn?: number;
    isbn13?: number;
    author?: string;
    pubDate?: string;
    priceSales?: number;
    publisher?: string;
    bestRank?: number;
}

export type Tprops = {
    item?: IBook[];
    recommend?: IBook;
};
