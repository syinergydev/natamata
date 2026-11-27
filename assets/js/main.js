(function(){
'use strict';
var SHOP='https://id.shp.ee/hd4XAzM';
var P=[
 {n:'Cleome (Eye Clarity)',c:'Anti radiasi',s:'round',d:'Frame bulat unisex dengan lensa pelindung sinar biru (bluechromic).',u:'https://shop-id.tokopedia.com/pdp/kacamata-anti-radiasi-natamata-eye-clarity-desain-stylish-teknologi-bluechromic-pelindung-mata-untuk/1730754722715371420'},
 {n:'Cacta',c:'Kacamata',s:'rect',d:'Frame warna clear dari katalog Natamata.',u:SHOP},
 {n:'Carica',c:'Kacamata',s:'cat',d:'Frame warna clear dari katalog Natamata.',u:SHOP},
 {n:'Cattapa',c:'Kacamata',s:'round',d:'Frame warna clear dari katalog Natamata.',u:SHOP},
 {n:'Erinus',c:'Kacamata',s:'rect',d:'Frame warna clear dari katalog Natamata.',u:SHOP},
 {n:'Hibiscus',c:'Kacamata',s:'cat',d:'Frame warna clear dari katalog Natamata.',u:SHOP}];
var PC=['Semua','Kacamata','Anti radiasi','Kacamata hitam','Anak'];
var q=function(a){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(a)};
var B=[
 {n:'Surabaya · National Eye Center',c:'Surabaya',a:'Jl. Dharmahusada Indah No. 41, Surabaya',m:'https://maps.app.goo.gl/BSSNifWvBGJzigtQ9',w:'6285167060990'},
 {n:'Surabaya · Jokopi Tunjungan',c:'Surabaya',a:'Area Jokopi, Jl. Tunjungan, Surabaya',m:q('Jokopi Tunjungan Surabaya')},
 {n:'Sidoarjo',c:'Sidoarjo',a:'Perum Pondok Mutiara No. L 12, Banjarbendo, Sidoarjo 61213',w:'6285188656701'},
 {n:'Gresik',c:'Gresik',a:'Jl. Kalimantan No. 177 C, GKB, Yosowilangun, Manyar, Gresik',m:'https://maps.app.goo.gl/2azrqpiFMZYFBfgY9',w:'6285850214078',h:'Sen–Sab 09.00–20.00, Minggu tutup (info Jan 2025)'},
 {n:'Mojokerto',c:'Mojokerto',a:'Jl. Mojopahit No. 217, Mergelo, Sentanan, Magersari, Mojokerto',w:'6285133337676'},
 {n:'Lamongan',c:'Lamongan',a:'Jl. Sunan Giri No. 61, Tumenggungan, Lamongan 62214'},
 {n:'Bangkalan',c:'Bangkalan',a:'Jl. Soekarno-Hatta No. 4, Mlajah, Bangkalan',h:'Sen–Sab 09.00–20.00, Minggu tutup (info Jan 2025)'}];
var cities=['Semua'].concat(B.map(function(b){return b.c}).filter(function(c,i,a){return a.indexOf(c)===i}));
function el(t,cls,txt){var e=document.createElement(t);if(cls)e.className=cls;if(txt)e.textContent=txt;return e}
function link(txt,href,cls){var a=el('a','btn '+(cls||''),txt);a.href=href;a.target='_blank';a.rel='noopener';return a}
function glass(s){var ns='http://www.w3.org/2000/svg',v=document.createElementNS(ns,'svg');v.setAttribute('viewBox','0 0 300 120');v.setAttribute('role','img');v.setAttribute('aria-label','Ilustrasi bentuk bingkai '+s);
 var d={round:'<circle cx="95" cy="60" r="38"/><circle cx="205" cy="60" r="38"/>',rect:'<rect x="55" y="30" width="80" height="58" rx="10"/><rect x="165" y="30" width="80" height="58" rx="10"/>',cat:'<path d="M55 40q40-14 80 0q2 40-30 48q-46 0-50-48zM165 40q40-14 80 0q-4 48-50 48q-32-8-30-48z"/>'}[s];
 v.innerHTML=d+'<path d="M133 52q17-12 34 0M57 46L30 38M243 46L270 38"/>';return v}
function chips(box,list,cur,cb){box.textContent='';list.forEach(function(t){var b=el('button','chip',t);b.type='button';b.setAttribute('aria-pressed',t===cur);b.onclick=function(){cb(t)};box.appendChild(b)})}
var pc='Semua',bc='Semua',pq=document.getElementById('q'),bq=document.getElementById('bq');
function drawP(){chips(document.getElementById('pcats'),PC,pc,function(t){pc=t;drawP()});
 var box=document.getElementById('products'),k=pq.value.trim().toLowerCase();box.textContent='';
 var r=P.filter(function(p){return(pc==='Semua'||p.c===pc)&&(p.n+' '+p.c).toLowerCase().indexOf(k)>-1});
 if(!r.length)box.appendChild(el('p','empty','Belum ada produk terverifikasi untuk pilihan ini. Menunggu katalog dari Natamata.'));
 r.forEach(function(p){var c=el('article','card');c.appendChild(glass(p.s));c.appendChild(el('p','fig','Ilustrasi, bukan foto produk'));c.appendChild(el('h3','',p.n));c.appendChild(el('p','cat',p.c));c.appendChild(el('p','',p.d));c.appendChild(link('Lihat detail',p.u,'ghost'));box.appendChild(c)})}
function drawB(){chips(document.getElementById('bcities'),cities,bc,function(t){bc=t;drawB()});
 var box=document.getElementById('branches'),k=bq.value.trim().toLowerCase();box.textContent='';
 var r=B.filter(function(b){return(bc==='Semua'||b.c===bc)&&(b.n+' '+b.a).toLowerCase().indexOf(k)>-1});
 if(!r.length)box.appendChild(el('p','empty','Cabang tidak ditemukan. Coba kata kunci lain.'));
 r.forEach(function(b){var c=el('article','card');c.appendChild(el('h3','',b.n));c.appendChild(el('p','cat',b.c));c.appendChild(el('p','',b.a));
  if(b.h)c.appendChild(el('p','mute',b.h));
  var row=el('div','row');row.appendChild(link('Google Maps',b.m||q(b.a)));
  if(b.w)row.appendChild(link('WhatsApp','https://wa.me/'+b.w,'ghost'));
  c.appendChild(row);box.appendChild(c)})}
pq.addEventListener('input',drawP);bq.addEventListener('input',drawB);drawP();drawB();
var bu=document.querySelector('.burger'),nv=document.getElementById('menu');
bu.addEventListener('click',function(){var o=nv.classList.toggle('open');bu.setAttribute('aria-expanded',o);bu.setAttribute('aria-label',o?'Tutup menu':'Buka menu')});
nv.addEventListener('click',function(e){if(e.target.tagName==='A'){nv.classList.remove('open');bu.setAttribute('aria-expanded',false)}});
})();
