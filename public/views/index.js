import React from "react";
import ReactDOM from "react-dom";
import Title from "./title";
import Main from "./main";

ReactDOM.render(
	<Title />, document.querySelector("title")
);

ReactDOM.render(
	<Main />, document.querySelector("#main")
);