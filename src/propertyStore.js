import { store } from 'react-easy-state';
import { getData } from './api';

const propertyStore = store({
  properties: {},
  results: [],
  saved: [],

  async load() {
    const data = await getData();
    // Loads all properties from both results and saved into properties map, indexed by ID
    propertyStore.properties = data.results.concat(data.saved).reduce((acc, property) => {
      acc[property.id] = property;
      return acc;
    }, {});

    propertyStore.results = data.results.map(p => p.id);
    propertyStore.saved = data.saved.map(p => p.id);
  },

  save(id) {
    if(propertyStore.saved.includes(id)) return;
    propertyStore.saved.push(id);
  }
});

export default propertyStore;