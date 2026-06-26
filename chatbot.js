document.addEventListener('DOMContentLoaded', () => {
    const chatWidget = document.getElementById('chatWidget');
    const chatHeader = document.getElementById('chatHeader');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatBody = document.getElementById('chatBody');

    // Prevent failure states if loaded on pages without the chat UI element
    if (!chatWidget) return;

    // Minimize Toggle Action
    chatHeader.addEventListener('click', () => {
        chatWidget.classList.toggle('minimized');
    });

    // Message processing execution loop
    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        appendMessage(text, 'user');
        chatInput.value = '';

        setTimeout(() => {
            const reply = getBotResponse(text);
            appendMessage(reply, 'bot');
        }, 500);
    }

    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('msg', sender);
        msgDiv.textContent = text;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getBotResponse(input) {
        const query = input.toLowerCase();
        if (query.includes('skill')) {
            return "We currently offer peer-led paths in: UI/UX Design, Python & AI, and Responsive Web Development!";
        } else if (query.includes('hello') || query.includes('hi')) {
            return "Hey there! Ask me about our 'skills' or type 'help' anytime.";
        } else if (query.includes('help')) {
            return "Try asking me: 'What skills are here?' or 'How does this platform work?'";
        }
        return "That sounds awesome! Ask me about our 'skills' to find classes or study groups.";
    }

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});
