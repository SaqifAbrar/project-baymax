import * as PlayHT from 'playht';
import fs from 'fs';

PlayHT.init({
    apiKey: '8e46f7ad33ea4b169b4e0c2d6ac90256',
    userId: 'lMcyhXj72XUcoQzLsC78kDlZ3M73',
  defaultVoiceId: 's3://voice-cloning-zero-shot/863d0365-a52c-452f-b0ee-9b3009cb9111/dolly/manifest.json',
  defaultVoiceEngine: 'PlayHT2.0',
});


// Generate audio from text
const generated = await PlayHT.generate('Computers can speak now!');

// Grab the generated file URL
const { audioUrl } = generated;

console.log('The url for the audio file is', audioUrl);