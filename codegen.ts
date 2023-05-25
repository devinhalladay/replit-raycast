import { headers } from './src/graphql/index';
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/graphql/schema.graphql',
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/graphql/__generated__/': {
      preset: 'client-preset',
      plugins: [],
    },
  },
};

export default config;
