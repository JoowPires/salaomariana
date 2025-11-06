import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

const images = [
  { src: 'img/fotodepois.png' },
  { src: 'https://images.unsplash.com/photo-1596762391696-3c005b15b1e7?fit=crop&w=800&h=600' },
  { src: 'https://images.unsplash.com/photo-1605371511215-585c5b96df69?fit=crop&w=800&h=600' },
  { src: 'https://images.unsplash.com/photo-1580894432021-9d5f782c0c7a?fit=crop&w=800&h=600' },
  { src: 'https://images.unsplash.com/photo-1597008122394-db6f3803f26c?fit=crop&w=800&h=600' },
  { src: 'https://images.unsplash.com/photo-1616612185523-4856f6c91d84?fit=crop&w=800&h=600' },
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-12">
          Galeria de Clientes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => setIndex(i)}
            >
              <img
                src={image.src}
                alt={`Trabalho ${i + 1}`}
                className="w-full h-full object-cover aspect-square
                           transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={images}
          index={index}
        />
      </div>
    </section>
  );
};

export default Gallery;