import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';

const assets = [
  // Logo/favicon
  { url: 'https://assets.scaled.info/api/img/img_01kfj1rnjmq6a77vgtcfah6kn6?f=webp', path: 'public/seo/favicon.webp' },
  { url: 'https://assets.scaled.info/api/img/img_01kbxezy6c9xjr8se7bny6mkga', path: 'public/images/kenso-logo.png' },
  
  // Store screenshots
  { url: 'https://cdn.medialabs.app/57f2565c-a82b-4f0d-86a0-ecca540e5feb/ml_img_U6t6r0wV8DbwtF4B/original.png', path: 'public/images/stores/store-1.png' },
  { url: 'https://cdn.medialabs.app/57f2565c-a82b-4f0d-86a0-ecca540e5feb/ml_img_BaoXW6LH_MqomJjN/original.png', path: 'public/images/stores/store-2.png' },
  { url: 'https://cdn.medialabs.app/57f2565c-a82b-4f0d-86a0-ecca540e5feb/ml_img_yO8ILHmhzYVBxltA/original.png', path: 'public/images/stores/store-3.png' },
  
  // Reseller profile images
  { url: 'https://assets.scaled.info/api/img/img_01kfxsfz3cfc9rvx00n8wjns5m', path: 'public/images/resellers/lucasresellzz.png' },
  { url: 'https://assets.scaled.info/api/img/img_01kfxsfz85npkj73v9y2xz4wca', path: 'public/images/resellers/ak-movez.png' },
  { url: 'https://assets.scaled.info/api/img/img_01kfxsfz3c3gzp27jwqryd5y34', path: 'public/images/resellers/flippaplugz.png' },
  { url: 'https://assets.scaled.info/api/img/img_01kfxsg0b6mr5xam91s9r5fjtw', path: 'public/images/resellers/pia-resell.png' },
  { url: 'https://assets.scaled.info/api/img/img_01kfxsg0br0bh550d4bsd5v2kh', path: 'public/images/resellers/cashoutmike.png' },
  { url: 'https://assets.scaled.info/api/img/img_01kfxsfz3dw428k3caemq5rbxa', path: 'public/images/resellers/toolduque.png' },
  { url: 'https://assets.scaled.info/api/img/img_01kfxsfz8b3jthmw0mcpf30pmx', path: 'public/images/resellers/hmresells.png' },
  { url: 'https://assets.scaled.info/api/img/img_01kfxsfz3fg01kc9kky0kwpxg1', path: 'public/images/resellers/nonosellzz.png' },
  { url: 'https://assets.scaled.info/api/img/img_01kfxsfz2m551skrgfykzxkzh1', path: 'public/images/resellers/bryzy-resell.png' },
  { url: 'https://assets.scaled.info/api/img/img_01kfxsfz3bm0wz7b0gp0mr6', path: 'public/images/resellers/izayesflips.png' },
  { url: 'https://assets.scaled.info/api/img/img_01kfxsfz1fak2zjva0zz154jxp', path: 'public/images/resellers/daeresells1.png' },
  
  // Background images for image generator
  { url: 'https://assets.scaled.info/api/img/img_01kggq8ce85s92z7xvf6b22by2?w=960', path: 'public/images/backgrounds/dark-waves.webp' },
  { url: 'https://assets.scaled.info/api/img/img_01kggqcjjyw4ag9ntcmw7rxk1k?w=960', path: 'public/images/backgrounds/royal-symmetry.webp' },
  { url: 'https://assets.scaled.info/api/img/img_01kggwg190mdbsm6v3nkfez2a3?w=960', path: 'public/images/backgrounds/midnight-crest.webp' },
  { url: 'https://assets.scaled.info/api/img/img_01kgjphypq3xxjkarw065hjhyh?w=960', path: 'public/images/backgrounds/futuristic.webp' },
  { url: 'https://assets.scaled.info/api/img/img_01kggq96vt9zgeez3tqh3gqsrq?w=960', path: 'public/images/backgrounds/grainy-clouds.webp' },
  
  // Pro plan badge
  { url: 'https://assets.scaled.info/api/img/img_01kfxw29xq9463tfw5ehv16fd9', path: 'public/images/pro-badge.png' },
];

async function downloadBatch(items, batchSize = 4) {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await Promise.all(batch.map(async ({ url, path }) => {
      try {
        await mkdir(dirname(path), { recursive: true });
        const res = await fetch(url);
        if (!res.ok) { console.error(`FAIL ${res.status}: ${url}`); return; }
        const buf = Buffer.from(await res.arrayBuffer());
        await writeFile(path, buf);
        console.log(`OK: ${path} (${(buf.length / 1024).toFixed(1)}KB)`);
      } catch (e) { console.error(`ERR: ${url} - ${e.message}`); }
    }));
  }
}

downloadBatch(assets);
