import HomePageHero from "./components/homepage-hero";
import ContextProviders from "./context/providers";
export default function Home() {

  return (
    <main className="
    flex min-h-screen flex-col items-center bg-primary text-base-100 py-6 px-24">
      <h1 className="text-7xl mb-4 text-orange-200">The Traveller</h1>
      <div className="p-24">
        <ContextProviders>
          <HomePageHero />
          <h1 className="text-4xl">Do your best.</h1>
        </ContextProviders>
      </div>
    </main>
  );
}
