import { createGlobalStyle } from "styled-components";
import variables, { smVariables } from "./variable";
import { declearStyleVariables } from "../utils/style.util";

const GlobalStyle = createGlobalStyle`

	:root {
		${declearStyleVariables(variables)}
	}

	html {
		@media (max-width: 768px) {
			${declearStyleVariables(smVariables, "!important")}
		}
	}


	&::-webkit-scrollbar {
		position: absolute;
		width: 3px;
		height: 3px;
	}

	&::-webkit-scrollbar-track {
		background: #eee;
		border-radius: 5px;
		box-shadow: #eee;
	}

	&::-webkit-scrollbar-thumb {
		background: #a6a7c7ac;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #a6a7c7;
	}

`

export const OverlayStyle = (menu: boolean, opacity?: number) => ({
	background: menu ? `rgba(0,0,0,${opacity ? (opacity + .1) : .7})` : `rgba(0,0,0,${opacity ? opacity : .5})`,
	width: "100%",
	minHeight: "100vh",
	zIndex: "5",
	transition: 'background .3s',
	top: "0",
	position:'fixed'
});


export default GlobalStyle;
