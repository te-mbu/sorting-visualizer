function	swapElement(list, index1, index2){
	let temp = list[index1];
	list[index1] = list[index2];
	list[index2] = temp;
	return list;
}

function	bubbleSort(list){
	let n = list.length;

	for (let round = 0; round < n; round++){
		for (let i = 1; i <= n - 1; i++){
			if (list[i - 1] > list[i])
				list = swapElement(list, i, i - 1);
		}
	}
	return list;
}