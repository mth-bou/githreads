import React from 'react';
import {PostHome} from "@/src/query/post.query";
import { PostLayout } from "@/src/features/post/PostLayout";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import {Heart, MessageCircle} from "lucide-react";
import LikeButton from "@/src/features/post/LikeButton";

type PostProps = {
    post: PostHome
}

const Post = ({ post }: PostProps) => {
    return (
        <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt}>
            <Link href={`/posts/${post.id}`} className="text-sm text-foreground">
                {post.content.split("\n").map((content, index) => (
                    <p key={index}>{content}</p>
                ))}
            </Link>
            <div className="flex gap-2 items-center">
                <LikeButton postId={post.id} isLiked={post.likes.length > 0} />
                <Link href={`/posts/${post.id}/reply`} className={buttonVariants({variant: "ghost", size: "icon"})}>
                    <MessageCircle size={20} />
                </Link>
            </div>
            <div>
                <Link className="text-muted-foreground text-sm" href={`/posts/${post.id}`}>
                    {post._count.likes} likes
                </Link>
                {" . "}
                <Link className="text-muted-foreground text-sm" href={`/posts/${post.id}`}>
                    {post._count.replies} comments
                </Link>
            </div>
        </PostLayout>
    );
};

export default Post;
