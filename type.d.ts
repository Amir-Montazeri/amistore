type ICategories = string[];

type CategoriesAction = {
	type: string;
	payload: string[];
};

type DispatchCategoriesType = (
	cat: CategoriesAction
) => CategoriesAction;
