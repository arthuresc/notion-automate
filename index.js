import {Search, ModelsDatabaseId} from "./modules.js";

Search(ModelsDatabaseId.string())
.then((r) => {
  console.log(r, '👽')
  // console.log(r.results[0].properties['Tags'].multi_select, "TAGS 🉐")
})
console.log(ModelsDatabaseId.string(), ' 😂')

  // JournalDatabaseId,
  // ModelsDatabaseId,

// Search('Yurts')
//   .then((r) => {
//     console.log(r.results[1], 'É a page 💠')
//     // console.log(r.results[1].properties['Tags'], 'É a page 📃')
// })

// Page.getProp('2905897a664e4586b3263070572b1b3f', 'fddZ')
//   .then((r) => {
//   console.log(r, 'tags da pagina tal 🤩')
// })