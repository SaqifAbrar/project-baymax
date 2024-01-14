import { StreamingTextResponse, CohereStream } from "ai";
import { CohereClient } from "cohere-ai";

export async function POST(req) {
	// Extract the `prompt` from the body of the request
	const { prompt } = await req.json();
	console.log(prompt);
	/*const body = JSON.stringify({
		prompt,
		model: "command-nightly",
		max_tokens: 300,
		stop_sequences: [],
		temperature: 0.9,
		return_likelihoods: "NONE",
		stream: true,
	});

	const response = await fetch("https://api.cohere.ai/v1/generate", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
		},
		body,
	});

	// Check for errors
	if (!response.ok) {
		return new Response(await response.text(), {
			status: response.status,
		});
	}

	// Extract the text response from the Cohere stream
	const stream = CohereStream(response);*/

	const cohere = new CohereClient({
		token: "VTpQYISCpDpz7mTx4yeBiMC8HEcbGaIT5pylW52S",
	});

	const stream = await cohere.chatStream({
		model: "9f724110-3338-41fc-b175-de5860322562-ft",
		message: "Hello!",
	});

	/*let generatedText = "";
	for await (const chat of stream) {
		if (chat.eventType === "text-generation") {
			//process.stdout.write(chat.text);
			generatedText += chat.text;
		}
	}

	console.log(generatedText);*/

	// Respond with the stream
	return new StreamingTextResponse(stream);
}
