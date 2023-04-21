import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Post({ post }) {
	return (
		<>
			<Link to={`/posts/${post._id}`} className="hover:no-underline">
				<div className="min-w-[200px] text-[#22223B] grow mb-10 border rounded border-[#4A4E69] hover:bg-[#4A4E69] hover:text-white cursor-pointer transition-all py-2 px-4 rounded-lg hover:-translate-y-2 hover:no-underline">
					<h1 className="text-4xl font-bold my-5 hover:no-underline font-mono">
						{post?.title}
					</h1>
					<p className="my-5 hover:no-underline font-serif">
						{post?.content?.substring(0, 100) + " ..."}
					</p>
				</div>
			</Link>
		</>
	);
}

export default Post;
