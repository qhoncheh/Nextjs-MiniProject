import type { Metadata } from "next";
import {Vazirmatn} from 'next/font/google'
import "./globals.css";


export const metadata: Metadata = {
  title: "Nest.js",
  description: "Next.js Crash Course",
};

const vazirFont = Vazirmatn({
  // src: "../public/font/Vazirmatn-Regular.woff2",

})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-slate-200   ${vazirFont.className}`}>
          <main className="p-5">
            {children}
          </main>
      </body>
    </html>
  );
}
