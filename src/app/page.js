import BannerSection from "./components/BannerSection/BannerSection";
import CatalogHeader from "./components/CatalogHeader/CatalogHeader";
import ItemGrid from "./components/ItemGrid/ItemGrid";

export default function Home() {
  return (
    <>
      <BannerSection />
      <CatalogHeader />
      <ItemGrid />
    </>
  );
}
