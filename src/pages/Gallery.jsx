import React from "react";
import Card from "../components/Card";

const Gallery = () => {
  return (
    <div className="hero center mt-[160px]">
      <h2 className="text-3xl font-bold">Gallery</h2>
      <p>This is the gallery of the content generated by the users.</p>
      <main id="main">
        {/* ======= Gallery Section ======= */}
        <div className="container grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-3 mx-auto mt-10 p-3">
          <Card
            name="aelx"
            prompt="THis was a prompt"
            photo="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg"
          />
          <Card
            name="aelx"
            prompt="THis was a prompt"
            photo="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg"
          />
          <Card
            name="aelx"
            prompt="THis was a prompt"
            photo="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg"
          />
          <Card
            name="aelx"
            prompt="THis was a prompt"
            photo="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg"
          />
        </div>
      </main>
      {/* End #main */}
    </div>
  );
};

export default Gallery;
