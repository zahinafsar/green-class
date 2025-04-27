// 'use server';

// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

export const generateAIResponse = async (prompt: string): Promise<string> => {
  return `<p><strong>Dear Sir,</strong></p><p></p><p>I hope you're doing well.<br>I kindly request a postponement for the AI CT exam scheduled on next Monday due to a <strong>sudden illness</strong>.<br>I apologize for any inconvenience and appreciate your understanding.</p><p>Thank you,</p>`
  // try {
  //   const completion = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: prompt }],
  //     model: "gpt-3.5-turbo",
  //   });

  //   return completion.choices[0]?.message?.content || '';
  // } catch (error) {
  //   console.error('Error generating AI response:', error);
  //   throw new Error('Failed to generate AI response');
  // }
}; 