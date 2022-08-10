import { NotionClient, DatabaseId } from "../../data.js";


/**
 * 
 * @param {String} text 
 * @return {Promise} - com resultado das pesquisas
 */

export default class Page {

    static async add (text) {
      try {
        const response = await NotionClient.pages.create({
          parent: { database_id: DatabaseId },
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

}