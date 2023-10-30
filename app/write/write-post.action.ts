'use server';

import {WritePostFormValues} from "./WritePostForm";
import {getUser} from "@/src/query/user.query";
import {prisma} from "@/lib/prisma";

export const createPost = async (values: WritePostFormValues)=> {
    // Create Post
    console.log("I'm on the server");

    const user = await getUser();

    const post = await prisma.post.create({
        data: {
            content: values.content,
            userId: user.id
        }
    })

    return post.id;
}
