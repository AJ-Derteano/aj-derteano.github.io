import { parse } from 'yaml';
import fs from 'vite-plugin-fs/browser'

export class YmlManager {

   static async ymlToJson (filePath: string) {
    const file = await fs.readFile(filePath)
    return parse(file);
  }
}