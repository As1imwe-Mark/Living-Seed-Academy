import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '4g6nda3q',
    dataset: 'production',
    useCDN: true,
    imageAsset: {
      source: '@sanity/asset-source-imagetool'
    }
  }
})
