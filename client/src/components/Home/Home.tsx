import LogoCategories from "./LogoCategories";
import AllProducts from "../AllProducts";
import HomeCards from "./HomeCards";

function Home() {
  return (
    <>
      <LogoCategories />
      <AllProducts heading="🔥 Produtos em alta 🔥" />
      <HomeCards />
    </>
  );
}

export default Home;
