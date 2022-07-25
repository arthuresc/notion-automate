export default async function search(value) {
  const notion = new Client({ auth: process.env.NOTION_KEY })
  const databaseId = process.env.NOTION_DATABASE_ID
  const response = await notion.search({
    query: `${value}`,
    sort: {
      direction: 'ascending',
      timestamp: 'last_edited_time',
    }
  })
  console.log(response)
}
