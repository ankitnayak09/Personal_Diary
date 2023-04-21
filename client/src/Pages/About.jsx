import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import AnkitNayak from "../assets/AnkitNayak.jpeg";
function About() {
	const navigate = useNavigate();
	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user == null) navigate("/login");
	}, []);
	return (
		<>
			<Header />
			<div className="max-w-screen-lg mx-auto py-10 min-h-[calc(100vh-120px)] px-10">
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-2/3 order-2 md:order-1">
						<h1 className="text-2xl my-5 font-bold">About Me 😀</h1>
						<p className="text-lg leading-10">
							{" "}
							My name is Ankit Nayak, and I'm a third-year
							undergraduate student with a passion for full stack
							web development using the MERN stack technology.
							<br />I discovered my love for web development when
							I started building websites for college events and
							student organizations. Since then, I've been
							constantly learning and exploring new libraries and
							frameworks to improve my skills and stay up-to-date
							with the latest technologies. <br />I enjoy building
							projects that challenge me and push my boundaries. I
							believe that every project is an opportunity to
							learn and grow as a developer, and I'm always
							excited to take on new challenges.
							<br /> In my free time, I love to read about new web
							development trends and technologies, and experiment
							with new libraries to implement in my projects. I
							also enjoy collaborating with other developers and
							contributing to open source projects. <br />
						</p>
					</div>
					<div className="w-full md:w-1/3 md:order-2 flex justify-center items-center">
						<img
							src={AnkitNayak}
							className="rounded-full w-full aspect-square object-cover"
							alt=""
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default About;
