import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { url } from "../utils/serverUrl";
import { Link, useNavigate } from "react-router-dom";
import Post from "../components/Post";
import Loader from "../components/Loader";

const userId = localStorage.getItem("user");

function Home() {
	const [posts, setPosts] = useState([]);

	const navigate = useNavigate();
	useEffect(() => {
		if (userId == null) navigate("/login");
		fetchAllPosts();
	}, []);

	async function fetchAllPosts() {
		await fetch(url, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ userId }),
		})
			.then((res) => res.json())
			.then((data) => {
				setPosts(data.posts);
			});
	}
	return (
		<>
			<Header />
			<section className="max-w-screen-xl mx-auto py-10 min-h-[calc(100vh-90px)]">
				<div className="">
					{posts.map((post) => (
						<>
							<Post post={post} />
						</>
					))}
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Home;
