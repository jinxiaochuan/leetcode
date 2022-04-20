function random2_32(n) {
  const set = new Set();
  while (set.size < Math.max(n, 32 - 2 + 1)) {
    set.add(Math.floor(Math.random() * (32 - 2) + 2));
  }
  return Array.from(set);
}

console.log(random2_32(5));
