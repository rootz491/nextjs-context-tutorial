"use client";

import { CountContext } from "@/providers/context";
import React, { useContext } from "react";

const Tutorial = () => {
	const { count, setCount } = useContext(CountContext);

	return (
		<div>
			<h1>Tutorial 1</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default Tutorial;
