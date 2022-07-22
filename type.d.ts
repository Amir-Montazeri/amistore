type ICategories = string[];

type ConvertedCategories = { urlForm: string; name: string };

type CategoriesAction = {
	type: string;
	payload: ConvertedCategories[];
};

type DispatchCategoriesType = (cat: CategoriesAction) => CategoriesAction;

type IProducts = {
	id: number;
	title: string;
	price: string;
	category: string;
	description: string;
	image: string;
};

type ProductsType = IProducts[];

type ProductsAction = {
	type: string;
	payload: IProducts[];
};

type DispatchProductsType = (product: ProductsAction) => ProductsAction;

type MakeEmptyAction = {
	type: string;
	payload: null;
};
