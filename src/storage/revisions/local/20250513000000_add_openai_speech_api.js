const message = 'Add OpenAI speech API';

const revision = '20250513000000_add_openai_speech_api';

async function upgrade() {
  const changes = {
    openaiSpeechApiKey: ''
  };

  changes.storageVersion = revision;
  return browser.storage.local.set(changes);
}

export {message, revision, upgrade};
