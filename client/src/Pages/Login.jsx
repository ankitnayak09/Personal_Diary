import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../utils/serverUrl";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	function handleLogin(e) {
		e.preventDefault();
		fetch(url + "/login", {
			method: "post",
			headers: {
				Accept: "application.json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem("user", data.user._id);
				if (data.message) navigate("/");
			});
	}

	function handleSignup(e) {
		e.preventDefault();
		fetch(url + "/signup", {
			method: "post",
			headers: {
				Accept: "application.json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	}

	return (
		<>
			<section className="flex flex-col md:flex-row h-screen items-center">
				<div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
					<img
						src="https://source.unsplash.com/random"
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>

				<div
					className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
				>
					<div className="w-full h-100">
						<h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
							Log in to your account
						</h1>

						<form className="mt-6">
							<div>
								<label className="block text-gray-700">
									Email Address
								</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Enter Email Address"
									className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
									autoFocus
									autoComplete="true"
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div className="mt-4">
								<label className="block text-gray-700">
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Enter Password"
									minLength="6"
									className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
									required
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</div>

							<button
								// type="submit"
								onClick={handleLogin}
								className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
							>
								Log In
							</button>
						</form>

						<hr className="my-6 border-gray-300 w-full" />

						{/* <button
							type="button"
							className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
						>
							<div className="flex items-center justify-center">
								<span className="ml-4">Log in with Google</span>
							</div>
						</button> */}

						<p className="mt-8">
							Need an account?{" "}
							<button
								onClick={handleSignup}
								className="text-blue-500 hover:text-blue-700 font-semibold"
							>
								Create an account
							</button>
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Login;
