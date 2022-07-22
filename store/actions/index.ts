import { products } from "fakeStoreApi";
import { convertStringToUrlUseable } from "functions/converter";
import * as actionTypes from "../types";

export const fetchCategories =
	() => async (dispatch: DispatchCategoriesType) => {
		const { data }: { data: ICategories } = await products.get("/categories");
		const encodeData: ConvertedCategories[] = data.map(item => ({
			urlForm: convertStringToUrlUseable(item),
			name: item,
		}));

		const action: CategoriesAction = {
			type: actionTypes.FETCH_CATEGORIES,
			payload: encodeData,
		};

		dispatch(action);
	};

export const fetchProducts =
	(category: string) => async (dispatch: DispatchProductsType) => {
		console.log("fetching products: ", category);

		const query: string = category === "every" ? "" : `/category/${category}`;
		const { data }: { data: ProductsType } = await products.get(query);

		const action: ProductsAction = {
			type: actionTypes.FETCH_PRODUCTS,
			payload: data,
		};

		dispatch(action);
	};

export const makeProductsEmpty = () => {
	const action: MakeEmptyAction = {
		type: actionTypes.MAKE_PRODUCTS_EMPTY,
		payload: null,
	};

	return action;
};
