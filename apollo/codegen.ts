import { CodegenConfig } from '@graphql-codegen/cli';
import { resolveApiUrl } from '../utils/UrlUtils';

const config: CodegenConfig = {
  schema: `${resolveApiUrl()}/graphql`,
  documents: ['**/*.tsx', '!node_modules/**/*.tsx'],
  generates: {
    './generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
