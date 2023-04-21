import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compose from "./Pages/Compose";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import FullPost from "./Pages/FullPost";
import Loader from "./components/Loader";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/compose" element={<Compose />} />
					{/* <Route path="/contact" element={<Contact />} /> */}
					<Route path="/about" element={<About />} />
					<Route path="/posts/:id" element={<FullPost />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
