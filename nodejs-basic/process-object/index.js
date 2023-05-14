const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for(let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// const initialMemoryUsage = process.memoryUsage().heapUsed;
// const yourName = process.argv[2]; // TODO 2: Ambil nilai dari command line argument
// const environment = process.env.NODE_ENV || 'development'; // TODO 3: Ganti dengan mode environment yang diinginkan, atau gunakan nilai default 'development'

// for (let i = 0; i <= 10000; i++) {
//   // Proses looping ini akan membuat penggunaan memori naik
// }

// const currentMemoryUsage = process.memoryUsage().heapUsed - initialMemoryUsage;
// console.log(`Hai, ${yourName}`);
// console.log(`Mode environment: ${environment}`);
// console.log(`Penggunaan memori saat ini: ${currentMemoryUsage} bytes`);
