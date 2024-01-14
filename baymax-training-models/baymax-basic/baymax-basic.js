import { CohereClient } from "cohere-ai";
import { StreamingTextResponse, CohereStream } from "ai";

const cohere = new CohereClient({
	token: "VTpQYISCpDpz7mTx4yeBiMC8HEcbGaIT5pylW52S",
});

(async () => {
	const stream = await cohere.chatStream({
		model: "9f724110-3338-41fc-b175-de5860322562-ft",
		message: "Hello!",
	});

	//console.log(stream);
	//console.log(StreamingTextResponse); //

	let generatedText = "";
	for await (const chat of stream) {
		if (chat.eventType === "text-generation") {
			//process.stdout.write(chat.text);
			generatedText += chat.text;
		}
	}

	console.log(generatedText);
})();
