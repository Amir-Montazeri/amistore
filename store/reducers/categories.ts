import { FETCH_CATEGORIES } from "../types";

const INITIAL_STATE = null;

const categories = (
	state: ConvertedCategories[] | null = INITIAL_STATE,
	action: CategoriesAction
) => {
	const { type, payload } = action;

	switch (type) {
		case FETCH_CATEGORIES:
			return [{ name: "every", urlForm: "every" }, ...payload];
		default:
			return state;
	}
};

export default categories;
