import React from 'react';
import {getUserProfile} from "@/src/query/user.query";
import {getAuthSession} from "@/lib/auth";
import {followUser} from "@/app/users/[userId]/follow.action";
import Post from "@/src/features/post/Post";
import Profile from "@/app/users/[userId]/Profile";
import {notFound} from "next/navigation";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

const  ProfilePage = async () => {
    const session = await getAuthSession();

    if (!session?.user.id) notFound();

    const user = await getUserProfile(session.user.id);

    if (!user) notFound();

    return (
        <div>
            <Profile user={user}>
                <form className="mt-4">
                    <Link
                        className={buttonVariants({
                            variant: "outline"
                        })}
                        href="/profile/edit">
                        Edit profile
                    </Link>
                </form>
            </Profile>
            <div className="divide-y divide-accent border-t border-accent mt-4">
                {user.posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default ProfilePage;
