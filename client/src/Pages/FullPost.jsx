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
			<div className="min-h-[calc(100vh-90px)]">
				<div className="mb-10 border-b-4 rounded hover:bg-indigo-200 cursor-pointer transition-all py-2 px-4 rounded-lg hover:-translate-y-2">
					<h1 className="text-4xl font-bold my-5 hover:no-underline">
						{post?.title}
					</h1>
					<p className="my-5">{post?.content}</p>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default FullPost;
