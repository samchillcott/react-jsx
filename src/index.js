// impor react and react dom libs

import React from "react";
import ReactDOM from "react-dom";

// create react componenet

const App = () => {
    const buttonText = "Click Me"
	return (
		<div>
			<label className="label" htmlFor="name">
				Enter name:
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
		</div>
	);
};

// take react componeont and show on screen

ReactDOM.render(<App />, document.querySelector("#root"));
