import Link from "next/link";
import Navbar from "../components/navbar";

export default function AviationNewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Link
        className={`w-full block text-4xl p-4 text-orange-200 text-center`}
        href='/'
      >The Traveler</Link>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center">
        {children}
      </section>
    </>
  );
}
