const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve tiles and static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('TileServer GL is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Start TileServer GL with Hyderabad data
exec(`tileserver-gl-light hyderabad.osm.pbf`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  console.log(`TileServer GL Output: ${stdout}`);
});
