import React from 'react';
import {getAuthSession} from "@/lib/auth";
import {getUserProfile} from "@/src/query/user.query";
import Profile from "@/app/users/[userId]/Profile";
import {notFound, redirect} from "next/navigation";
import {prisma} from "@/lib/prisma";
import {Button} from "@/components/ui/button";
import {followUser} from "@/app/users/[userId]/follow.action";
import Post from "@/src/features/post/Post";
import {Metadata} from "next";

type PageParams = {
    params: {
        userId: string;
    }
}
export const generateMetadata = async ({params}: PageParams): Promise<Metadata> => {
    const user = await getUserProfile(params.userId);

    if (!user) throw new Error('User not found');

    return({
        title: `${user.name} (${user.username})`
    })
}

const UserPage = async ({ params }: PageParams) => {
    const session = await getAuthSession();
    const user = await getUserProfile(params.userId)

    if (!user) {
        return notFound();
    }

    const isFollower = session?.user.id ? await prisma.follow.findFirst({
        where: {
            followerId: user.id,
            followingId: user.id
        },
        select: {
            id: true
        }
    }) : null;

    const isCurrentUser = params.userId === session?.user.id

    if (isCurrentUser) redirect('/profile');

    return (
        <div>
            <Profile user={user}>
                <form className="mt-4">
                    <Button
                        variant="outline"
                        formAction={async () => {
                            "use server";
                            if (!session?.user.id) return;
                            await followUser(params.userId);
                        }}>
                        {isFollower ? "Unfollow" : "Follow"}
                    </Button>
                </form>
            </Profile>
            <div className="divide-y divide-accent border-t border-accent mt-4">
                {user.posts.map(post => (
                    <Post post={post} key={post.id} />
                ))}
            </div>
        </div>
    );
};

export default UserPage;
