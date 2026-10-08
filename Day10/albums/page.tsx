import { Suspense } from 'react';

type Album = {
  id: number;
  title: string;
};

async function AlbumGrid() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  const albums: Album[] = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {albums.slice(0, 12).map((album) => (
        <div
          key={album.id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded mb-3 flex items-center justify-center text-white text-4xl">
            📷
          </div>
          <h3 className="font-bold text-sm">{album.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default function AlbumsPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Albums</h1>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-200 h-48 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        }
      >
        <AlbumGrid />
      </Suspense>
    </div>
  );
}
