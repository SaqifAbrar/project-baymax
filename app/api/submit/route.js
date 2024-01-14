import { CohereClient } from "cohere-ai";

export async function POST() {
	const cohere = new CohereClient({
		token: "VTpQYISCpDpz7mTx4yeBiMC8HEcbGaIT5pylW52S",
	});

	const stream = await cohere.chatStream({
		model: "9f724110-3338-41fc-b175-de5860322562-ft",
		message: "Hello!",
	});

	let generatedText = "";
	for await (const chat of stream) {
		if (chat.eventType === "text-generation") {
			//process.stdout.write(chat.text);
			generatedText += chat.text;
		}
	}

	//console.log(generatedText);

	return Response.json({
		status: 200,
		generatedText: generatedText,
		audioUrl: "yourURL",
	});
}
