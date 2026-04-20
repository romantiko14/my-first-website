document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');
    const statusText = document.getElementById('status');

    button.addEventListener('click', () => {
        statusText.innerText = "System Online!";
        statusText.style.color = "green";
        console.log("Success: JavaScript is communicating with the HTML.");
        document.body.style.backgroundColor = "#e0f7fa";
    });
});
