import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/contextAPI";
import Loader from "./Loader";

function Header() {
	const navigate = useNavigate();
	function handleSignout() {
		localStorage.removeItem("user");
		navigate("/login");
	}

	const { loading } = useContext(Context);

	return (
		<>
			{loading && <Loader />}
			<nav className="bg-[#4A4E69] text-[#F2E9E4]">
				<div className="max-w-screen-xl flex justify-between mx-auto py-5">
					<div className="">
						<Link
							to="/"
							className="visited:text-[#F2E9E4] focus:text-[#F2E9E4] no-underline"
						>
							<h1 className="text-4xl font-bold  hover:text-[#C9ADA7] no-underline">
								PERSONAL DIARY
							</h1>
						</Link>
					</div>
					<ul className="flex gap-10 items-center">
						<li id="home">
							<Link
								to="/"
								className=" text-[#F2E9E4] hover:no-underline border-2 border-transparent hover:border-white rounded-3xl py-2 px-4  hover:text-[#C9ADA7]"
							>
								HOME
							</Link>
						</li>
						<li id="about">
							<Link
								to="/about"
								className=" text-[#F2E9E4] hover:no-underline border-2 border-transparent hover:border-white rounded-3xl py-2 px-4  hover:text-[#C9ADA7]"
							>
								ABOUT US
							</Link>
						</li>
						<li id="signout">
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
		</>
	);
}

export default Header;
