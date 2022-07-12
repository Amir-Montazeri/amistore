import { footerItems } from "utils/static-data/footer";

type renderedItemsType = (
	items: { title: string; icon: JSX.Element }[]
) => JSX.Element[];

function Footer() {
	const renderedItems: renderedItemsType = items =>
		footerItems.map(({ title, icon }) => {
			return <div key={title}>{icon}</div>;
		});

	return <div className="">{renderedItems(footerItems)}</div>;
}

export default Footer;
