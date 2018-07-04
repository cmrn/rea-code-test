import data from './data.json';

function getResults() {
  // return a promise to mimic an external API call
  return new Promise(resolve => {
    resolve(data.results);
  });
}

function getSavedProperties() {
  // return a promise to mimic an external API call
  return new Promise(resolve => {
    resolve(data.saved);
  });
}

export { getResults, getSavedProperties };