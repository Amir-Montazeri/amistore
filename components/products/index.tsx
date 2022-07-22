import { NextPage } from "next";

interface PropTypes {
	products: ProductsType;
	isSearchingProducts: boolean;
}

const Products: NextPage<PropTypes> = ({ products, isSearchingProducts }) => {
	return isSearchingProducts ? (
		<div>Searching...</div>
	) : (
		<div>Products for {products[0].category}</div>
	);
};

export default Products;
