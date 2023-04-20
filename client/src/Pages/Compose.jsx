import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { url } from "../utils/serverUrl";
import { useNavigate } from "react-router";

function Compose() {
	const [postTitle, setPostTitle] = useState("");
	const [postBody, setPostBody] = useState("");

	const navigator = useNavigate();

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user == "undefined") navigate("/login");
	}, []);

	function handleComposePost(e) {
		e.preventDefault();
		const userId = localStorage.getItem("user");
		fetch(url + "/compose", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ postTitle, postBody, userId }),
		})
			.then((res) => res.json())
			.then(() => {
				navigator("/");
			});
	}

	return (
		<>
			<Header />
			<section className="max-w-screen-xl mx-auto py-10 min-h-[calc(100vh-90px)]">
				<h1 className="text-4xl font-bold mb-5">Compose</h1>
				<form className="" onSubmit={handleComposePost}>
					<div className="form-group">
						<label>Title</label>
						<input
							className="form-control"
							type="text"
							name="postTitle"
							onChange={(e) => setPostTitle(e.target.value)}
						/>
						<label>Content</label>
						<textarea
							className="form-control"
							name="postBody"
							rows="5"
							cols="30"
							onChange={(e) => setPostBody(e.target.value)}
						></textarea>
					</div>
					<button
						className="border-2 border-indigo-950 py-2 px-4 rounded-full hover:bg-indigo-950 hover:text-white transition-all"
						type="submit"
						name="button"
					>
						Publish
					</button>
				</form>
			</section>
			<Footer />
		</>
	);
}

export default Compose;
