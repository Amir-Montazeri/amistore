import { useState, useEffect } from "react";

const getWindowSize: () => { innerWidth: number; innerHeight: number } = () => {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
};

export default function useWindowSize() {
	const [size, setSize] = useState({ innerWidth: 0, innerHeight: 0 });
	const [debouncedSize, setDebouncedSize] = useState(size);

	useEffect(() => {
		const handleWindowResize = () => {
			setSize(getWindowSize);
		};

		setSize(getWindowSize());

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	useEffect(() => {
		const timerID = setTimeout(() => {
			setDebouncedSize(size);
		}, 10);

		return () => clearTimeout(timerID);
	}, [size]);

	return debouncedSize;
}
