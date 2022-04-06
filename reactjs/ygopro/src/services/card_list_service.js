
async function getAllCards(num = 2, sort='new', offset = 0, language = 'fr') {
	const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=${num}&offset=${offset}&language=${language}&sort=${sort}`);
	return await response.json();
}

async function searchAllcard( input = '', language = 'fr', ) {
	const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${input}&language=${language}`);
	return await response.json();
}
async function finById( id, language = 'fr', ) {
	const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}&language=${language}`);
	return await response.json();
}


export {getAllCards, searchAllcard,finById};