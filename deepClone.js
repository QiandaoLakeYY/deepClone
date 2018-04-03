// for (let j = 0,len = arr.length; j < len; j++)
function deepClone (originVal) {
	let temp = originVal instanceof Array ? [] : {}

	for (let item in originVal) {
		if (isReferenceType(originVal[item])) {
			temp[item] = deepClone(originVal[item])
		} else {
			temp[item] = originVal[item]
		}
	}
	return temp
}

function isReferenceType (val) {
	return Object.prototype.toString.call(val) === '[object Object]' ||
	       Object.prototype.toString.call(val) === '[object Array]'
}  

function isArray (val) {
	return Object.prototype.toString.call(val) === '[object Array]'
}

function isObject (val) {
	return Object.prototype.toString.call(val) == '[object Object]'
}