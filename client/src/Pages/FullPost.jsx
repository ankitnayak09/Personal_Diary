import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import { url } from "../utils/serverUrl";

function FullPost() {
	const [post, setPost] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetchPostById();
	}, []);
	function fetchPostById() {
		fetch(url + "/posts/" + id)
			.then((res) => res.json())
			.then((data) => setPost(data));
	}
	return (
		<>
			<Header />
			<div className="min-h-[calc(100vh-112px)] max-w-screen-lg mx-auto">
				<div className="mb-10 rounded py-5 px-4 rounded-lg mt-10">
					<p className="text-2xl">Date: {post?.writtenOn} </p>
					<h1 className="text-5xl font-bold my-5 font-mono">
						{post?.title}
					</h1>
					<p className="my-5 font-sans text-2xl leading-relaxed">
						{post?.content}
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default FullPost;
