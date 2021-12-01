setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1600);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 2000);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 2400);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 2800);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 3200);