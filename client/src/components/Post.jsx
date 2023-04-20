import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Post({ post }) {
	return (
		<>
			<Link to={`/posts/${post._id}`}>
				<div className="min-w-[200px] grow mb-10 border-b-4 rounded hover:bg-indigo-200 cursor-pointer transition-all py-2 px-4 rounded-lg hover:-translate-y-2">
					<h1 className="text-4xl font-bold my-5 hover:no-underline">
						{post?.title}
					</h1>
					<p className="my-5">
						{post?.content?.substring(0, 100) + " ..."}
					</p>
				</div>
			</Link>
		</>
	);
}

export default Post;
