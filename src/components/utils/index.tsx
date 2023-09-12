export const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const bestSellersApi = `/ttb/api/ItemList.aspx?ttbkey=${apiKey}&QueryType=Bestseller&MaxResults=50&start=1&SearchTarget=Book&output=js&Version=20131101&Cover=Big`;
