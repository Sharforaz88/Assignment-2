function showInput() {
    const userText = document.getElementById("userText").value;
    const output = document.getElementById("output");
    output.innerHTML = `You entered: ${userText}`;
}
