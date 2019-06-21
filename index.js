const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Qual sua jogada, pedra, papel ou tesoura? ', userAnswer => {
	const playOptions = {
		pedra: 1,
		papel: 2,
		tesoura: 3
	};
	const userChoice = playOptions[userAnswer.toLocaleLowerCase()];
	const computerChoice = Math.round(Math.random() * 2) + 1;

	if (userChoice === 1 && computerChoice === 3) {
		printResponse('#Pedra', '#Tesoura');
		console.log('Você ganhou!');
	}
	else if (userChoice === 1 && computerChoice === 2) {
		printResponse('#Pedra', '#Papel');
		console.log('Você perdeu!');
	}
	else if (userChoice === 1 && computerChoice === 1) {
		printResponse('#Pedra', '#Pedra');
		console.log('Empatou!');
	}

	if (userChoice === 2 && computerChoice === 1) {
		printResponse('#Papel', '#Pedra');
		console.log('Você ganhou!');
	}
	else if (userChoice === 2 && computerChoice === 3) {
		printResponse('#Papel', '#Tesoura');
		console.log('Você perdeu!');
	}
	else if (userChoice === 2 && computerChoice === 2) {
		printResponse('#Papel', '#Papel');
		console.log('Empatou!');
	}

	if (userChoice === 3 && computerChoice === 2) {
		printResponse('#Tesoura', '#Papel');
		console.log('Você ganhou!');
	}
	else if (userChoice === 3 && computerChoice === 1) {
		printResponse('#Tesoura', '#Pedra');
		console.log('Você perdeu!');
	}
	else if (userChoice === 3 && computerChoice === 3) {
		printResponse('#Tesoura', '#Tesoura');
		console.log('Empatou!');
	}

	rl.close();
});

const printResponse = (userChoice, computerChoice) => {
	console.log(`Você escolheu ${userChoice.toUpperCase()} e o computador ecolheu ${computerChoice.toUpperCase()}`);
};