interface PropTypes {
	category: string;
}

const RenderedType = ({ category }: PropTypes) => {
	return <div>{category}</div>;
};

export default RenderedType;
