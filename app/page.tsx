import HomePageHero from "./components/homepage-hero";
import ContextProviders from "./context/providers";
export default function Home() {

  return (
    <main className="
    flex min-h-screen flex-col items-center bg-primary text-base-100 py-6 px-24">
      <h1 className="text-7xl mb-4 text-orange-200">The Traveler</h1>
      <div className="p-24">
        <ContextProviders>
          <HomePageHero />
        </ContextProviders>
      </div>
    </main>
  );
}
