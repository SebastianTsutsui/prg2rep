import Link from "next/link";
import { db } from "~/server/db"

import { getMyImages } from "~/server/queries"

/*
const mockUrls = [
  "https://utfs.io/f/82676662-c2ed-4669-8a21-687fef3656b6-2a.jpg",
  "https://utfs.io/f/46c0ab8e-d265-442b-ba41-b03f283435d9-e8nk7j.jpg",
  "https://utfs.io/f/0a2b6099-c7c6-4ee8-9c02-b505fb175166-1ody.jpg",
  "https://utfs.io/f/4a633b9f-a1ad-41f0-b237-c34b2d72e7cd-1ody.jpg",
  "https://utfs.io/f/42ca6080-8b32-44d1-aea5-879052813515-1ody.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
*/

export default async function HomePage() {
  const images = await getMyImages().catch((error) => {
    console.error(error);
    return null;
  });
  return (  
    <main className="">
        <div className="flex felx-wrap gap-16">
          {images?.map((image, index) => (
            <div key={image.id}>
              <img src={image.url} />
              <div className="font-mono text-center">{image.name}</div>
        </div>
          ))}
        </div>
    </main>
  );
}
