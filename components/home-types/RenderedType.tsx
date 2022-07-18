interface PropTypes {
	category: ICategories;
}

const RenderedType = ({ category }: PropTypes) => {
	return <div>{category}</div>;
};

export default RenderedType;
