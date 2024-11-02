// utils/splitStringUsingRegex.ts

/**
 * Splits a string based on a regular expression pattern.
 * 
 * @param inputString - The string to split
 * @param regexPattern - The regular expression pattern to use for splitting
 * @returns An array of substrings split by the regex pattern
 */
export function splitStringUsingRegex(inputString: string, regexPattern: RegExp): string[] {
    if (typeof inputString !== 'string') {
      throw new Error('Input must be a string');
    }
    if (!(regexPattern instanceof RegExp)) {
      throw new Error('Pattern must be a valid regular expression');
    }
    
    return inputString.split(regexPattern);
  }
  
  // Example usage in a React component
  // import { splitStringUsingRegex } from './utils/splitStringUsingRegex';
  
  const str = "Hello, how are you doing? I'm fine!";
  const pattern = /[ ,?!]+/; // Matches spaces, commas, question marks, and exclamation points
  const result = splitStringUsingRegex(str, pattern);
  
  console.log(result); // ["Hello", "how", "are", "you", "doing", "I'm", "fine", ""]
  