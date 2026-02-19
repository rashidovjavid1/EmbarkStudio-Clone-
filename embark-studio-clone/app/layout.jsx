import Header from "@/app/components/Header";
import "./globals.scss";
import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
