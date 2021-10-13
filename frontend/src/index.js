import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import {
	positions,
	transitions,
	Provider as AltertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
	timeout: 5000,
	position: positions.BOTTOM_CENTER,
	transition: transitions.SCALE,
};

ReactDom.render(
	<Provider store={store}>
		<AltertProvider template={AlertTemplate} {...options}>
			<App />
		</AltertProvider>
	</Provider>,
	document.getElementById("root")
);
