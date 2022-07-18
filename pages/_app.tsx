import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";

import { Footer } from "components";
import useWindowSize from "hooks/useWindowSize";
import store from "store";

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
		<Provider store={store}>
			<div className="bg-white">
				<Component {...pageProps} />
			</div>
			<footer className="bg-transparent shadow-t-sm absolute bottom-0 w-[100vw] h-[56px]">
				<Footer />
			</footer>
		</Provider>
	);
}

export default MyApp;
