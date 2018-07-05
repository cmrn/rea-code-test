import propertyStore from './propertyStore';

import * as api from './api';

const mockApiData = {
  results: [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ],
  saved: [
    { id: '4' },
    { id: '1' },
  ]
};

api.getData = jest.fn().mockImplementation(() => Promise.resolve(mockApiData));

describe('load', () => {
  it('fills the properties object', async () => {
    await propertyStore.load();
    expect(Object.keys(propertyStore.properties).length).not.toEqual(0);
  });
  
  it('includes all properties from the results array', async () => {
    await propertyStore.load();
    mockApiData.results.forEach(p => expect(propertyStore.properties[p.id]).toEqual(p));
  });

  it('includes all properties from the saved array', async () => {
    await propertyStore.load();
    mockApiData.saved.forEach(p => expect(propertyStore.properties[p.id]).toEqual(p));
  });

  it('fills the results array with each property ID in the API results', async () => {
    await propertyStore.load();
    mockApiData.results.forEach(p => expect(propertyStore.results).toContain(p.id));
    expect(propertyStore.results.length).toEqual(mockApiData.results.length);
  });

  it('fills the saved array with each saved property ID', async () => {
    await propertyStore.load();
    mockApiData.saved.forEach(p => expect(propertyStore.saved).toContain(p.id));
    expect(propertyStore.saved.length).toEqual(mockApiData.saved.length);
  });
});

describe('save', () => {
  it('adds the ID to the saved list', () => {
    propertyStore.saved = ['1', '2'];
    propertyStore.save('3');
    expect(propertyStore.saved[2]).toEqual('3');
  });
  
  it('does not add the ID if it is already saved', () => {
    propertyStore.saved = ['1', '2'];
    propertyStore.save('1');
    expect(propertyStore.saved.length).toEqual(2);
  })
});