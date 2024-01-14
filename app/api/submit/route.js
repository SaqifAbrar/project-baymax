import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
	token: "VTpQYISCpDpz7mTx4yeBiMC8HEcbGaIT5pylW52S",
});

export async function POST(request) {
	try {
		console.log(request.text());
		const stream = await cohere.chatStream({
			model: "0e7039a0-4dfc-4ace-b430-ad7b5580a0af-ft",
			message: "I have a problem Baymax!",
		});

		console.log("test");

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
