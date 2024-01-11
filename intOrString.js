function intOrString(input) {
  if (typeof input === 'number') {
		return "num"
  } else {
  return "str"
  }
}

console.log(intOrString(6))
console.log(intOrString("fsd"))
