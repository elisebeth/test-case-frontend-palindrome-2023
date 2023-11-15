const checkPalindrome = (word) => {
	// clean the word (delete commas, spaces, etc.)
	const cleanedWord = String(word).toString().toLowerCase().replace(/[^a-zа-яё0-9]/g, '').replace('ё', 'е');

	// transform string into an array to get access to reverse and after that transform it back
	const reversedWord = cleanedWord.split('').reverse().join('');

	// check equal by type and value
	return reversedWord === cleanedWord;
}

const testArray = ['Муза, ранясь шилом опыта, ты помолишься на разума',
	'шалаш',
	false,
	12342321,
	'потоп',
	8282882892,
	[],
	[1, 2, 2, 2, 3],
	true,
	123433334321,
	'манекенам',
	'водоворот',
	'Он рёва наверно',
];

const palindromesArray = testArray.filter((word) => checkPalindrome(word));

console.log(palindromesArray)