import Web3 from 'web3';
import dotenv from 'dotenv';
dotenv.config();

const web3 = new Web3('https://polygon-rpc.com');
const account = process.env.PRIVATE_KEY;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}


