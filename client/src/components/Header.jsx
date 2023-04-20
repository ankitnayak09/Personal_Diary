import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();
	function handleSignout() {
		localStorage.setItem("user", "undefined");
		navigate("/login");
	}
	return (
		<nav className="bg-indigo-300">
			<div className="max-w-screen-xl flex justify-between mx-auto py-5">
				<div className="">
					<Link to="/">
						<h1 className="text-4xl font-bold">PERSONAL DIARY</h1>
					</Link>
				</div>
				<ul className="flex gap-10 items-center">
					<li id="home">
						<Link
							to="/"
							className="hover:no-underline border-2 border-transparent hover:border-white rounded-3xl py-2 px-4"
						>
							HOME
						</Link>
					</li>
					<li id="about">
						<Link
							to="/about"
							className="hover:no-underline border-2 border-transparent hover:border-white rounded-3xl py-2 px-4"
						>
							ABOUT US
						</Link>
					</li>
					<li id="contact">
						<Link
							to="/compose"
							className="bg-gray-600 text-white hover:text-white hover:no-underline border-2 border-transparent hover:border-white rounded-3xl py-2 px-4"
						>
							Compose
						</Link>
					</li>
					<li id="contact">
						<button
							className="bg-gray-600 hover:bg-gray-900 hover:scale-105 text-white px-4 py-2 rounded-full"
							onClick={handleSignout}
						>
							Sign Out
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
