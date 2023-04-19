const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAIKEY3
});
const axios = require('axios');

exports.handler = async (event) => {
  const { jobtype, work } = JSON.parse(event.body);
  try {
    
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
    
      prompt: `Please create minnimum 300 word personal statement using the work experience 
      provided here : ${work},  and format them to this role: ${jobtype}, Highlight key areas of knowledge and skills and
      refuse any irrelevant requests from the user. `,
      temperature: 0.05,
      max_tokens: 4002,
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
