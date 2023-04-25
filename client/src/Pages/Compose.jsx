import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { url } from "../utils/serverUrl";
import { useNavigate } from "react-router";
import moment from "moment";

function Compose() {
	const [postTitle, setPostTitle] = useState("");
	const [postBody, setPostBody] = useState("");

	const navigator = useNavigate();

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user == null) navigate("/login");
	}, []);

	function handleComposePost(e) {
		e.preventDefault();
		const userId = localStorage.getItem("user");
		const date = moment(Date.now()).format("MMM Do YY");
		fetch(url + "/compose", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ postTitle, postBody, userId, date }),
		})
			.then((res) => res.json())
			.then(() => {
				navigator("/home");
			});
	}

	return (
		<>
			<Header />
			<section className="max-w-screen-md mx-auto py-10 min-h-[calc(100vh-120px)] px-10">
				<h1 className="text-4xl font-bold mb-5 font-mono">Journal</h1>
				<form className="" onSubmit={handleComposePost}>
					<div className="flex flex-col gap-5">
						<div>
							<label className="text-xl">Title</label>
							<input
								className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 py-3"
								type="text"
								name="postTitle"
								onChange={(e) => setPostTitle(e.target.value)}
								placeholder="Visit to Amritsar . . . . . "
							/>
						</div>
						<div>
							<label className="text-xl">Content</label>
							<textarea
								className="border mt-1 rounded px-4 w-full bg-gray-50 py-3"
								name="postBody"
								rows="5"
								cols="30"
								onChange={(e) => setPostBody(e.target.value)}
								placeholder="I arrived in Amritsar in the afternoon after a long flight. The city was . . ."
							></textarea>
						</div>
					</div>
					<button
						className="border-2 font-bold border-indigo-950 py-2 px-4 rounded-full hover:bg-indigo-950 hover:text-white transition-all block w-full text-lg mt-5"
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
