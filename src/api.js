import data from './data.json';

function getData() {
  // return a promise to mimic an external API call
  return Promise.resolve(data);
}

export { getData };