const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateCircularFavicon() {
  const size = 192;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  const imgPath = path.join(__dirname, '../public/images/logos/final_logo.png');
  const img = await loadImage(imgPath);

  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();

  ctx.drawImage(img, 0, 0, size, size);

  const outPath = path.join(__dirname, '../public/images/logos/favicon_circle.png');
  fs.writeFileSync(outPath, canvas.toBuffer('image/png'));
  console.log('Generated:', outPath);
}

generateCircularFavicon().catch(console.error);
