import faker from 'faker';

const requestFakerData = function requestFakerData() {
  return faker.name.findName();
};

export default requestFakerData;
