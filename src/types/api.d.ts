interface IResponse {
    itemsPerPage: number;
    link: string;
    logo: string;
    pubDate: string;
    query: string;
    searchCategoryId: number;
    searchCategoryName: string;
    startIndex: number;
    title: string;
    totalResults: number;
    version: string;
    item: {
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
    };
}
