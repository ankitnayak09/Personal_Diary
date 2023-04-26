import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import { url } from "../utils/serverUrl";
import { Context } from "../context/contextAPI";
import animatedDiary from "../assets/animatedDiary.gif";

const userId = localStorage.getItem("user");

function FullPost() {
	const [post, setPost] = useState({});
	const [isGuest, setIsGuest] = useState(false);
	const { id } = useParams();

	const { setLoading } = useContext(Context);

	useEffect(() => {
		if (userId == null) setIsGuest(true);
		fetchPostById();
	}, []);
	function fetchPostById() {
		setLoading(true);
		fetch(url + "/posts/" + id)
			.then((res) => res.json())
			.then((data) => {
				setPost(data);
				setLoading(false);
			});
	}
	return (
		<>
			{!isGuest && <Header />}
			<div className="min-h-[calc(100vh-112px)] max-w-screen-lg mx-auto">
				<div className="flex justify-center mt-10">
					<img src={animatedDiary} alt="Animated Diary Logo" />
				</div>
				<div className="mb-10 rounded py-5 px-4 rounded-lg mt-10">
					<h1 className="text-5xl font-bold my-5 font-mono">
						{post?.title}
					</h1>
					<p className="text-2xl">
						Date:{" "}
						<span className="font-script">{post?.writtenOn}</span>{" "}
					</p>
					<div className="w-full h-1 bg-black rounded my-5"></div>
					<p className="my-5 text-2xl leading-loose font-script tracking-wider">
						{post?.content}
					</p>
				</div>
			</div>
			{!isGuest && <Footer />}
		</>
	);
}

export default FullPost;
