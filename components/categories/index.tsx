import RenderedCategories from "./RenderedCategories";

interface PropsTypes {
	categories: ConvertedCategories[];
}

const Categories = ({ categories }: PropsTypes) => {
	return (
		<ul className="px-[5px] pt-[14px] pb-[17px] mb-5 shadow-xl whitespace-nowrap overflow-auto scroll-thin">
			{categories.map(category => (
				<RenderedCategories category={category} key={category.urlForm} />
			))}
		</ul>
	);
};

export default Categories;
