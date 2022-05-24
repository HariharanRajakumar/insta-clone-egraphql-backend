import { faker } from '@faker-js/faker';
import fs from 'fs';

const followers = [...Array(200)].map((_, index, arr) => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.word.noun(),
    profilePic: faker.internet.avatar(),
    bio: faker.lorem.lines(),
    id: 'faker.address',
  };
});

const users = [...Array(100)].map((_, index, arr) => {
  return {
    firstName: faker.name.firstName(),
    // lastName: faker.name.lastName(),
    // email: faker.internet.email(),
    // password: faker.word.noun(),
    profilePic: faker.internet.avatar(),
    // bio: faker.lorem.lines(),
    followers: [...Array(10)].map(
      () => followers[Math.floor(Math.random() * index)]
    ),
    following: [...Array(10)].map(
      () => followers[Math.floor(Math.random() * index)]
    ),
    id: 'faker.address',
  };
});

const story = [...Array(100)].map((_, index, arr) => {
  return {
    username: faker.name.firstName(),
    avatarUrl: faker.internet.avatar(),
    caption: faker.lorem.lines(1),
    imageUrl: faker.image.imageUrl(_, _, _, true),
  };
});

fs.writeFile('./test.json', JSON.stringify(story), (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
