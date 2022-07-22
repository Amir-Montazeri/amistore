import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import {
	fetchCategories,
	fetchProducts,
	makeProductsEmpty,
} from "store/actions";

interface PropTypes {
	children: JSX.Element;
	categories: ConvertedCategories[];
	fetchCategories: () => void;
	products: ProductsType | null | boolean;
	fetchProducts: (category: string) => void;
	makeProductsEmpty: () => void;
}

const HomeRequirements: NextPage<PropTypes> = ({
	children,
	categories,
	fetchCategories,
	products,
	fetchProducts,
	makeProductsEmpty,
}) => {
	const [errMessage, setErrMessage] = useState<string | null>(null);
	const router = useRouter(),
		categoryQuery = router.query.category;

	useEffect(() => {
		if (!categories) {
			fetchCategories();
			const timerID = setTimeout(() => {
				setErrMessage("Fetching categories operation took a long time!");
			}, 3000);
			return () => clearTimeout(timerID);
		} else {
			const hasCategoryQuery = router.asPath.includes("?category="),
				categoryQueryIsString = typeof categoryQuery === "string",
				hasSelectedCorrectCategory = categories.some(
					e => e.urlForm === categoryQuery
				);

			if (
				!hasCategoryQuery ||
				(categoryQueryIsString && !hasSelectedCorrectCategory)
			) {
				router.push(`/?category=${categories[0].urlForm}`);
			}

			if (
				hasCategoryQuery &&
				categoryQueryIsString &&
				hasSelectedCorrectCategory
			) {
				products && makeProductsEmpty();
				const selectedCategory = categories.filter(
					category => category.urlForm === categoryQuery
				)[0];
				fetchProducts(selectedCategory.name);
				const timerID = setTimeout(() => {
					setErrMessage("Fetching products operation took a long time!");
				}, 3000);
				return () => clearTimeout(timerID);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categories, categoryQuery]);

	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {
				categories,
				products,
				isSearchingProducts: products === null,
			});
		}
		return child;
	});

	if (!categories || products === false) {
		return (
			<div>
				<h5>Loading {!categories ? "categories" : "products"}...</h5>
				{errMessage && (
					<p>
						{errMessage}{" "}
						<span onClick={() => location.reload()}>Reload the page?</span>
					</p>
				)}
			</div>
		);
	}
	return childrenWithProps;
};

const mapStateToProps: (state: {
	categories: ConvertedCategories;
	products: ProductsType | null | boolean;
}) => {} = state => ({
	categories: state.categories,
	products: state.products,
});

export default connect(mapStateToProps, {
	fetchCategories,
	fetchProducts,
	makeProductsEmpty,
})(HomeRequirements);
