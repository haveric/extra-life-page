import React from "react";
import Header from "./header";
import About from "./about";
import Donate from "./donate";
import Schedule from "./schedule";

export default function App () {
  return (
  	<div className="row top-margin">
		<div className="col-xs-1"></div>
		<div className="col-xs-10 bg-white border-shadow">
			<Header />
			<About />
			<Donate />
			<Schedule />
		</div>
		<div className="col-xs-1"></div>
	</div>
  );
}