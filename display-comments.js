const fs = require('fs');

const commentsFile = 'comments.json';

fs.readFile(commentsFile, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const comments = JSON.parse(data);

  Object.keys(comments).forEach((song) => {
    console.log(`**${song}**`);
    console.log(comments[song]);
    console.log('');
  });
});
