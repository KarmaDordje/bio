const { getCliClient } = require('sanity/cli')
const fs = require('fs')

async function upload() {
  const client = getCliClient()
  const imageAsset = await client.assets.upload('image', fs.createReadStream('/Users/aleksandrkarkac/PlantNursery/public/images/plants/cis_posredni_hicksii.png'))
  console.log('Image uploaded:', imageAsset._id)
}

upload().catch(err => {
  console.error(err)
  process.exit(1)
})
