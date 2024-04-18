import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.EXPO_PUBLIC_API_GQL_URL ?? 'http://localhost:8080/graphql',
  documents: ['**/*.tsx', '!node_modules/**/*.tsx'],
  generates: {
    './generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;
