import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "../context/themeContext";
import { ProductsFilterProvider } from "../context/productsFilterContext";
import { CartProvider } from "../context/cartContext";
import { DropdownProvider } from "../context/dropdownContext";
import localFont from "next/font/local";
import { LogoProvider } from "@/context/logoContext";

const RussoOne_Regular = localFont({
  src: "../fonts/RussoOne-Regular.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={RussoOne_Regular.className}>
        <ThemeProvider>
          <ProductsFilterProvider>
            <CartProvider>
              <DropdownProvider>
                <LogoProvider>
                <Header />
                {children}
                <Footer />
                </LogoProvider>
              </DropdownProvider>
            </CartProvider>
          </ProductsFilterProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
