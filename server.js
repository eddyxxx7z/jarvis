
const http = require("http");

const page = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<title>JARVIS</title>
<style>
body { background:#07101c; color:white; font-family:Arial; max-width:700px; margin:40px auto; padding:15px; }
h1 { color:#38d9ff; }
#chat { background:#101e30; padding:20px; min-height:100px; margin:20px 0; white-space:pre-wrap; }
textarea { width:100%; height:80px; box-sizing:border-box; padding:10px; }
button { padding:12px; margin-top:10px; cursor:pointer; }
</style>
</head>
<body>
<h1>J.A.R.V.I.S.</h1>
<div id="chat">Hallo! Ich bin JARVIS und bin bereit.</div>
<textarea id="msg" placeholder="Schreibe hier ..."></textarea><br>
<button onclick="sendMsg()">Senden</button>
<button onclick="speak()">Vorlesen</button>
<script>
async function sendMsg() {
  const msg = document.getElementById("msg").value.trim();
  const chat = document.getElementById("chat");
  if (!msg) return;
  chat.textContent = "Du: " + msg + "\\nJARVIS: Ich bin noch im Testmodus.";
  document.getElementById("msg").value = "";
}
function speak() {
  const text = document.getElementById("chat").textContent;
  const voice = new SpeechSynthesisUtterance(text);
  voice.lang = "de-DE";
  speechSynthesis.speak(voice);
}
</script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(page);
    return;
  }
  res.writeHead(404);
  res.end("Nicht gefunden");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("JARVIS laeuft unter http://localhost:3000");
});