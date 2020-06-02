const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];



  // 1. Is at least one person 19?
  people.some(person => new Date().getFullYear() - person.year >= 19);

  // 2. Is everyone 19?
  people.every(person => new Date().getFullYear() - person.year >= 19);

  // 3. Find the comment with the ID of 823423.
  // It's like filter but it only returns the one you are looking for.
  comments.find(comment => comment.id === 823423);

  // 4. Delete the comment with the ID of 823423.
  const commentIndex = comments.findIndex(comment => comment.id === 823423);
  // Mutate the array
  comments.splice(commentIndex, 1);
  // Shallow copy
  const newComments = [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1)
  ]
