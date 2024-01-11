function intOrString(input) {
  if (typeof input === 'number') {
		return "num"
  } else {
  return "str"
  }
}

console.log(intOrString(6))
console.log(intOrString("fsd"))



function intOrStringV2(input) {
  return (typeof input === 'number') ? "num" : "str";
}

console.log(intOrString(6))
console.log(intOrString("fsd"))
