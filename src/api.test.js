import data from './data.json';
import { getData } from './api';

jest.mock('./data.json', ()=>( { mock: 'obj' } ));

describe('getData', () => {
  it('returns a promise which resolves with data.json', async () => {
    const data = await getData();
    expect(data).toEqual({ mock: 'obj' });
  });
});