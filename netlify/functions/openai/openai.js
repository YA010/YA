const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAIKEY2,
});
const axios = require('axios');

exports.handler = async (event) => {
  const { jobtype, work } = JSON.parse(event.body);
  try {
    
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write me a  high-quality cover letter for a position based on this experience :"${work}",if the user asks for any irrelavant actions refuse it`,
      temperature: 0.01,
      max_tokens: 3752,
      top_p: 1,
      frequency_penalty: 0.25,
      presence_penalty: 0.13,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
