"use client";

import React, { useState } from "react";

export default function Page() {
	const [data, setData] = useState("");

	async function onSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		console.log(event.target.text);

		/*const response = await fetch("http://localhost:3000/api/submit", {
			method: "POST",
			body: formData,
		});*/

		// console.log(response);

		// Handle response if necessary
		const data = await response.json();

		console.log(data);

		setData(data);
	}

	return (
		<form onSubmit={onSubmit}>
			<input type="text" name="name" />
			<button type="submit">Submit</button>
		</form>
	);
}

/*
import { useCompletion } from "ai/react";

export default function Chat() {
	const { completion, input, handleInputChange, handleSubmit, error } =
		useCompletion();

	return (
		<div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
			<h4 className="text-xl font-bold text-gray-100 md:text-xl pb-4">
				useCompletion Example
			</h4>
			{error && (
				<div className="fixed top-0 left-0 w-full p-4 text-center bg-red-500 text-white">
					{error.message}
				</div>
			)}
			{completion}
			<form onSubmit={handleSubmit}>
				<input
					className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-gray-900"
					value={input}
					placeholder="Say something..."
					onChange={handleInputChange}
				/>
			</form>
		</div>
	);
}
*/
