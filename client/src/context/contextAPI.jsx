import React, { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
	const [loading, setLoading] = useState(false);
	const [searchResults, setSearchResults] = useState([]);

	return (
		<Context.Provider
			value={{
				loading,
				setLoading,
				searchResults,
				setSearchResults,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
