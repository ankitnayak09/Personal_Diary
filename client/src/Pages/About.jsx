import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import AnkitNayak from "../assets/AnkitNayak.jpeg";

import { BsFillHandIndexFill, BsFillCloudCheckFill } from "react-icons/bs";
import { RiLinksLine } from "react-icons/ri";
import { GrSecure } from "react-icons/gr";

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
						<p className="text-lg leading-10">
							Welcome to{" "}
							<span className="font-script font-bold">
								ScribeSpace
							</span>
							, a platform where you can create and store your
							personal journals online. Our mission is to provide
							a safe and convenient place for you to document your
							thoughts and experiences, with the flexibility to
							access them anytime, anywhere.
						</p>
					</div>
					<div className="w-full md:w-1/3 md:order-2 flex justify-center items-center"></div>
				</div>
				<section>
					<h2 className="text-2xl my-5 font-bold text-center">
						Features
					</h2>
					<div>
						<ul className="flex justify-center flex-wrap gap-5 items-start">
							<li className="flex flex-col items-center max-w-[300px] bg-[#ffffff80] p-4 rounded hover:-translate-y-3 transition-all">
								<BsFillHandIndexFill className="rounded-full text-5xl p-2" />
								<h3 className="text-lg font-bold my-2">
									Easy to use Interface
								</h3>
								<p className="text-justify">
									<span className="font-script">
										ScribeSpace
									</span>{" "}
									has a simple and intuitive interface that
									makes it easy for users to navigate the
									platform and start writing their journals
									with minimal hassle.
								</p>
							</li>
							<li className="flex flex-col items-center max-w-[250px] bg-[#ffffff80] p-4 rounded hover:-translate-y-3 transition-all">
								<BsFillCloudCheckFill className="rounded-full text-5xl p-2" />
								<h3 className="text-lg font-bold my-2">
									Cloud Storage
								</h3>
								<p className="text-justify">
									<span className="font-script">
										ScribeSpace
									</span>{" "}
									is a cloud-based platform, which means that
									your journal entries are automatically saved
									and synced to the cloud. This allows you to
									access your journals from any device with an
									internet connection.
								</p>
							</li>
							<li className="flex flex-col items-center max-w-[300px] bg-[#ffffff80] p-4 rounded hover:-translate-y-3 transition-all">
								<RiLinksLine className="rounded-full text-5xl p-2" />
								<h3 className="text-lg font-bold my-2">
									Shareable Links
								</h3>
								<p className="text-justify">
									<span className="font-script">
										ScribeSpace
									</span>{" "}
									allows users to generate shareable links for
									each journal entry, which can be shared with
									friends, family, or anyone else you choose.
								</p>
							</li>
							<li className="flex flex-col items-center max-w-[300px] bg-[#ffffff80] p-4 rounded hover:-translate-y-3 transition-all">
								<GrSecure className="rounded-full text-5xl p-2" />
								<h3 className="text-lg font-bold my-2">
									Password Protection
								</h3>
								<p className="text-justify">
									<span className="font-script">
										ScribeSpace
									</span>{" "}
									accounts are protected by a password, which
									ensures that only you can access your
									writing.
								</p>
							</li>
						</ul>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}

export default About;
