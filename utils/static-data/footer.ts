import { FiHome } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export const footerItems: { title: string; icon: JSX.Element }[] = [
	{
		title: "home",
		icon: <FiHome />,
	},
	{
		title: "category",
		icon: <BiCategoryAlt />,
	},
	{
		title: "cart",
		icon: <TiShoppingCart />,
	},
	{
		title: "wishlist",
		icon: <AiOutlineHeart />,
	},
	{
		title: "profile",
		icon: <CgProfile />,
	},
];
