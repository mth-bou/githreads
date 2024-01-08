import React from 'react';
import {getAuthSession} from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {getLatestPosts} from "@/src/query/post.query";
import Post from "@/src/features/post/Post";

const Home = async () => {
    const session = await getAuthSession();

    const posts = await getLatestPosts(session?.user.id);

    // @ts-ignore
    return (
        <div className="divide-y divide-muted">
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
};

export default Home;
