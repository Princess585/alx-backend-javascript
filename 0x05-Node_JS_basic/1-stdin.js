console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const Princess = process.stdin.read();
  if (Princess !== null) {
    process.stdout.write(`Your name is: ${Princess}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
