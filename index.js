import "dotenv/config";
import { Client } from "@notionhq/client";
import Search from "./src/Actions/Search.js";



const notion = new Client({ auth: process.env.NOTION_KEY })


const databaseId = process.env.NOTION_DATABASE_ID


console.log(Search('4ec31595485f4e7eadaac19453d973e5'))
Search('4ec31595485f4e7eadaac19453d973e5');

// search('4ec31595485f4e7eadaac19453d973e5');
// Search.search('275d8be2-4ca4-4ac7-a870-a1f55cb44689');

// async function addItem(text) {
//   try {
//     const response = await notion.pages.create({
//       parent: { database_id: databaseId },
//       properties: {
//         title: { 
//           title:[
//             {
//               "text": {
//                 "content": text
//               }
//             }
//           ]
//         }
//       },
//     })
//     console.log(response)
//     console.log("Success! Entry added.")
//   } catch (error) {
//     console.error(error.body)
//   }
// }

// addItem("Testando, meu pau no seu pano")