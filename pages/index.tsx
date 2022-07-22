import type { NextPage } from "next";

import { HomeHeader, Categories, Products, HomeRequirements } from "components";

const Home: NextPage = () => {
	return (
		<HomeRequirements>
			<HomeHeader />
			<Categories categories={[]} />{" "}
			{/* the prop(s) will add in guard component! */}
			<Products products={[]} isSearchingProducts={false} />{" "}
			{/* the prop(s) will add in guard component! */}
		</HomeRequirements>
	);
};

export default Home;
