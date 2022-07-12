import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { Footer } from "components";
import useWindowSize from "hooks/useWindowSize";

function MyApp({ Component, pageProps }: AppProps) {
	const [isSSR, setIsSSR] = useState(true);
	const { innerWidth } = useWindowSize();

	useEffect(() => {
		setIsSSR(false);
	}, []);

	if (innerWidth >= 500) {
		window.location.href = "https://www.google.com";
		return null;
	} else if (isSSR) {
		return <div>loading</div>;
	}
	return (
		<div>
			<div className="bg-white">
				<Component {...pageProps} />
			</div>
			<footer className="bg-transparent shadow-t-sm absolute bottom-0 w-[100vw] h-[56px]">
				<Footer />
			</footer>
		</div>
	);
}

export default MyApp;

// <div className="flex gap-6 md:gap-20">
// 	<div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
// 		<Component {...pageProps} />
// 	</div>
// </div>
