import { surpriseMePrompts } from "../constants";
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length); //generating a random index
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (randomPrompt == prompt) {
    return getRandomPrompt(prompt); //if the prompt matches then return the random prompt
  }
  return randomPrompt;
}
