import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
	token: `${process.env.COHERE_API_KEY}`,
});

export async function POST(request) {
	try {
		const req = await request.json();

		const stream = await cohere.chatStream({
			model: "0e7039a0-4dfc-4ace-b430-ad7b5580a0af-ft",
			message: req.body.content,
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
