import { useEffect, useState } from "react";

const Hola = () => {
	const [text, set_text] = useState("This is simple Text.");
	const [mynumber, set_mynumber] = useState(0);
	const [myinput, set_myinput] = useState("Enter Something....");

	useEffect = () => {
		set_text("Lorem Ipsum");
		console.log("output to console.");
	};

	return (
		<div>
			<span>
				<b> Hello World!</b>
				<p />
				{text}
				<p />
				<button
					type="buton"
					onClick={() => {
						set_text("WOW!");
					}}
				>
					Click me!
				</button>
				<p />
				{mynumber}
				<p />
				<button
					type="buton"
					onClick={() => {
						set_mynumber(mynumber + 1);
					}}
				>
					Plus(+)
				</button>
				<button
					type="buton"
					onClick={() => {
						set_mynumber(mynumber - 1);
					}}
				>
					Minus(-)
				</button>
				<p />

				<input
					type="text"
					value={myinput}
					onPointerOver={(e) => set_myinput("")}
					onChange={(e) => {
						set_myinput(e.target.value);
					}}
				/>
				<p />
				{myinput}
			</span>
		</div>
	);
};

export default Hola;
