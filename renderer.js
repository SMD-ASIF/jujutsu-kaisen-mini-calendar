// Character to month mapping, complete with color themes for dynamic frames
const calendarData = [
  {
    month: 'JANUARY', char: 'Yuji', img: 'images/Yuji.png',
    theme: { outerBg: 'linear-gradient(90deg, #ffcccc, #ff9999)', outerBorder: '#ff4d4d', innerBg: '#ffe6e6', innerBorder: '#ffb3b3', textMain: '#cc0000', textSub: '#ff3333' }
  },
  {
    month: 'FEBRUARY', char: 'Nobara', img: 'images/Nobara.png',
    theme: { outerBg: 'linear-gradient(90deg, #ffe6cc, #ffbf80)', outerBorder: '#ff9933', innerBg: '#fff2e6', innerBorder: '#ffd9b3', textMain: '#cc6600', textSub: '#ff8c1a' }
  },
  {
    month: 'MARCH', char: 'Megumi', img: 'images/Megumi.png',
    theme: { outerBg: 'linear-gradient(90deg, #cce6ff, #99ccff)', outerBorder: '#3385ff', innerBg: '#e6f2ff', innerBorder: '#b3d9ff', textMain: '#005ce6', textSub: '#1a75ff' }
  },
  {
    month: 'APRIL', char: 'Maki', img: 'images/Maki.png',
    theme: { outerBg: 'linear-gradient(90deg, #d9f2d9, #99e699)', outerBorder: '#33cc33', innerBg: '#e6ffe6', innerBorder: '#80ff80', textMain: '#009900', textSub: '#00b300' }
  },
  {
    month: 'MAY', char: 'Yuta', img: 'images/Yuta.png',
    theme: { outerBg: 'linear-gradient(90deg, #f2f2f2, #cccccc)', outerBorder: '#808080', innerBg: '#ffffff', innerBorder: '#b3b3b3', textMain: '#333333', textSub: '#666666' }
  },
  {
    month: 'JUNE', char: 'Geto', img: 'images/Geto.png',
    theme: { outerBg: 'linear-gradient(90deg, #f2e6ff, #d9b3ff)', outerBorder: '#9933ff', innerBg: '#f9f2ff', innerBorder: '#e6ccff', textMain: '#7300e6', textSub: '#9933ff' }
  },
  {
    month: 'JULY', char: 'Gojo', img: 'images/Gojo.png',
    theme: { outerBg: 'linear-gradient(90deg, #ccffff, #66ffff)', outerBorder: '#00cccc', innerBg: '#e6ffff', innerBorder: '#80ffff', textMain: '#008080', textSub: '#00b3b3' }
  },
  {
    month: 'AUGUST', char: 'Nanami', img: 'images/Nanami.png',
    theme: { outerBg: 'linear-gradient(90deg, #fff2cc, #ffcc66)', outerBorder: '#ffaa00', innerBg: '#fff9e6', innerBorder: '#ffe699', textMain: '#cc8800', textSub: '#e69900' }
  },
  {
    month: 'SEPTEMBER', char: 'Toji', img: 'images/Toji.png',
    theme: { outerBg: 'linear-gradient(90deg, #d9d9d9, #a6a6a6)', outerBorder: '#595959', innerBg: '#f2f2f2', innerBorder: '#cccccc', textMain: '#262626', textSub: '#404040' }
  },
  {
    month: 'OCTOBER', char: 'Sukuna', img: 'images/Sukuna.png',
    theme: { outerBg: 'linear-gradient(90deg, #ffccd9, #ff6699)', outerBorder: '#e6004c', innerBg: '#ffe6eb', innerBorder: '#ff99b3', textMain: '#b3003b', textSub: '#e6004c' }
  },
  {
    month: 'NOVEMBER', char: 'Choso', img: 'images/Choso.png',
    theme: { outerBg: 'linear-gradient(90deg, #e6ccb3, #bf8040)', outerBorder: '#8c5319', innerBg: '#f2e6d9', innerBorder: '#d9b38c', textMain: '#663d00', textSub: '#995c00' }
  },
  {
    month: 'DECEMBER', char: 'Yuki', img: 'images/Yuki.png',
    theme: { outerBg: 'linear-gradient(90deg, #ffffcc, #ffff66)', outerBorder: '#cccc00', innerBg: '#ffffe6', innerBorder: '#ffff99', textMain: '#999900', textSub: '#b3b300' }
  }
];

function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty('--outer-bg', theme.outerBg);
  root.style.setProperty('--outer-border', theme.outerBorder);
  root.style.setProperty('--inner-bg', theme.innerBg);
  root.style.setProperty('--inner-border', theme.innerBorder);
  root.style.setProperty('--text-main', theme.textMain);
  root.style.setProperty('--text-sub', theme.textSub);
}

let currentMonthIndex = new Date().getMonth(); // 0 - 11

function updateCalendar() {
  const today = new Date();
  const displayDate = today.getDate(); // 1 - 31

  const data = calendarData[currentMonthIndex];

  // Format date with zero padding if needed
  const paddedDate = displayDate < 10 ? '0' + displayDate : displayDate;

  // Update DOM elements
  document.getElementById('dateNumber').innerText = paddedDate;
  document.getElementById('monthName').innerText = data.month;
  document.getElementById('charImage').src = data.img;
  document.getElementById('charImage').alt = data.char;

  // Apply corresponding character theme
  applyTheme(data.theme);
}

function prevMonth() {
  currentMonthIndex = (currentMonthIndex - 1 + 12) % 12;
  updateCalendar();
}

function nextMonth() {
  currentMonthIndex = (currentMonthIndex + 1) % 12;
  updateCalendar();
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  updateCalendar();

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevMonth();
    if (e.key === 'ArrowRight') nextMonth();
  });

  // UI Button navigation
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.addEventListener('click', prevMonth);
  if (nextBtn) nextBtn.addEventListener('click', nextMonth);
});
