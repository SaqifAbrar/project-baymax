"use client";
import { Baymax } from "../app/components/baymax";
import React, { useState } from "react";
import { CohereClient } from "cohere-ai";

export default function Page() {
	const [prompt, setPrompt] = useState("");
	const [generation, setGeneration] = useState("");
	const [audio, setAudio] = useState("");

	async function onSubmit(event) {
		event.preventDefault();

		const response = await fetch("http://localhost:3000/api/submit", {
			method: "POST",
			body: prompt,
		});

		// console.log(response);

		// Handle response if necessary
		const data = await response.json();

		console.log(data);

		/*try {
			const audioUrl = await fetch("http://localhost:8080", {
				method: "POST",
				body: prompt,
			});
			console.log(audioUrl);
		} catch (e) {
			console.log(e);
		}*/
		/*try {
			const cohere = new CohereClient({
				token: "VTpQYISCpDpz7mTx4yeBiMC8HEcbGaIT5pylW52S",
			});

			const stream = await cohere.chatStream({
				model: "0e7039a0-4dfc-4ace-b430-ad7b5580a0af-ft",
				message: "Hello",
			});

			//console.log(stream);

			let generatedText = "";
			for await (const chat of stream) {
				if (chat.eventType === "text-generation") {
					process.stdout.write(chat.text);
					generatedText += chat.text;
				}
			}

			console.log(generatedText);

			setGeneration(data);
		} catch (e) {
			console.log(e);
		}*/
	}

	function onChange(event) {
		setPrompt(event.target.value);
	}

	return (
		<div className="flex flex-row">
			<div className="w-1/2">
				<Baymax />
			</div>
			<form onSubmit={onSubmit} className="w-1/2">
				<input type="text" name="name" />
				<button type="submit">Submit</button>
			</form>
		</div>
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
