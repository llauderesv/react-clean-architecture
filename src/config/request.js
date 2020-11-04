import axios from 'axios';

const SIXTY_SECONDS = 60 * 1000;

/**
 * Create an instance for API requests
 */
export const request = axios.create({
  baseURL: '',
  timeout: SIXTY_SECONDS,
});
