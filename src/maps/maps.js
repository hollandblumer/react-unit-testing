const obj = {};

const map = new Map([
  [1, "key can me anything"],
  [2, "hello here"],
  [obj, "hello"],
]);

map.set(6, "hello");

// console.log(map);

console.log(map.get(1));
console.log(map);

map.has("2");
map.delete(1);
console.log(map.has(1));

console.log(map.size);

for (let [key, value] of map) {
  console.log(key, value);
}

map.forEach((value, key) => console.log(key, value));
console.log(map.key());
console.log(map.value());
console.log(map.clear());
