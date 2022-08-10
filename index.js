import { Search, DatabaseId } from "./modules.js";


// Search(DatabaseId.string())
//   .then((r) => {
//   console.log(r.results[0].properties)
//   console.log(r.results[0].properties['Tags'].multi_select, "TAGS 🉐")
// })


Search('Yurts')
  .then((r) => {
    console.log(r.results[1], 'É a page 💠📃 ______------__---__-')
  console.log(r.results[1].properties['Tags'], 'É a page 📃')
})