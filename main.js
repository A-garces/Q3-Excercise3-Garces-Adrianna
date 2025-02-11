function showGreeting() {
    let name = document.getElementById("name").value;
    let greeting = name ? 'Welcome, ${name}' : "Please enter your name!";
    document.getElementById("greeting").innerText = greetingText;
}
function refresh() {
    location.reload()
}