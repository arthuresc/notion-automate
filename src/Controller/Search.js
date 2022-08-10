import { NotionClient } from "../../data.js";
/**
 * 
 * @param {String} value 
 * @return {Promise} - com resultado das pesquisas
 */
export default async function Search(value) {
  try {	
	  const response = await NotionClient.search({
	    query: `${value}`,
	    sort: {
	      direction: 'ascending',
	      timestamp: 'last_edited_time',
	    }
    })
    // console.log(response, '😁')
    return response;
  } catch (error) {
    return error;
}
}
