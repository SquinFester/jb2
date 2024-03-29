import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Geologica } from "next/font/google";
import Container from "@/components/Container";

export const metadata = {
  title: "Jeremi Boracki",
  description: "Miejsce dla miłośników dwóch kółek.",
};

const geologica = Geologica({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`bg-primary text-white ${geologica.className}`}>
        <Navbar />
        <section className="content-height">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
