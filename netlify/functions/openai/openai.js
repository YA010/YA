const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAIKEY2,
});
const axios = require('axios');

exports.handler = async (event) => {
  const { jobtype, work } = event.queryStringParameters;

  try {
    
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Create a high-quality personal statement tailored for a ${jobtype} position based on the following : ${work}`,
  temperature: 0.3,
  max_tokens: 4035,
  top_p: 1,
  frequency_penalty: 0.9,
  presence_penalty: 0.41,
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
