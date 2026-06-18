const courses = [
  {
    no: 1,
    date: '06/09',
    month: '06',
    title: '目標設定及心態調整',
    lecturer: '簡宏鈞',
    role: '處經理',
    status: 'done',
    url: 'https://duduflow.github.io/learning-goal_setting/',
    ability: 'mindset',
    desc: '各階段指標設定、訪量漏斗圖轉換率、心態過門，以及行銷與招募並行的執行節奏。',
    tags: ['目標設定', '漏斗轉換率', '心態過門', '行銷招募']
  },
  {
    no: 2,
    date: '06/16',
    month: '06',
    title: '銷售自我',
    lecturer: '范毓斌',
    role: '業務經理',
    status: 'done',
    url: 'https://duduflow.github.io/learning-sales_self/',
    ability: 'mindset',
    desc: '銷售自我的必要性、不同職業的自我銷售方式，以及實際演練與故事化表達。',
    tags: ['個人品牌', '成交三層次', '客戶三洞', '故事公式']
  },
  {
    no: 3,
    date: '06/23',
    month: '06',
    title: '富邦之星',
    lecturer: '李孟珊',
    role: '業務經理',
    status: 'next',
    ability: 'mindset',
    desc: '富邦之星價值說明、面對挫折的處理、想像帶領一群富邦之星，以及行程安排與習慣維持。',
    tags: ['富邦之星', '挫折處理', '行程安排', '習慣維持']
  },
  {
    no: 4,
    date: '06/30',
    month: '06',
    title: '社群開發',
    lecturer: '詹呂欣蓓',
    role: '行銷襄理',
    status: 'planned',
    ability: 'marketing',
    desc: '如何設定發文頻率、設計連結鉤子，並掌握發文前、中、後的經營節奏。',
    tags: ['社群開發', '發文頻率', '連結鉤子', '內容節奏']
  },
  {
    no: 5,
    date: '07/07',
    month: '07',
    title: '九宮格（前）',
    lecturer: '陳昶宇',
    role: '行銷襄理',
    status: 'planned',
    ability: 'kyc',
    desc: '問句設計舉例示範，以類似案例拆解，帶學員用同一個案例練習 KYC 問句。',
    tags: ['九宮格', '問句設計', 'KYC', '案例拆解']
  },
  {
    no: 6,
    date: '07/14',
    month: '07',
    title: '好感型客戶經營',
    lecturer: '吳虹儀',
    role: '行銷襄理',
    status: 'planned',
    ability: 'relationship',
    desc: '判斷客戶意圖，設計應對方式，並練習面對拒絕時的回應與關係維持。',
    tags: ['客戶意圖', '好感經營', '拒絕處理', '應對']
  },
  {
    no: 7,
    date: '07/21',
    month: '07',
    title: '故事行銷',
    lecturer: '張恩煒',
    role: '行銷襄理',
    status: 'planned',
    ability: 'marketing',
    desc: '練習說故事的技巧，並把故事轉成能延伸保險需求與客戶議題的對話入口。',
    tags: ['故事行銷', '故事轉議題', '表達技巧']
  },
  {
    no: 8,
    date: '07/28',
    month: '07',
    title: '客戶開發',
    lecturer: '王昱文',
    role: '業務襄理',
    status: 'planned',
    ability: 'marketing',
    desc: '找到開發切入點與契機點，例如如何把陌生行銷電話連結成後續行銷機會。',
    tags: ['客戶開發', '切入點', '契機點', '陌生開發']
  },
  {
    no: 9,
    date: '08/04',
    month: '08',
    title: '話題轉議題',
    lecturer: '周純伃',
    role: '行銷經理',
    status: 'planned',
    ability: 'marketing',
    desc: '選擇能自然延伸的生活話題，進一步轉成銷售議題，並判斷適合的銷售族群。',
    tags: ['話題選擇', '議題轉換', '銷售族群']
  },
  {
    no: 10,
    date: '08/11',
    month: '08',
    title: '條款理賠與案例導讀（上）',
    lecturer: '鄭占禮',
    role: '處經理',
    status: 'planned',
    ability: 'service',
    desc: '重大保險改革、實支實付變革、急診理賠、住院與門診手術、條款導讀與理賠案例展示。',
    tags: ['條款理賠', '實支實付', '急診理賠', '案例導讀']
  },
  {
    no: 11,
    date: '08/18',
    month: '08',
    title: '條款理賠與案例導讀（下）',
    lecturer: '鄭占禮',
    role: '處經理',
    status: 'planned',
    ability: 'service',
    desc: '延續條款導讀與案例展示，聚焦急診理賠、住院與門診手術、改革後的理賠溝通重點。',
    tags: ['條款理賠', '手術定義', '理賠溝通', '案例展示']
  },
  {
    no: 12,
    date: '08/25',
    month: '08',
    title: '投資財富',
    lecturer: '洪敬忠',
    role: '分處經理',
    status: 'planned',
    ability: 'wealth',
    desc: '設定投資標靶、管理客戶，用有限金額規劃投資方向，並理解從零到投資千萬的模組與溝通模式。',
    tags: ['投資財富', '資產配置', '財商建立', '客戶管理']
  },
  {
    no: 13,
    date: '09/01',
    month: '09',
    title: '高資產客戶',
    lecturer: '鄭捷宇',
    role: '業務經理',
    status: 'planned',
    ability: 'wealth',
    desc: '剖析高資產客戶的共同點、成交起手式，以及長期經營高資產客戶的方式。',
    tags: ['高資產', '成交起手式', '客戶經營']
  },
  {
    no: 14,
    date: '09/08',
    month: '09',
    title: '九宮格（後）',
    lecturer: '趙家詡',
    role: '行銷襄理',
    status: 'planned',
    ability: 'kyc',
    desc: '延續問句設計與 KYC 案例拆解，讓學員用同一個案例深化問句設計。',
    tags: ['九宮格', '問句設計', 'KYC', '案例拆解']
  }
];

const statusMeta = {
  all: { label: '全部' },
  done: { label: '已完成' },
  next: { label: '下一堂' },
  planned: { label: '未開始' },
  draft: { label: '整理中' }
};

const abilityMap = [
  { id: 'all', no: '全', title: '全部能力', desc: '依日期瀏覽完整課表' },
  { id: 'mindset', no: '1', title: '心態與自我品牌', desc: '目標、心態、銷售自我、富邦之星' },
  { id: 'marketing', no: '2', title: '開發與社群行銷', desc: '社群、故事、開發、話題轉議題' },
  { id: 'kyc', no: '3', title: 'KYC 與問句設計', desc: '九宮格、案例拆解、問句設計' },
  { id: 'relationship', no: '4', title: '客戶經營與拒絕處理', desc: '判斷意圖、應對、好感型經營' },
  { id: 'service', no: '5', title: '專業服務與理賠', desc: '條款導讀、理賠案例、改革重點' },
  { id: 'wealth', no: '6', title: '財富與高資產經營', desc: '投資規劃、高資產客戶、溝通模式' }
];

let activeStatus = 'all';
let activeAbility = 'all';
let query = '';

const mount = document.getElementById('courseMount');
const searchInput = document.getElementById('searchInput');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');
const activePathLabel = document.getElementById('activePathLabel');

function esc(text) {
  return String(text || '').replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
}

function statusLabel(status) {
  return statusMeta[status]?.label || '未開始';
}

function courseText(course) {
  return [
    course.no,
    course.date,
    course.title,
    course.lecturer,
    course.role,
    course.desc,
    course.tags.join(' ')
  ].join(' ').toLowerCase();
}

function filteredCourses() {
  const q = query.trim().toLowerCase();
  return courses.filter(course => {
    const statusMatch = activeStatus === 'all' || course.status === activeStatus;
    const abilityMatch = activeAbility === 'all' || course.ability === activeAbility;
    const queryMatch = !q || courseText(course).includes(q);
    return statusMatch && abilityMatch && queryMatch;
  });
}

function cardMarkup(course) {
  const inner = `
    <div class="card-top">
      <div class="meta"><span>No.${String(course.no).padStart(2, '0')}</span><span class="dot"></span><span>${esc(course.date)}</span></div>
      <span class="badge ${esc(course.status)}">${statusLabel(course.status)}</span>
    </div>
    <h3 class="title">${esc(course.title)}</h3>
    <div class="lecturer">${esc(course.lecturer)} <b>${esc(course.role)}</b></div>
    <div class="desc">${esc(course.desc)}</div>
    <div class="tags">${course.tags.map(tag => `<span class="tag">${esc(tag)}</span>`).join('')}</div>
    <div class="card-foot">
      <span>${course.status === 'done' ? '筆記已上架' : course.status === 'next' ? '下一堂課程' : '保留學習方向'}</span>
      ${course.url ? '<span class="go">進入筆記</span>' : '<span>待整理</span>'}
    </div>
  `;
  if (course.url) {
    return `<a class="card ${esc(course.status)}" href="${esc(course.url)}">${inner}</a>`;
  }
  return `<article class="card ${esc(course.status)}">${inner}</article>`;
}

function renderCourses() {
  const list = filteredCourses();
  const grouped = list.reduce((acc, course) => {
    (acc[course.month] ||= []).push(course);
    return acc;
  }, {});
  const monthNames = { '06': '六月', '07': '七月', '08': '八月', '09': '九月' };
  mount.innerHTML = Object.keys(grouped).sort().map(month => `
    <div class="month"><b>${month}</b><span>${monthNames[month]}</span><i></i></div>
    <div class="grid">${grouped[month].map(cardMarkup).join('')}</div>
  `).join('');
  resultCount.textContent = `目前顯示 ${list.length} / ${courses.length} 堂`;
  emptyState.style.display = list.length ? 'none' : 'block';
}

function renderStatusChips() {
  const chipData = ['all', 'done', 'next', 'planned'];
  document.getElementById('statusChips').innerHTML = chipData.map(status => {
    const count = status === 'all' ? courses.length : courses.filter(course => course.status === status).length;
    return `<button class="chip ${status === activeStatus ? 'active' : ''}" data-status="${status}">${statusMeta[status].label}<small>${count}</small></button>`;
  }).join('');
  document.querySelectorAll('[data-status]').forEach(button => {
    button.addEventListener('click', () => {
      activeStatus = button.dataset.status;
      renderStatusChips();
      renderCourses();
    });
  });
}

function renderAbilityMap() {
  document.getElementById('pathGrid').innerHTML = abilityMap.map(item => `
    <button class="path ${item.id === activeAbility ? 'active' : ''}" data-ability="${item.id}">
      <b>${esc(item.no)}</b>
      <span><strong>${esc(item.title)}</strong><span>${esc(item.desc)}</span></span>
    </button>
  `).join('');
  document.querySelectorAll('[data-ability]').forEach(button => {
    button.addEventListener('click', () => {
      activeAbility = button.dataset.ability;
      renderAbilityMap();
      renderCourses();
    });
  });
  const current = abilityMap.find(item => item.id === activeAbility);
  activePathLabel.textContent = `目前顯示：${current?.title || '全部能力'}`;
}

function updateStats() {
  const done = courses.filter(course => course.status === 'done').length;
  const pct = Math.round(done / courses.length * 100);
  document.getElementById('totalCount').textContent = courses.length;
  document.getElementById('doneCount').textContent = done;
  document.getElementById('pct').textContent = `${pct}%`;
  requestAnimationFrame(() => {
    document.getElementById('bar').style.width = `${pct}%`;
  });
}

searchInput.addEventListener('input', event => {
  query = event.target.value;
  renderCourses();
});

updateStats();
renderStatusChips();
renderAbilityMap();
renderCourses();