module.exports = {
 
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/tests-puppeteer/'], 

 
  projects: [
    {
      displayName: 'jsdom-tests',
      testEnvironment: 'jest-environment-jsdom',
      testMatch: ['**/*.test.js'],  
    },
    {
      displayName: 'puppeteer-tests',
      preset: 'jest-puppeteer',
      testMatch: ['**/map.puppeteer.test.js'],  
    },
  ],
};
