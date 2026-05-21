module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    '^.+\\.(ts|mjs|js)$': [
      'ts-jest',
      {
        tsconfig: {
          module: 'commonjs',
        },
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};
