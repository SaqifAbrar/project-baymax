import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
	token: "VTpQYISCpDpz7mTx4yeBiMC8HEcbGaIT5pylW52S",
});

export async function POST(request) {
	try {
		let reqBody = "Hello! I'm hurt...";
		console.log("test before");

		const stream = await cohere.chatStream({
			model: "0e7039a0-4dfc-4ace-b430-ad7b5580a0af-ft",
			message: "Hello... I'm hurt",
		});

		console.log("test after");

		let generatedText = "";
		for await (const chat of stream) {
			if (chat.eventType === "text-generation") {
				//process.stdout.write(chat.text);
				generatedText += chat.text;
			}
		}

		console.log(generatedText);

		return Response.json({
			status: 200,
			generatedText: generatedText,
			error: undefined,
		});
	} catch (e) {
		return Response.json({
			status: 500,
			generatedText: undefined,
			error: e,
		});
	}
}
