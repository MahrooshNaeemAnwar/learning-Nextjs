import { Suspense } from 'react';

type Photo = {
  id: number;
  title: string;
  thumbnailUrl: string;
};

async function PhotoGrid() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos: Photo[] = await res.json();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {photos.slice(0, 12).map((photo) => (
        <div
          key={photo.id}
          className="bg-white rounded-lg shadow overflow-hidden"
        >
          <img
            src={photo.thumbnailUrl}
            alt={photo.title}
            className="w-full h-32 object-cover"
          />
          <div className="p-2">
            <p className="text-xs text-gray-600 truncate">{photo.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PhotosPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Photos</h1>
      <Suspense
        fallback={
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-200 h-48 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        }
      >
        <PhotoGrid />
      </Suspense>
    </div>
  );
}
