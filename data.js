import "dotenv/config";
import { Client } from "@notionhq/client";

export const NotionClient = new Client({ auth: process.env.NOTION_KEY })

export class JournalDatabaseId {

  static get (){
    return process.env.NOTION_DATABASE_JOURNAL_ID
  }

  static string(database_id = false) {
    const stringDatabase = database_id ? database_id : process.env.NOTION_DATABASE_JOURNAL_ID;
    const result = stringDatabase.replace(/\-/g, '');
    return result
  }
}

export class ModelsDatabaseId {

  static get (){
    return process.env.NOTION_DATABASE_CONFIGURATION_ID
  }

  static string(database_id = false) {
    const stringDatabase = database_id ? database_id : process.env.NOTION_DATABASE_CONFIGURATION_ID;
    const result = stringDatabase.replace(/\-/g, '');
    return result
  }
}