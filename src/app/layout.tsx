import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import {ThemeContextProvider} from "@/context/themeContext";
import {ProductsFilterConextProvider} from "@/context/productsFilterContext";
import {CartContextProvider} from "@/context/cartContext";
import {DropdownContextProvider} from "@/context/dropdownContext";
import {FormContextProvider} from "@/context/formContext";
import localFont from "next/font/local";
import {LogoContextProvider} from "@/context/logoContext";

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
        <ThemeContextProvider>
            <ProductsFilterConextProvider>
                <CartContextProvider>
                    <DropdownContextProvider>
                        <LogoContextProvider>
                            <FormContextProvider>
                                <Header/>
                                {children}
                                <Footer/>
                            </FormContextProvider>
                        </LogoContextProvider>
                    </DropdownContextProvider>
                </CartContextProvider>
            </ProductsFilterConextProvider>
        </ThemeContextProvider>
        </body>
        </html>
    );
}
