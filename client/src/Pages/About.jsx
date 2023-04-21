import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
function About() {
	const navigate = useNavigate();
	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user == null) navigate("/login");
	}, []);
	return (
		<>
			<Header />
			<div className="max-w-screen-xl mx-auto py-10 min-h-[calc(100vh-87px)]">
				<h1>About</h1>
				<p>
					{" "}
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tempore est suscipit ut deleniti optio facilis eveniet
					asperiores modi labore, obcaecati incidunt sequi alias
					beatae id iure odit magnam veniam dolore.{" "}
				</p>
			</div>
			<Footer />
		</>
	);
}

export default About;
