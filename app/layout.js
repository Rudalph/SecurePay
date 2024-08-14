import { Jura } from "next/font/google";
import "./globals.css";

const inter = Jura({ subsets: ["latin"] });

export const metadata = {
  title: "SecurePay",
  description: "Securing Global Payments with Blockchain Transparency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
