import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import gsap from "gsap";
function Post({ post }) {
	useEffect(() => {
		const timeline = gsap.timeline();
		timeline.fromTo(
			".post-item",
			{ opacity: 0, stagger: 0.5 },
			{ opacity: 1, stagger: 0.5 }
		);
	}, []);
	return (
		<>
			<Link
				to={`/posts/${post._id}`}
				className="hover:no-underline post-item"
			>
				<div className="min-w-[200px] text-[#22223B] grow mb-10 border rounded border-[#4A4E69] hover:bg-[#4A4E69] hover:text-white cursor-pointer transition-all py-2 px-4 rounded-lg hover:-translate-y-2 hover:no-underline bg-[#ffffff80] hover:bg-[#2A2F4F] hover:text-[#F2E9E4]">
					<div className="flex flex-col md:flex-row md:items-center justify-between">
						<h1 className="text-4xl font-bold mt-5 hover:no-underline font-mono">
							{post?.title}
						</h1>
						<div className="text-lg">{post?.writtenOn}</div>
					</div>
					<p className="my-5 hover:no-underline font-serif">
						{post?.content?.substring(0, 100) + " ..."}
					</p>
				</div>
			</Link>
		</>
	);
}

export default Post;
