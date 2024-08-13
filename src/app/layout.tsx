import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "CoolChat",
  description: "instant chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="w-full h-12 bg-slate-800 flex items-center justify-center">
          <h1 className="text-3xl font-semibold text-white">CoolChat</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
