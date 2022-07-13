const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const RAPID_API_HOST = import.meta.env.VITE_RAPID_API_HOST;

export const apiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': RAPID_API_HOST,
  },
};
