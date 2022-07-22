import { FETCH_PRODUCTS, MAKE_PRODUCTS_EMPTY } from "../types";

const INITIAL_STATE = false;

const products = (
	state: ProductsType | null | boolean = INITIAL_STATE,
	action: ProductsAction
) => {
	const { type, payload } = action;

	switch (type) {
		case FETCH_PRODUCTS:
			return payload;
		case MAKE_PRODUCTS_EMPTY:
			return null;
		default:
			return state;
	}
};

export default products;
