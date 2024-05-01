// Given an array of objects and the task is to 
// find the occurrences of a
//  given key according to its value.
	function findOcc(arr, key){ 
	let arr2 = []; 
		
	arr.forEach((x)=>{ 
		if(arr2.some((val)=>{ return val[key] == x[key] })){ 
		arr2.forEach((k)=>{ 
			if(k[key] === x[key]){ 
			k["occurrence"]++ 
			} 
		}) 
		}
        else{ 
		let a = {} 
		a[key] = x[key] 
		a["occurrence"] = 1 
		arr2.push(a); 
		} 
	}) 	
	return arr2 
	} 
	
	
	let arr = [ 
	{ 
		employeeName: "Ram", 
		employeeId: 23 
	}, 
	{ 
		employeeName: "Shyam", 
		employeeId: 24 
	}, 
	{ 
		employeeName: "Ram", 
		employeeId: 21 
	}, 
	{ 
		employeeName: "Ram", 
		employeeId: 25 
	}, 
	{ 
		employeeName: "Kisan", 
		employeeId: 22 
	}, 
	{ 
		employeeName: "Shyam", 
		employeeId: 20 
	} 
	] 
	
	let key = "employeeName"
	console.log(findOcc(arr, key)) 

