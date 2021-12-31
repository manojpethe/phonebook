import { useState, useReducer } from "react";

const StateMgmt = () => {
	//	const [mynumber, set_mynumber] = useState(0);

	const reducer = (state, action) => {
		switch (action.type) {
			case "plus":
				return { count: state.count + action.value };
			case "minus":
				return { count: state.count - action.value };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<div>
			<span>
				<p />
				<h1> {state.count}</h1>
				<p />
				<button
					type="buton"
					onClick={() => {
						dispatch({ type: "plus", value: 2 });
					}}
				>
					Plus(+)
				</button>
				<button
					type="buton"
					onClick={() => {
						dispatch({ type: "minus", value: 1 });
					}}
				>
					Minus(-)
				</button>
				<p />
			</span>
		</div>
	);
};

export default StateMgmt;
