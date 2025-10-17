// Configs editáveis (coloque seus links reais aqui)
const CONFIG = {
  SERVER_IP: 'cfx.re/join/g9ppdz',
  IG: '#', TIKTOK: '#', HYDROS: '#'
};

function toggleMenu(){
  const menu = document.getElementById('menu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

function copyIP(){
  navigator.clipboard.writeText(CONFIG.SERVER_IP).then(()=>{
    alert('IP copiado: ' + CONFIG.SERVER_IP);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // Atualiza IP e links dinamicamente
  const ipEl = document.getElementById('serverIp');
  if (ipEl) ipEl.textContent = CONFIG.SERVER_IP;

  const connectBtn = document.getElementById('connectBtn');
  if (connectBtn){
    // Quando tiver seu IP real, troque '#' por `fivem://connect/${CONFIG.SERVER_IP}`
    connectBtn.setAttribute('href', '#');
    // Exemplo: connectBtn.setAttribute('href', `fivem://connect/${CONFIG.SERVER_IP}`);
  }

  // Ranking fake (estático) — substitua pelos nomes reais quando quiser
  const topFaccoes = ['.', '.', '.', '.', '.'];
  const topRicos = [
    ['.....','R$ .'],
    ['....','R$ .'],
    ['.....','R$ .'],
    ['...','R$ .'],
    ['....','R$ ...']
  ];
  const topOnline = [
    ['.','.'],
    ['.','.'],
    ['.','.'],
    ['.','.'],
    ['.','.'],
  ];

  const faccEl = document.getElementById('rankFacc');
  const ricosEl = document.getElementById('rankRicos');
  const onEl = document.getElementById('rankOnline');

  if (faccEl) topFaccoes.forEach((n,i)=>{
    const li=document.createElement('li');
    li.innerHTML = `<span>#${i+1} — <strong>${n}</strong></span><span class="tag">Facção</span>`;
    faccEl.appendChild(li);
  });
  if (ricosEl) topRicos.forEach((r,i)=>{
    const li=document.createElement('li');
    li.innerHTML = `<span>#${i+1} — <strong>${r[0]}</strong></span><span class="tag">${r[1]}</span>`;
    ricosEl.appendChild(li);
  });
  if (onEl) topOnline.forEach((r,i)=>{
    const li=document.createElement('li');
    li.innerHTML = `<span>#${i+1} — <strong>${r[0]}</strong></span><span class="tag">${r[1]}</span>`;
    onEl.appendChild(li);
  });

  // Atualizações fake
  const updates = [
    {title:'Novo sistema de perseguição', date:'15/10/2025'},
    {title:'Buff nas recompensas de roubo', date:'10/10/2025'},
    {title:'Loja Hydros integrada ao site', date:'05/10/2025'},
    {title:'Balanceamento de armas', date:'28/09/2025'},
    {title:'Correção de bugs no inventário', date:'20/09/2025'},
    {title:'Evento drift na praia', date:'15/09/2025'},
    {title:'Novo sistema de facções', date:'15/10/2025'},
  ];
  const uList = document.getElementById('updatesList');
  if (uList){
    updates.forEach(u => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `<h4>${u.title}</h4><small>{${u.date}}</small>`;
      uList.appendChild(card);
    });
  }
});
