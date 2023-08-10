const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let i = 0; i < characters.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + characters[i] +'   ');
  }, i * 100);
};

setTimeout(() => {
  console.log()
}, characters.length * 100)