// for (let j = 0,len = arr.length; j < len; j++)
function deepClone (originVal, isSaveConstructor = false) {
	let temp = originVal instanceof Array ? [] : {}

	if (isSaveConstructor) {
		temp.__proto__ = originVal
	}
	
	for (let item in originVal) {
		if (originVal.hasOwnProperty(item)) {
			if (isReferenceType(originVal[item])) {
				temp[item] = deepClone(originVal[item])
			} else {
				temp[item] = originVal[item]
			}
		}
	}
	return temp
}

function isReferenceType (val) {
	return Object.prototype.toString.call(val) === '[object Object]' ||
	       Object.prototype.toString.call(val) === '[object Array]'
}  
