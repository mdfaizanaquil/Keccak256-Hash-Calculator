const { ethers } = require("ethers");

const inputText = process.argv[2]; // Get the text from the command line

if (!inputText) {
    console.error("❌ Please provide the text to hash as an argument.");
    console.log("Usage: node hash.js \"your text here\"");
    process.exit(1);
}

function calculateHash() {
    try {
        // Convert the string to bytes before hashing
        const bytes = ethers.utils.toUtf8Bytes(inputText);
        const hash = ethers.utils.keccak256(bytes);

        console.log("\n--- Keccak256 Hash ---");
        console.log(`Input Text: "${inputText}"`);
        console.log(`Result Hash: ${hash}`);
        console.log("----------------------");

    } catch (error) {
        console.error("❌ Error calculating hash:", error.message);
    }
}

calculateHash();
