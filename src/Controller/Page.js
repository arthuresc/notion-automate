import { NotionClient, ModelsDatabaseId } from "../../data.js";


/**
 * 
 * @param {String} text 
 * @return {Promise} - com resultado das pesquisas
 */

export default class Page {

  static async add(text) {
    try {
      const response = await NotionClient.pages.create({
        parent: { database_id: ModelsDatabaseId },
        properties: {
          title: {
            title: [
              {
                "text": {
                  "content": text
                }
              }
            ]
          }
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  };

  static async getProp(pageId, propId) {
    try {
      const response = await NotionClient.pages.properties.retrieve({ page_id: pageId, property_id: propId });
      console.log(response, '🦎')
      return response
    }
    catch (error) {
      return error
    }
  }

}