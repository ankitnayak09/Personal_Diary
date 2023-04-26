import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { url } from "../utils/serverUrl";
import { Link, useNavigate } from "react-router-dom";
import Post from "../components/Post";
import { Context } from "../context/contextAPI";

import { BiSearch } from "react-icons/bi";

const userId = localStorage.getItem("user");

function Home() {
	const [posts, setPosts] = useState([]);
	const { setLoading } = useContext(Context);
	const [searchText, setSearchText] = useState("");

	const navigate = useNavigate();
	useEffect(() => {
		if (userId == null) navigate("/");
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
			<section className="max-w-screen-xl mx-auto py-10 min-h-[calc(100vh-120px)] px-10 bg-diary">
				<div className="">
					<div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-2">
						<Link
							to="/compose"
							className="border-2 border-indigo-950 py-2 px-4 rounded-full hover:bg-indigo-950 hover:text-white transition-all hover:no-underline inline-block"
						>
							Add Journal +
						</Link>
						<div className="flex items-center">
							<input
								type="text"
								name="searchText"
								onChange={(e) => setSearchText(e.target.value)}
								className="-mr-6 py-2 px-4 pr-8 rounded"
							/>
							<BiSearch className="text-2xl transition-all" />
						</div>
					</div>
					{posts.length > 0 ? (
						posts.map((post, index) => (
							<Post post={post} key={index} />
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
