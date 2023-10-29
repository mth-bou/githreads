import React, {PropsWithChildren} from 'react';
import { PostHome } from "@/src/query/post.query";
import { clsx } from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { formatDate } from "@/lib/date";
import {MoreHorizontal} from "lucide-react";

type PostLayoutProps = PropsWithChildren<{
    user: PostHome["user"],
    createdAt?: Date,
    className?: string,
    postId?: string
}>;
export const PostLayout = ({
    className,
    user,
    createdAt,
    postId,
    children
}: PostLayoutProps) => {

    return (
        <div className={clsx("flex w-full flex-row items-start p-4", className)}>
            <Avatar>
                {user.image ? <AvatarImage src={user.image} alt={user.username} /> : null}
                <AvatarFallback>{user.username.slice(2, 0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="ml-4 flex w-full flex-col gap-2">
                <Link href={`/users/${user.id}`}>
                    <div className="flex flex-row items-center gap-2">
                        <p className="text-sm text-card-foreground mr-auto">{user.username}</p>
                        {createdAt ? (
                            <p className="text-sm text-muted-foreground">
                                {formatDate(createdAt)}
                            </p>
                        ) : null }
                        <MoreHorizontal size={20} />
                    </div>
                </Link>
                {children}
            </div>
        </div>
    );
};
