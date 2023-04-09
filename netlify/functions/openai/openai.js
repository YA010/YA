const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAPIKEY4,
});
const axios = require('axios');

exports.handler = async (event) => {
  const { jobtype, work } = JSON.parse(event.body);
  try {
    
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `write me a  high-quality personal statement summarizing a persons work experience (and if included in the users input their education summarized) based on this experience :${work}, (this is not for job applications but to showcase a users  experience). `,
      temperature: 0.05,
      max_tokens: 3002,
      top_p: 1,
      frequency_penalty: 0.55,
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
