module.exports = {
  // Les tests de base continuent avec JSDOM
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/tests-puppeteer/'], // Ignore le dossier Puppeteer ici

  // Si tu veux avoir des fichiers séparés pour Puppeteer :
  projects: [
    {
      displayName: 'jsdom-tests',
      testEnvironment: 'jest-environment-jsdom',
      testMatch: ['**/*.test.js'],  // Garde tes tests basiques ici
    },
    {
      displayName: 'puppeteer-tests',
      preset: 'jest-puppeteer',
      testMatch: ['**/map.puppeteer.test.js'],  // Les tests complexes iront ici
    },
  ],
};
