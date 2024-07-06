import { useContext } from "react";
import HomePageHero from "./components/homepage-hero";
import LatestNewsPreview from "./components/latestnews-preview";
import Navbar from "./components/navbar";
import TopStoriesPreview from "./components/topstories-preview";
import ContextProviders from "./context/providers";

export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col items-center`}>
      <h1 className="text-4xl my-4 text-orange-200">The Traveler</h1>
      <div className="w-full h-full">
        <HomePageHero />
        <Navbar />
        <div className="w-full h-full px-8 py-2">
          <TopStoriesPreview />
          <LatestNewsPreview />
        </div>
      </div>
    </div>
  );
}
