#!/usr/bin/env node

/**
 * Sync data files from SITE-OWNER-EDIT-HERE to _data root
 * Run this after editing any files in SITE-OWNER-EDIT-HERE/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.resolve(__dirname, '..', '_data', 'SITE-OWNER-EDIT-HERE');
const targetDir = path.resolve(__dirname, '..', '_data');

const files = ['services.yml', 'reviews.yml', 'faq.yml', 'portfolio.yml'];

console.log('🔄 Syncing data files...\n');

files.forEach(file => {
  const source = path.join(sourceDir, file);
  const target = path.join(targetDir, file);
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, target);
    console.log(`✓ Copied ${file}`);
  } else {
    console.log(`⚠ Skipped ${file} (not found)`);
  }
});

console.log('\n✅ Data sync complete!\n');
console.log('Next steps:');
console.log('  1. npm run build');
console.log('  2. git add -A');
console.log('  3. git commit -m "Update site data"');
console.log('  4. git push origin main\n');
