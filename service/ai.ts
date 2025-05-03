'use server'

import { OpenAI } from "openai"

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
  baseURL: "https://openrouter.ai/api/v1",
});

export const generateAIResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await client.chat.completions.create({
      model: "mistralai/mistral-7b-instruct",
      messages: [{ role: "user", content: prompt }],
    });
    return response.choices[0]?.message?.content || prompt;
  } catch (error) {
    return prompt;
  }
}; 