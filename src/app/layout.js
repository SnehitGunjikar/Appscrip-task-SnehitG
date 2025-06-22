import "../styles/globals.css";
import Footer from "./components/FooterSection/FooterSection";
import Navbar from "./components/NavigationBar/NavigationBar";
import SubMenu from "./components/CategoryMenu/CategoryMenu";
import { ItemProvider } from "./context/ItemContext";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "StyleHub Marketplace | Fashion, Jewelry & Electronics",
  description:
    "Explore premium fashion, exquisite jewelry, and cutting-edge electronics at StyleHub Marketplace. Handpicked selections from designers and leading brands worldwide.",
  keywords: [
    "online marketplace",
    "designer fashion",
    "premium jewelry",
    "tech gadgets",
    "menswear",
    "women's apparel",
    "innovative electronics",
    "stylehub marketplace",
    "luxury fashion",
    "contemporary accessories",
  ].join(", "),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ItemProvider>
          <Navbar />
          <SubMenu current="Home" active="Shop" />
          {children}
          <Footer />
        </ItemProvider>
      </body>
    </html>
  );
}
