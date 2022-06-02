window.onload = () => {
    document.getElementById('chat-input').onkeydown = event => {
        if (!event) event = window.event;
        const keyCode = event.code || event.key;
        if (keyCode == 'Enter'){
            const inputValue = document.getElementById('chat-input').value;
            if (inputValue === "") return;
            const messageArea = document.getElementsByClassName("messaging-area__messages")[0];
            const messageElement = document.createElement("div");
            messageElement.className = "message-item--sender"

            messageElement.innerHTML = `
                <span class="message-content">${inputValue}</span>
                <span class="message-date">Today at ${new Date().toLocaleTimeString().substring(0, 5)}</span>
            `

            messageArea.appendChild(messageElement);
            document.getElementById('chat-input').value = "";
            return false;
        }
    }
    console.log("Chat handler loaded!");
}