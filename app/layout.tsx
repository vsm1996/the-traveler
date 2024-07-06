import type { Metadata } from "next";
import { Suspense } from "react";
import { italiana } from "@/app/font";
import ContextProviders from "./context/providers";

import "./globals.css";
import Footer from "./components/footer.tsx";

export const metadata: Metadata = {
  title: "The Traveler",
  description: "The Traveler - Newspaper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="ucla-blue">
      <body className={italiana.className}>
        <ContextProviders>
          <main className="bg-primary text-base-100">
            <Suspense fallback={((
              <div className='flex justify-center w-full h-full'>
                <span className="loading loading-ring loading-lg"></span>
              </div>))}>
              {children}
            </Suspense>
            <Footer />
          </main>
        </ContextProviders>
      </body>
    </html>
  );
}
