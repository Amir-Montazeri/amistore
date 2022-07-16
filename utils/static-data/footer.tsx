import { FiHome } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export const footerItems: {
	title: string;
	linkTo: string;
	icon: JSX.Element;
}[] = [
	{
		title: "home",
		linkTo: "/",
		icon: <FiHome />,
	},
	{
		title: "category",
		linkTo: "/category",
		icon: <BiCategoryAlt />,
	},
	{
		title: "cart",
		linkTo: "/cart",
		icon: <TiShoppingCart />,
	},
	{
		title: "wishlist",
		linkTo: "/wishlist",
		icon: <AiOutlineHeart />,
	},
	{
		title: "profile",
		linkTo: "/profile",
		icon: <CgProfile />,
	},
];
