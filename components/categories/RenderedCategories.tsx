import Link from "next/link";
import { useRouter } from "next/router";

interface PropTypes {
	category: ConvertedCategories;
}

const RenderedCategories = ({ category }: PropTypes) => {
	const router = useRouter();

	const isActivePage =
		router.asPath.replaceAll("/?category=", "") === category.urlForm;

	return (
		<Link href={`/?category=${category.urlForm}`}>
			<li
				className={`mx-[10px] pb-[4px] text-[#999999] border-b-[3px] border-solid ${
					isActivePage && "border-[#933976] text-[#000]"
				} inline whitespace-nowrap select-none cursor-pointer`}>
				{category.name}
			</li>
		</Link>
	);
};

export default RenderedCategories;
