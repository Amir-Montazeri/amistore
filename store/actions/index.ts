import { products } from "fakeStoreApi";
import * as actionTypes from "../types";

export const getCategories = () => async (dispatch: DispatchCategoriesType) => {
	const { data }: { data: ICategories } = await products.get("/categories");

	const action: CategoriesAction = {
		type: actionTypes.GET_CATEGORIES,
		payload: data,
	};

	dispatch(action);
};
