import React from "react";
import VerticalMenuBar from "../../components/VerticalMenuBar/VerticalMenuBar";
import Banner from "../../components/Banner/Banner";
import MyCreationsFeed from "../../components/MyCreationsFeed/MyCreationsFeed";

function MyOwnCreations() {
  return (
    <div>
      <main className="flex max-w-7xl mx-auto mt-3">
        <div className="hidden sm:block h-auto mb-3">
          <VerticalMenuBar />
        </div>
        <div className="flex flex-col w-full">
          <Banner />
          <MyCreationsFeed />
        </div>
      </main>
    </div>
  );
}

export default MyOwnCreations;