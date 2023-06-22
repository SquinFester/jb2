import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Jeremi Boracki",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
