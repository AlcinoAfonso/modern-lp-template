const { execSync } = require('child_process');

console.log('\uD83D\uDD27 Verificando build do projeto...\n');

try {
  console.log('\uD83D\uDCE6 Instalando depend\u00eancias...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('\n\uD83C\uDFD7\uFE0F  Executando build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('\n\u2705 Build conclu\u00eddo com sucesso!');
  console.log('\uD83D\uDE80 Pronto para deploy na Vercel');
} catch (error) {
  console.error('\n\u274C Erro no build:', error.message);
  process.exit(1);
}
