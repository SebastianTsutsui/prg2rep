import Link from "next/link";
import { db } from "~/server/db"

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

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (  
    <main className="">
        <div className="flex felx-wrap gap-4">
          {posts.map((post) => (
            <div key={post.id}>{post.name}</div>))}
          {mockImages.map((image) => (
            <div key={image.id} className="w-48">
              <img className="object-none object-center bg-yellow-300 w-24 h-24 ..." src={image.url} />
        </div>
          ))}
        </div>
    </main>
  );
}
         