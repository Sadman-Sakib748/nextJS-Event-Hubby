"use client"

import HeroGlobe from "./Component/HeroGlobe/HeroGlobe";
import { EventCard } from "./Component/EventCard/EventCard";
import ExploreCategories from "./Component/ExploreCategories/page";



export default function Home() {
  return (
    <div>
      <HeroGlobe />
    <ExploreCategories />
     
         
            <EventCard />
    </div>
  );
}
