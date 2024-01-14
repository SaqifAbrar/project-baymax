const express = require("express");
const PlayHT = require("playht");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.json());

const baymax_voice = async (text) => {
	try {
		//if (text === undefined) throw new Error();

		PlayHT.init({
			apiKey: "8e46f7ad33ea4b169b4e0c2d6ac90256",
			userId: "lMcyhXj72XUcoQzLsC78kDlZ3M73",
			defaultVoiceId:
				"s3://voice-cloning-zero-shot/7dbc21c0-6682-4e30-b751-d8f272816134/baymax/manifest.json",
			defaultVoiceEngine: "PlayHT2.0",
		});

		// Generate audio from text
		const generated = await PlayHT.generate("Hello! My name is Baymax");

		// Grab the generated file URL
		const { audioUrl } = generated;

		return { status: 200, audiolink: audioUrl, error: undefined };
	} catch (e) {
		console.log(e);
		return { status: 500, audiolink: undefined, error: e };
	}
};

app.post("/", async (req, res) => {
	const text = req.body.text;
	audioUrl = await baymax_voice(text);
	res.send(audioUrl);
});

app.listen(port, () => {
	console.log(`Baymax Voice Replica app listening on port ${port}`);
});
