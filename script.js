const quotes = [
    "«Рукописи не горят»",
    "«Каждый получит по вере своей»",
    "«Кто сказал, что нет на свете настоящей, верной, вечной любви?»"
];

document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.querySelector('#quotes blockquote p');
    setInterval(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = randomQuote;
    }, 5000);
});
