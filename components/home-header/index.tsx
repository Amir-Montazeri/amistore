import Image from "next/image";
import { useEffect, useState } from "react";
import { SiZcash } from "react-icons/si";
import { BsSearch } from "react-icons/bs";
import logo from "utils/logo/amistor.png";

const placeholderItems: string[] = [
	"Kitchen Products",
	"Kitchen tools",
];

const HomeHeader = () => {
	const [cashAmount, setCashAmount] = useState<number>(0);
	const [placeholderText, setPlaceholderText] = useState<string>(
		placeholderItems[0]
	);

	const nextPlaceholder = () => {
		const idx = placeholderItems.indexOf(placeholderText);
		if (idx < placeholderItems.length - 1) {
			setPlaceholderText(placeholderItems[idx + 1]);
		} else {
			setPlaceholderText(placeholderItems[0]);
		}
	};

	useEffect(() => {
		const intervalID = setTimeout(() => {
			nextPlaceholder();
		}, 2800);

		return () => clearTimeout(intervalID);
	}, [placeholderText]);

	return (
		<div className="py-[8px] px-[12px] h-[90px] w-[100vw]">
			<div className="flex justify-between items-center">
				<div>
					<Image src={logo} alt="logo" height="37px" width="94px" />
				</div>
				<div className="flex">
					<div className="flex items-center h-[24px] min-w-[44px] rounded-[44px] py-[4px] px-[8px] bg-[#933976] text-[#fff] cursor-pointer">
						<SiZcash className="mr-[5px]" />
						<p>{cashAmount}</p>
					</div>
				</div>
			</div>
			<div className="bg-[#f5f5f5] rounded-[50px] w-full h-[38px] flex items-center px-[15px]">
				<BsSearch className="mr-[10px]" />
				<p>
					<span className="text-[.9em] text-[#999999]">
						Search for
					</span>{" "}
					<span className="lowercase text-[.9em] text-[#000] font-semibold">
						{placeholderText}
					</span>
				</p>
			</div>
		</div>
	);
};

export default HomeHeader;
