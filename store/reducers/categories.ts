import { GET_CATEGORIES } from "../types";

const INITIAL_STATE = null;

const categories = (
	state: ICategories | null = INITIAL_STATE,
	action: CategoriesAction
) => {
	const { type, payload } = action;

	switch (type) {
		case GET_CATEGORIES:
			return ["every", ...payload];
		default:
			return state;
	}
};

export default categories;
