import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

type Image = {
    userId: string;
    name: string;
    url: string;
    id: number;
    createdAt: Date;
    updatedAt: Date | null;
}
export async function getMyImages(): Promise<Image[] | null> {
    const user = await auth();
    
    if (!user.userId) {
        throw new Error("Unauthorized");
    };
    
    const images = await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc}) => desc(model.id),
    });
    return images;
}
