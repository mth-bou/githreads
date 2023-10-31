import React from 'react';
import {getUser} from "@/src/query/user.query";
import {getPost} from "@/src/query/post.query";
import Post from "@/src/features/post/Post";
import notFound from "@/app/posts/not-found";
import {WritePostForm} from "@/app/write/WritePostForm";
import {createReply} from "@/app/posts/[postId]/reply/write-reply.action";

// /posts/:postId/reply

const PostReply = async ({params} : {
    params: {
        postId: string
    }
}) => {

    const user = await getUser();
    const post = await getPost(params.postId, user.id);

    if (!post) {
        return notFound();
    }

    return (
        <div>
            <Post post={post} />
            <WritePostForm
                user={user}
                onSubmit={async (values) => {
                    "use server";
                    return createReply(post.id, values)
                }}
            />
        </div>
    );
};

export default PostReply;
