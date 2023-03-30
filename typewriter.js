
async function printSentence() {
const sentence = "hello there from lighthouse labs";


for (let i = 0; i < sentence.length; i++) {
    await new Promise(resolve => setTimeout(resolve, 50 * i))
    process.stdout.write (sentence[i]);
    }
    process.stdout.write("\n");
}

printSentence();