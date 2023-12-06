"use client";

import { CountContext } from "@/providers/context";
import React, { useContext } from "react";

const Tutorial2 = () => {
	const { count } = useContext(CountContext);

	return (
		<div>
			<h1>Tutorial 2</h1>
			<p>Count: {count}</p>
		</div>
	);
};

export default Tutorial2;
