import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Nest.js",
  description: "Next.js Crash Course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
