const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(config);
// setup Server
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/chat', async (req, res) => {
  const { prompt } = req.body;
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    max_tokens: 3000,
    messages: [{ role: 'user', content: prompt }],
  });

  res.send(completion.data.choices[0].message.content);
});

const port = 443;
app.listen(port, () => {
  console.log(`Sever listening on port ${port}`);
});
