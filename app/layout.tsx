import type { Metadata } from "next";
import { Fraunces, Italiana, Tangerine } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const fraunces = Fraunces({ subsets: ["latin"] });
const italiana = Italiana({ weight: '400', subsets: ["latin"] });
const tangerine = Tangerine({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Traveller",
  description: "The Traveller - Newspaper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="ucla-blue">
      <body className={italiana.className}>
        <main>
          <Suspense fallback={<p>Looooader</p>}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
