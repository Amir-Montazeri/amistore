import type { NextPage } from "next";

import { HomeHeader, Categories, Products } from "components";

const Home: NextPage = () => {
	return (
		<>
			<HomeHeader />
			<Categories categories={[]} />{" "}
			{/* the prop(s) will add in guard component! */}
			<Products products={[]} isSearchingProducts={false} />{" "}
			{/* the prop(s) will add in guard component! */}
		</>
	);
};

export default Home;
