const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => res.type('html').send(html));

app.post("/signal", (req, res) => {
  fetch('https://backend.magmanode.com/api/client/servers/963fe62a/power', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + ${process.env.apiKey},
    },
    body: JSON.stringify(req.body)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="KhaoMods Server Starting">
    <title>KhaoMods Server</title>
  </head>
  <body>
    <button onclick="sendAPIPower('start')">Start</button>
    <button onclick="sendAPIPower('restart')">Restart</button>
    <button onclick="sendAPIPower('stop')">Stop</button>

    <script>
      function sendAPIPower(signal) {
        fetch('https://backend.magmanode.com/api/client/servers/963fe62a/power', {
          method: 'POST',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + ${process.env.apiKey},
          },
          body: JSON.stringify({
            signal
          })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          // Handle the response from the server here
          console.log('API request successful');
        })
        .catch(error => {
          // Handle any errors that occur during the request here
          console.error('API request failed:', error);
        });
      }
    </script>
  </body>
</html>
`
