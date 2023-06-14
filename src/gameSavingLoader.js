import read from './__mocks__/reader';
import json from './__mocks__/parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const string = await json(data);
      return new Promise((resolve, reject) => {
        resolve(JSON.parse(string));
        reject(new Error('Все плохо'));
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}
