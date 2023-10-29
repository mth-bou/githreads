import React from 'react';
import {getAuthSession} from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const Home = async () => {
    const session = await getAuthSession();

    const posts = await prisma.post.findMany({
        where: {
            parentId: null
        },
        select: {
            id: true,
            content: true,
            createdAt: true,
            user : {
                select: {
                    image: true,
                    username: true,
                    id: true
                }
            },
            likes: {
                select: {
                    userId: true
                },
                where: {
                    userId: session?.user.id ?? "error"
                }
            },
            _count: {
                select: {
                    likes: true,
                    replies: true
                }
            }
        }
    })

    // @ts-ignore
    return (
        <div>
            {posts.map(post => (
                <p key={post.id}>
                    {post.content}
                </p>
                )
            )}
        </div>
    );
};

export default Home;
