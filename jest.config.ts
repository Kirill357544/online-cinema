import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  clearMocks: true,
  verbose: true,
  testEnvironment: 'jsdom',
  rootDir: './',
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>jest-setup.ts'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@widgets/(.*)': '<rootDir>/src/widgets/$1',
    '@features/(.*)': '<rootDir>/src/features/$1',
    '@entities/(.*)': '<rootDir>/src/entities/$1',
    '@shared/(.*)': '<rootDir>/src/shared/$1',
  },
};

export default config;
