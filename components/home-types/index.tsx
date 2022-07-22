import { useRouter } from "next/router";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "store/actions";
import RenderedCategories from "./RenderedCategories";

interface PropsTypes {
	categories: ICategories;
	getCategories: () => void;
}

const HomeTypes = ({ categories, getCategories }: PropsTypes) => {
	const router = useRouter();

	useEffect(() => {
		getCategories();
	}, []);

	useEffect(() => {
		if (categories) {
			!router.asPath.includes("?category=") &&
				router.push(`/?category=${categories[0]}`);
		}
	}, [categories]);

	if (!categories) return <div>loading...</div>;
	return (
		<ul className="px-[5px] pt-[14px] pb-[17px] mb-5 shadow-xl whitespace-nowrap overflow-auto scroll-thin">
			{categories.map(category => (
				<RenderedCategories category={category} key={category} />
			))}
		</ul>
	);
};

const mapStateToProps: (state: { categories: ICategories }) => {
	categories: ICategories;
} = state => ({
	categories: state.categories,
});

export default connect(mapStateToProps, { getCategories })(HomeTypes);
