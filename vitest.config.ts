import { defineConfig } from 'vitest/config';
import dotenv from 'dotenv';

// Подтягивает переменные окружения для тестов
dotenv.config();

export default defineConfig({
  test: {
    name: 'helpers',
    root: './src',
    globals: true,
    environment: 'jsdom',
  },
});
