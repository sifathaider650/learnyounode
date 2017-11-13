let newresult = 0;

for (let i = 2; i < process.argv.length; i++) {
 newresult += Number(process.argv[i]);
}

console.log(newresult);
