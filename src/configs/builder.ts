import { Builder } from '@builder.io/react';

if (!process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  throw new Error('Missing NEXT_PUBLIC_BUILDER_API_KEY environment variable');
}

// Get Builder API key from environment variable
export const BUILDER_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

// Initialize the Builder SDK with your public API key
Builder.init(BUILDER_PUBLIC_API_KEY);

export const isEditing = () => Boolean(Builder.isEditing);

// Optional: Set custom components and their inputs
export const registerComponents = () => {
  // Example component registration:
  // Builder.registerComponent(YourComponent, {
  //   name: 'Custom Component',
  //   inputs: [
  //     { name: 'title', type: 'string' },
  //     { name: 'description', type: 'text' }
  //   ],
  // });
}; 