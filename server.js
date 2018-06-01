const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From My App' });
});

let my_client_id = process.env.SPOTIFYCLIENTID
let scopes = 'playlist-modify-public'

app.get('/login', function(req, res) {
    var scopes = 'user-read-private user-read-email playlist-modify-public';
    res.redirect('https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + my_client_id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirect_uri));
});

app.get('/callback', (req, res) => {
    console.log(req);
    res.send({ express: 'Hello From My App' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));