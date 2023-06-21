import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/contextAPI";
import Loader from "./Loader";

function Header() {
	const navigate = useNavigate();
	function handleSignout() {
		sessionStorage.removeItem("user");
		navigate("/login");
	}

	const { loading } = useContext(Context);

	return (
		<>
			{loading && <Loader />}
			<nav className="bg-[#2A2F4F] text-[#F2E9E4] navbar">
				<div className="max-w-screen-xl flex flex-col md:flex-row justify-between mx-auto py-5 px-10">
					<div className="">
						<Link
							to="/home"
							className="visited:text-[#F2E9E4] focus:text-[#F2E9E4] no-underline nav-logo"
						>
							<h1 className="text-4xl font-bold  hover:text-[#C9ADA7] no-underline font-script inline-block">
								ScribeSpace
							</h1>
						</Link>
					</div>
					<ul className="flex md:gap-10 items-center justify-between">
						<li id="home" className="nav-links">
							<Link
								to="/home"
								className=" text-[#F2E9E4] hover:no-underline border-2 border-transparent hover:border-white rounded-3xl py-2 px-4  hover:text-[#C9ADA7]"
							>
								HOME
							</Link>
						</li>
						<li id="about" className="nav-links">
							<Link
								to="/about"
								className=" text-[#F2E9E4] hover:no-underline border-2 border-transparent hover:border-white rounded-3xl py-2 px-4  hover:text-[#C9ADA7]"
							>
								ABOUT
							</Link>
						</li>
						<li id="signout" className="nav-links">
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
