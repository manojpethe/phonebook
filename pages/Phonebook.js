import { useState, useReducer, useEffect } from "react";

const Phonebook = () => {
	const reducer = (state, action) => {
		let new_state;
		switch (action.type) {
			case "add_entry":
				new_state = [...state, action.payload];
				localStorage.setItem("phonebook_data", JSON.stringify(new_state));
				return new_state;
			case "load_initial":
				return JSON.parse(action.payload);
			case "del_entry":
				console.log(action.payload.index);
				new_state = [...state];
				new_state.splice(action.payload.index, 1);
				localStorage.setItem("phonebook_data", JSON.stringify(new_state));
				return new_state;
			default:
				return state;
		}
	};

	useEffect(() => {
		console.log("useEffect ran...");
		let data = localStorage.getItem("phonebook_data")
			? localStorage.getItem("phonebook_data")
			: "[]";
		dispatch({
			type: "load_initial",
			payload: data,
		});
		console.log(JSON.parse(localStorage.getItem("phonebook_data")));
	}, []);

	const [state, dispatch] = useReducer(reducer, []);
	const [name, set_name] = useState("");
	const [phone, set_phone] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("you had hit the enter button");
		//dispatch({
		//	type: "add_entry",
		//	payload: { name, phone, id: Date.now() },
		//});
		set_name("");
		set_phone("");
	};

	const handleSave = () => {
		localStorage.setItem("phonebook_data", JSON.stringify(state));
		console.log("phonebook_data saved...");
	};

	return (
		<div
			style={{
				backgroundColor: "green",
				color: "white",
				cursor: "grab",
				borderRadius: "5px",
				padding: "1px",
				margin: "1px",
				textAlign: "center",
			}}
		>
			<span>
				<p />
				<h1> Phonebook</h1>
				<p />
				<form onSubmit={handleSubmit}>
					<input
						style={{
							fontSize: "20px",
							width: "200px",
							borderColor: "gray",
							color: "green",
						}}
						type="text"
						id="name"
						key="name"
						name="name"
						placeholder="Name"
						value={name}
						onChange={(e) => {
							set_name(e.target.value);
						}}
					/>
					<p />
					<input
						style={{
							fontSize: "20px",
							width: "200px",
							borderColor: "gray",
							color: "green",
						}}
						type="text"
						id="phone"
						key="phone"
						name="phone"
						placeholder="Phone"
						value={phone}
						onChange={(e) => {
							set_phone(e.target.value);
						}}
					/>
				</form>
				<p />
				<button
					style={{
						backgroundColor: "white",
						borderRadius: "5px",
						color: "green",
						width: "120px",
						fontSize: "20px",
					}}
					type="buton"
					onClick={() => {
						dispatch({
							type: "add_entry",
							payload: { name, phone, id: Date.now() },
						});
						set_name("");
						set_phone("");
					}}
				>
					Save
				</button>

				<p />
				{state.map((item, index) => {
					return (
						<p key={item.id}>
							{" "}
							{item.name} {item.phone}{" "}
							<button
								onClick={(e) => {
									dispatch({ type: "del_entry", payload: { index } });
								}}
							>
								Del
							</button>
						</p>
					);
				})}
			</span>
		</div>
	);
};

export default Phonebook;
