import Link from "next/link";
import { useRouter } from "next/router";

interface PropTypes {
	category: string;
}

const RenderedCategories = ({ category }: PropTypes) => {
	const router = useRouter();

	const regex = /[^a-zA-Z\d\s:]/g,
		categoryOnlyText = category.replaceAll(regex, "").replaceAll(" ", ""),
		isActivePage =
			router.asPath.replaceAll("/?category=", "") === categoryOnlyText;

	return (
		<Link href={`/?category=${categoryOnlyText}`}>
			<li
				className={`mx-[10px] pb-[4px] text-[#999999] border-b-[3px] border-solid ${
					isActivePage && "border-[#933976] text-[#000]"
				} inline whitespace-nowrap select-none cursor-pointer`}>
				{category}
			</li>
		</Link>
	);
};

export default RenderedCategories;
