// import { init, generate } from "playht";
import * as PlayHT from "playht";

export async function POST() {
	PlayHT.init({
		apiKey: "8e46f7ad33ea4b169b4e0c2d6ac90256",
		userId: "lMcyhXj72XUcoQzLsC78kDlZ3M73",
		defaultVoiceId:
			"s3://voice-cloning-zero-shot/7dbc21c0-6682-4e30-b751-d8f272816134/baymax/manifest.json",
		defaultVoiceEngine: "PlayHT2.0",
	});

	// Generate audio from text
	const generated = await PlayHT.generate("Computers can speak now!");

	// Grab the generated file URL
	const { audioUrl } = generated;

	console.log("The url for the audio file is", audioUrl);

	return Response.json({
		status: 200,
		audiolink: audioUrl,
	});
}
