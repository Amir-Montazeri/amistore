import { HomeHeader, HomeTypes } from "components";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div>
			<HomeHeader />
			<HomeTypes />
		</div>
	);
};

export default Home;
