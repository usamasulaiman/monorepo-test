import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/server-runtime/dist/router";
import invariant from "tiny-invariant";

import type { Post } from '~/models/post.server';
import { getPost } from '~/models/post.server';

type LoaderData = { post: Post }

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.slug, `params.slug is required`);
    const post = await getPost(params.slug)
    invariant(post, `Post not found: ${params.slug}`);
    return json<LoaderData>({ post });

};

export default function PostSlug() {
    const { post } = useLoaderData() as unknown as LoaderData;
    return (
        <main className="mx-auto max-w-4xl">
            <h1 className="my-6 border-b-2 text-center text-3xl">
                Some Post: {post.title}
            </h1>
        </main>
    );
}