import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { url } from "../utils/serverUrl";
import { Link, useNavigate } from "react-router-dom";
import Post from "../components/Post";
import { Context } from "../context/contextAPI";

const userId = localStorage.getItem("user");

function Home() {
	const [posts, setPosts] = useState([]);
	const { loading, setLoading } = useContext(Context);

	const navigate = useNavigate();
	useEffect(() => {
		if (userId == null) navigate("/login");
		fetchAllPosts();
	}, []);

	async function fetchAllPosts() {
		setLoading(true);
		await fetch(url, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ userId }),
		})
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setPosts(data.posts);
			});
	}
	return (
		<>
			<Header />
			<section className="max-w-screen-xl mx-auto py-10 min-h-[calc(100vh-120px)] px-10">
				<div className="">
					<Link
						to="/compose"
						className="border-2 border-indigo-950 py-2 px-4 rounded-full hover:bg-indigo-950 hover:text-white transition-all hover:no-underline mb-10 inline-block"
					>
						Add Journal +
					</Link>
					{posts.length > 0 ? (
						posts.map((post) => (
							<>
								<Post post={post} key={post?._id} />
							</>
						))
					) : (
						<div className="typewriter">
							<p className="line-1 anim-typewriter text-4xl font-bold text-[#22223B]/[0.5] select-none">
								Start Writing Your Journal Nowwww......
							</p>
						</div>
					)}
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Home;
