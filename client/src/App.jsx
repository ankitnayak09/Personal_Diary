import { useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compose from "./Pages/Compose";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import FullPost from "./Pages/FullPost";
import Loader from "./components/Loader";
import { AppContext } from "./context/contextAPI";

function App() {
	return (
		<>
			<AppContext>
				<BrowserRouter>
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/compose" element={<Compose />} />
						{/* <Route path="/contact" element={<Contact />} /> */}
						<Route path="/about" element={<About />} />
						<Route path="/posts/:id" element={<FullPost />} />
					</Routes>
				</BrowserRouter>
			</AppContext>
		</>
	);
}

export default App;
