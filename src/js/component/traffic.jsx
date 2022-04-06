import React, { useState } from "react";

const Traffic = () => {
	const [color, setColor] = useState("");
	return (
		<>
			<div className="trafficTop">
				<div className="trafficSupport"></div>
			</div>
			<div className="trafficLight">
				<div
					className={`light red ${color === "red" ? "on" : ""}`}
					onClick={() => {
						setColor("red");
					}}></div>
				<div
					className={`light yellow ${color === "yellow" ? "on" : ""}`}
					onClick={() => {
						setColor("yellow");
					}}></div>
				<div
					className={`light green ${color === "green" ? "on" : ""}`}
					onClick={() => {
						setColor("green");
					}}></div>
			</div>
		</>
	);
};
export default Traffic;
