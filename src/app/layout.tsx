import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ThemeProvider from "../context/themeContext";
import localFont from 'next/font/local'


const RussoOne_Regular = localFont({
  src: '../fonts/RussoOne-Regular.ttf',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={RussoOne_Regular.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
