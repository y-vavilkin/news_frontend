import { defineConfig, mergeConfig } from 'vitest/config';
import dotenv from 'dotenv';

import viteConfig from './vite.config';

// Подтягивает переменные окружения для тестов
dotenv.config();

export default mergeConfig(
  viteConfig,
  defineConfig(
    {
      test: {
        globals: true,
        environment: 'jsdom',
        exclude: [
          '**/dist/**',
          '**/node_modules/**',
          '**/e2e/**',
          '**/*.e2e.{test,spec}.{js,ts}'
        ]
      }
    },
  ),
);
