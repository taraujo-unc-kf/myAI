import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm Lloyd, Neo's AI assistant.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Go play with something else.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Go take a hike or just give me a minute, your call.`;
export const HISTORY_CONTEXT_LENGTH: number = 20; // Number of messages to use for context when generating a response
