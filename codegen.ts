import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://spacex-production.up.railway.app/',
  documents: ['./src/components/graphql/**/*.graphql.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}
 
export default config