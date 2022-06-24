import React, {useState} from "react";

const Home = () => {

	const [color, setColor] = useState(null);
	const [purple, setPurple] = useState(false);
	let text = '';

	if (purple == false) text = "Add Light";
	else text = "Remove Light"

	function handleChange(){
		const colors = ["red", "yellow", "green"];
		let colorIndex = 0;

	let interval = setInterval(() => {
		if (colorIndex <= 2) {
			setColor(colors[colorIndex]);
			colorIndex ++;
		}
		else {
			setColor("red");
			colorIndex = 0;
		}
		console.log(colors[colorIndex])
	},1000);

		
	}

	return (
		<div className="main-container">
			<div className="top"></div>
			<div className="container">
				<div>
					<button onClick={() => setColor("red")} type="button" className={color === "red" ? "glow bg-danger" : "btn btn-danger"}></button>
				</div>
				<div>
					<button onClick={() => setColor("yellow")} type="button" className={color === "yellow" ? "glow bg-warning" : "btn btn-warning"}></button>
				</div>
				<div>
					<button onClick={() => setColor("green")} type="button" className={color === "green" ? "glow bg-success" : "btn btn-success"}></button>
				</div>
				<div>
					<button onClick={() => setColor("purple")} id="purple" type="button"  className={purple === true ? "btn btn-info d-block" : "btn btn-info d-none"}></button>
				</div>
			</div>
			<div className="bonus">
				<button onClick={() => purple === false ? setPurple(true) : setPurple(false)} data-target="#purple" type="button" className="btn btn-dark">{text}</button>
				<button onClick={() => handleChange()} type="button" className="btn btn-secondary">On/Off</button>
			</div>
		</div>
	);
};

export default Home;
