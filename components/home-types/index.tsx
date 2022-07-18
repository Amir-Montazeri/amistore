import { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "store/actions";
import RenderedType from "./RenderedType";

interface PropsTypes {
	categories: ICategories | null;
	getCategories: () => void;
}

const HomeTypes = ({ categories, getCategories }: PropsTypes) => {
	useEffect(() => {
		getCategories();
	}, []);

	if (!categories) return <div>loading...</div>;
	return (
		<div>
			{categories.map(category => (
				<RenderedType category={category} key={category} />
			))}
		</div>
	);
};

const mapStateToProps: (state: { categories: ICategories }) => {
	categories: ICategories;
} = state => ({
	categories: state.categories,
});

export default connect(mapStateToProps, { getCategories })(HomeTypes);
