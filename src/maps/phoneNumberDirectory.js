function phoneNumberDirectory(arr) {
  const map = new Map();

  for (const str of arr) {
    const [name, phone] = str.split(":");
    map.set(name.trim(), phone.trim());
  }
  console.log(map);
  return map;
}

phoneNumberDirectory([
  "john: 912-242-24324",
  "marsh: 912-242-24324",
  "holland: 912-242-24324",
]);
