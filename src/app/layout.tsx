import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full bg-blue-800">
          <div className="w-9/10 pt-4 pb-4 ml-4 mr-4">
            <h1 className="text-white font-bold tracking-wide">Welcome Header</h1>
          </div>
        </header>
        {children}
        <footer className="bg-blue-800 py-4 grid place-items-center fixed bottom-0 w-screen">
          <p className="text-white">&#169; cws productions</p>
        </footer>
      </body>
    </html>
  );
}
