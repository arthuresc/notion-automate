import { Search, DatabaseId, Page } from "./modules.js";


// Search(DatabaseId.string())
//   .then((r) => {
//   console.log(r.results, '👽')
//   // console.log(r.results[0].properties['Tags'].multi_select, "TAGS 🉐")
// })


Search('Yurts')
  .then((r) => {
    console.log(r.results[1], 'É a page 💠')
    // console.log(r.results[1].properties['Tags'], 'É a page 📃')
})

// Page.getProp('2905897a664e4586b3263070572b1b3f', 'fddZ')
//   .then((r) => {
//   console.log(r, 'tags da pagina tal 🤩')
// })