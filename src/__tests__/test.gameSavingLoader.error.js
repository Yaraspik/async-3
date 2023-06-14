import GameSavingLoader from '../gameSavingLoader';
import read from '../__mocks__/reader';

jest.mock('../__mocks__/reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('get exeption', async () => {
  expect.assertions(1);
  await read.mockReturnValue(123);
  await expect(GameSavingLoader.load()).rejects.toThrow(Error);
});
