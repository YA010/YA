const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const axios = require('axios');

exports.handler = async (event) => {
  const { jobtype, work } = event.queryStringParameters;

  try {
    
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `You are a ai that helps people with jobs including making cv's and  finetuning their experience, Create a high-quality personal statement tailored for a ${jobtype} position based on the following work experience: ${work}. point out how the work experience makese them suited for the role this needs to be a proper cv , make sure to format and end the reponse `,
      max_tokens: 3500,
      temperature: 0,
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
