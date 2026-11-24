const app = document.querySelector('#app');
const storageKey = 'tulongtools-demo-v1';
const themeStorageKey = 'tulongtools-theme';
const themePresets = [
  { id: 'light', name: 'Light', swatches: ['#571cff', '#ef00c8', '#10cbb5', '#293748'], page: '#f4f7f8', surface: '#ffffff', surfaceAlt: '#eef3f6', text: '#263746', muted: '#647383', border: '#d8e0e6', primary: '#315f91', accent: '#e5a63b', header: '#ffffff', headerText: '#263746', input: '#ffffff', inputText: '#263746' },
  { id: 'dark', name: 'Dark', swatches: ['#6778ff', '#ed42c4', '#12c7ad', '#293748'], page: '#0b1220', surface: '#172337', surfaceAlt: '#141f31', text: '#e6edf7', muted: '#aab8ca', border: '#2b3a50', primary: '#3478ad', accent: '#e5a63b', header: '#0f1726', headerText: '#f4f7fb', input: '#0f1929', inputText: '#e7edf7' },
  { id: 'cupcake', name: 'Cupcake', swatches: ['#63c7c7', '#f4a1b7', '#f4bf42', '#311c39'], page: '#f7eff5', surface: '#fffafd', surfaceAlt: '#f5e9f1', text: '#44354b', muted: '#806f85', border: '#e5d3e2', primary: '#a34d87', accent: '#e6a3bd', header: '#fffafd', headerText: '#44354b', input: '#ffffff', inputText: '#44354b' },
  { id: 'bumblebee', name: 'Bumblebee', swatches: ['#ffda00', '#ffa600', '#ff9b50', '#151028'], page: '#fff9e8', surface: '#ffffff', surfaceAlt: '#fff2c8', text: '#282419', muted: '#776e59', border: '#eadcae', primary: '#34312a', accent: '#f5bd16', header: '#fff8df', headerText: '#282419', input: '#ffffff', inputText: '#282419' },
  { id: 'emerald', name: 'Emerald', swatches: ['#58c88b', '#3385fb', '#f57f71', '#303748'], page: '#edf8f2', surface: '#ffffff', surfaceAlt: '#e1f3ea', text: '#243a32', muted: '#617b70', border: '#c9e2d5', primary: '#13845d', accent: '#56bb85', header: '#f5fcf8', headerText: '#243a32', input: '#ffffff', inputText: '#243a32' },
  { id: 'corporate', name: 'Corporate', swatches: ['#526de5', '#4b74f6', '#63c99e', '#181a2b'], page: '#f0f3f8', surface: '#ffffff', surfaceAlt: '#e9eef6', text: '#26344c', muted: '#66758c', border: '#d5deeb', primary: '#435fc3', accent: '#657de7', header: '#ffffff', headerText: '#26344c', input: '#ffffff', inputText: '#26344c' },
  { id: 'synthwave', name: 'Synthwave', swatches: ['#dc70c2', '#4fc8ee', '#ffce00', '#20194d'], page: '#17112c', surface: '#241a43', surfaceAlt: '#2d2050', text: '#f6eafa', muted: '#c3a9d0', border: '#483164', primary: '#7d54d8', accent: '#e85ebc', header: '#120d23', headerText: '#f6eafa', input: '#17112c', inputText: '#f6eafa' },
  { id: 'retro', name: 'Retro', swatches: ['#ef9b98', '#9dc7b0', '#db8556', '#302b31'], page: '#f4ebe0', surface: '#fff9f0', surfaceAlt: '#efe1d1', text: '#423532', muted: '#837068', border: '#dfc9b5', primary: '#9b5a3f', accent: '#db8556', header: '#fff9f0', headerText: '#423532', input: '#ffffff', inputText: '#423532' },
  { id: 'cyberpunk', name: 'Cyberpunk', swatches: ['#ff4b98', '#00d7e7', '#d669f5', '#24244d'], page: '#111526', surface: '#1b2038', surfaceAlt: '#242b45', text: '#f5efff', muted: '#b7b2d3', border: '#3a4064', primary: '#00aebd', accent: '#ff4b98', header: '#101323', headerText: '#f5efff', input: '#111526', inputText: '#f5efff' },
  { id: 'valentine', name: 'Valentine', swatches: ['#ed7182', '#aa91f4', '#68b7b6', '#bb4c75'], page: '#fff0f3', surface: '#fffafd', surfaceAlt: '#fce4e9', text: '#512e40', muted: '#936e80', border: '#f0cbd7', primary: '#b74673', accent: '#e97991', header: '#fffafd', headerText: '#512e40', input: '#ffffff', inputText: '#512e40' },
  { id: 'halloween', name: 'Halloween', swatches: ['#ff8a00', '#9b00db', '#36aa00', '#291a0d'], page: '#1a130e', surface: '#281d15', surfaceAlt: '#332419', text: '#f6eadb', muted: '#c2a88f', border: '#59402a', primary: '#bd5d0b', accent: '#ff9017', header: '#140f0b', headerText: '#f6eadb', input: '#1a130e', inputText: '#f6eadb' },
  { id: 'garden', name: 'Garden', swatches: ['#f40070', '#a34968', '#628371', '#262008'], page: '#f1f5e9', surface: '#fbfff5', surfaceAlt: '#e7eedb', text: '#303b2b', muted: '#707d66', border: '#d0dcc2', primary: '#547542', accent: '#b66b83', header: '#fbfff5', headerText: '#303b2b', input: '#ffffff', inputText: '#303b2b' },
  { id: 'forest', name: 'Forest', swatches: ['#19b45a', '#20ad8d', '#20b7a3', '#20312e'], page: '#0e1b17', surface: '#162720', surfaceAlt: '#1c332a', text: '#e6f4ea', muted: '#a0b9a7', border: '#2e4d3e', primary: '#188c5a', accent: '#43b97c', header: '#0b1511', headerText: '#e6f4ea', input: '#0e1b17', inputText: '#e6f4ea' },
  { id: 'aqua', name: 'Aqua', swatches: ['#00d7df', '#8e75a7', '#ffe28c', '#458fc2'], page: '#eaf7fb', surface: '#f8fdff', surfaceAlt: '#dff1f7', text: '#243c4b', muted: '#66818e', border: '#c5e0e9', primary: '#2d83ad', accent: '#12b8c2', header: '#f8fdff', headerText: '#243c4b', input: '#ffffff', inputText: '#243c4b' },
  { id: 'lofi', name: 'Lofi', swatches: ['#111111', '#282828', '#414141', '#ffffff'], page: '#e9e9e9', surface: '#ffffff', surfaceAlt: '#f0f0f0', text: '#222222', muted: '#686868', border: '#cecece', primary: '#333333', accent: '#777777', header: '#ffffff', headerText: '#222222', input: '#ffffff', inputText: '#222222' },
  { id: 'pastel', name: 'Pastel', swatches: ['#d3c4d6', '#f5c5ce', '#a8e1d4', '#78b3ce'], page: '#f5f0f8', surface: '#fffaff', surfaceAlt: '#eee8f3', text: '#433b50', muted: '#82788d', border: '#dfd4e6', primary: '#7771aa', accent: '#c8a9d5', header: '#fffaff', headerText: '#433b50', input: '#ffffff', inputText: '#433b50' }
];

const defaultDb = {
  users: [
    { id: 2, name: 'Barangay Staff', mobile: '09180000001', email: 'Agramon@gmail.com', address: 'Barangay Hall', password: 'Staff', role: 'staff', verified: true },
    { id: 3, name: 'Barangay Admin', mobile: '09180000002', email: 'Rabosa@gmail.com', address: 'Barangay Hall', password: 'Admin', role: 'admin', verified: true }
  ],
  items: [
    { id: 1, name: 'Extension ladder', category: 'Hand Tools', description: 'Aluminum extension ladder for roof and ceiling work.', qty: 2, deposit: 200, maxDays: 3, active: true },
    { id: 2, name: 'Power drill', category: 'Hand Tools', description: 'Cordless power drill with drill bits and carrying case.', qty: 2, deposit: 300, maxDays: 2, active: true },
    { id: 3, name: 'Folding table', category: 'Event Equipment', description: 'Heavy-duty folding table for meetings and community events.', qty: 3, deposit: 150, maxDays: 3, active: true },
    { id: 4, name: 'Monobloc chairs', category: 'Event Equipment', description: 'Stackable monobloc chairs for barangay events.', qty: 20, deposit: 50, maxDays: 3, active: true },
    { id: 5, name: 'Sound system', category: 'Event Equipment', description: 'Portable sound system with microphones and speakers.', qty: 1, deposit: 500, maxDays: 2, active: true },
    { id: 6, name: 'Generator', category: 'Event Equipment', description: 'Portable generator for community events and emergencies.', qty: 1, deposit: 800, maxDays: 3, active: true }
  ],
  reservations: [
    { id: 101, userId: 1, itemId: 5, qty: 1, start: '2026-11-28', end: '2026-11-29', status: 'pending', reason: '' },
    { id: 102, userId: 1, itemId: 1, qty: 1, start: '2026-11-24', end: '2026-11-26', status: 'released', reason: '' }
  ],
  transactions: [
    { id: 201, reservationId: 102, releasedBy: 2, releasedAt: '2026-11-24T08:00:00', returnedAt: null, depositPaid: 200, lateFee: 0, damageCharge: 0, status: 'out' }
  ],
  maintenance: [
    { id: 301, itemId: 6, qtyAffected: 1, issue: 'Starter cord needs replacement', cost: 1200, startedOn: '2026-11-20', completedOn: null }
  ],
  audit: [],
  lateFeePerDay: 50
};

let db = loadDb();
let currentUser = readSession();

function loadDb() {
  try {
    const savedDb = JSON.parse(localStorage.getItem(storageKey));
    const db = savedDb || structuredClone(defaultDb);

    db.users = db.users.filter(user =>
      user.email?.toLowerCase() !== 'resident@example.com' &&
      user.name !== 'Maria Santos'
    );
    if (db.credentialsVersion !== 1) {
      ['staff', 'admin'].forEach(role => {
        const defaultUser = defaultDb.users.find(user => user.role === role);
        const savedUser = db.users.find(user => user.role === role);
        if (defaultUser && savedUser) {
          savedUser.email = defaultUser.email;
          savedUser.password = defaultUser.password;
        }
      });
      db.credentialsVersion = 1;
    }
    db.reservations = db.reservations.filter(reservation => reservation.userId !== 1);
    db.transactions = db.transactions.filter(transaction => transaction.reservationId !== 102);

    localStorage.setItem(storageKey, JSON.stringify(db));
    return db;
  } catch {
    return structuredClone(defaultDb);
  }
}

function readSession() {
  try {
    const savedUser = JSON.parse(sessionStorage.getItem('tulongtools-user'));
    return db.users.find(user => user.id === savedUser?.id) || null;
  } catch {
    return null;
  }
}

function saveDb() {
  localStorage.setItem(storageKey, JSON.stringify(db));
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[character]);
}

function showDialog({ title, message = '', field = null, confirmLabel = 'OK', cancelLabel = null }) {
  return new Promise(resolve => {
    document.querySelector('.modal-backdrop')?.remove();
    const fieldMarkup = field ? `
      <div class="field">
        <label for="appDialogValue">${escapeHtml(field.label)}</label>
        ${field.type === 'select'
          ? `<select id="appDialogValue" name="dialogValue" ${field.required ? 'required' : ''}>
              ${field.options.map(option => `<option value="${escapeHtml(option.value)}" ${option.value === field.value ? 'selected' : ''}>${escapeHtml(option.label)}</option>`).join('')}
            </select>`
          : `<input id="appDialogValue" name="dialogValue" type="${escapeHtml(field.type || 'text')}" value="${escapeHtml(field.value ?? '')}" ${field.required ? 'required' : ''} ${field.min !== undefined ? `min="${field.min}"` : ''} ${field.step !== undefined ? `step="${field.step}"` : ''}>`}
      </div>
    ` : '';

    document.body.insertAdjacentHTML('beforeend', `
      <div class="modal-backdrop" id="appDialogBackdrop">
        <form class="modal-card app-dialog" id="appDialogForm" role="dialog" aria-modal="true" aria-labelledby="appDialogTitle">
          <h2 id="appDialogTitle">${escapeHtml(title)}</h2>
          ${message ? `<p class="app-dialog-message">${escapeHtml(message)}</p>` : ''}
          ${fieldMarkup}
          <div class="modal-actions">
            ${cancelLabel ? `<button type="button" class="text-button" id="appDialogCancel">${escapeHtml(cancelLabel)}</button>` : ''}
            <button type="submit" class="task-button">${escapeHtml(confirmLabel)}</button>
          </div>
        </form>
      </div>
    `);

    const backdrop = document.querySelector('#appDialogBackdrop');
    const form = document.querySelector('#appDialogForm');
    let onKeyDown;
    const close = value => {
      backdrop.remove();
      document.removeEventListener('keydown', onKeyDown);
      resolve(value);
    };

    form.onsubmit = event => {
      event.preventDefault();
      close(field ? form.elements.namedItem('dialogValue').value : true);
    };
    document.querySelector('#appDialogCancel')?.addEventListener('click', () => close(null));
    backdrop.onclick = event => {
      if (event.target === backdrop && cancelLabel) close(null);
    };
    onKeyDown = event => {
      if (event.key === 'Escape' && cancelLabel) close(null);
    };
    document.addEventListener('keydown', onKeyDown);
    form.querySelector('input, select, button')?.focus();
  });
}

function showNotice(message, title = 'Notice') {
  return showDialog({ title, message });
}

function showConfirmation(message, title = 'Please confirm') {
  return showDialog({ title, message, confirmLabel: 'Confirm', cancelLabel: 'Cancel' })
    .then(confirmed => confirmed === true);
}

function showInputDialog(message, field, title = 'Enter information') {
  return showDialog({ title, message, field, confirmLabel: 'Save', cancelLabel: 'Cancel' });
}

function itemPhotoContent(item) {
  const image = typeof item.image === 'string' && /^data:image\/jpeg;base64,/.test(item.image)
    ? item.image
    : null;
  return image
    ? `<img src="${image}" alt="Photo of ${escapeHtml(item.name)}">`
    : '[Item photo]';
}

function resizeItemPhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('The image file could not be read.'));
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        reject(new Error('The selected file is not a valid image.'));
        return;
      }

      const image = new Image();
      image.onerror = () => reject(new Error('The selected file is not a valid image.'));
      image.onload = () => {
        const maxDimension = 1000;
        const scale = Math.min(1, maxDimension / Math.max(image.width, image.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const context = canvas.getContext('2d');
        if (!context) {
          reject(new Error('Your browser could not process this image.'));
          return;
        }

        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function itemById(id) {
  return db.items.find(item => item.id === Number(id));
}

function userById(id) {
  return db.users.find(user => user.id === Number(id));
}

function contactAlreadyRegistered(email, mobile, excludeUserId = null) {
  return db.users.some(user =>
    user.id !== excludeUserId &&
    (user.email.toLowerCase() === email.toLowerCase() || user.mobile === mobile)
  );
}

function shortDate(date) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(`${date}T12:00:00`));
}

function peso(amount) {
  return `PHP ${Number(amount || 0).toLocaleString('en-PH')}`;
}

function borrowingRulesNotice() {
  return `
    <aside class="borrowing-rules-notice" aria-label="Current borrowing rules">
      <strong>Borrowing rules</strong>
      <span>Late returns are charged ${peso(db.lateFeePerDay)} per day. Each item's maximum loan period and deposit are shown on its details.</span>
    </aside>
  `;
}

function addAudit(action, table, targetId) {
  db.audit.unshift({
    id: Date.now(),
    userId: currentUser?.id || null,
    action,
    table,
    targetId,
    loggedAt: new Date().toISOString()
  });
  saveDb();
}

function availableQty(item, start, end) {
  let held = 0;
  db.reservations
    .filter(reservation => reservation.itemId === item.id)
    .filter(reservation => ['approved', 'released'].includes(reservation.status))
    .filter(reservation => reservation.start <= end && reservation.end >= start)
    .forEach(reservation => held += reservation.qty);

  db.maintenance
    .filter(record => record.itemId === item.id && !record.completedOn)
    .forEach(record => held += record.qtyAffected);

  return Math.max(0, item.qty - held);
}

function minimumItemQty(itemId) {
  const reservations = db.reservations
    .filter(reservation => reservation.itemId === itemId)
    .filter(reservation => ['approved', 'released'].includes(reservation.status));
  const maintenanceQty = db.maintenance
    .filter(record => record.itemId === itemId && !record.completedOn)
    .reduce((total, record) => total + record.qtyAffected, 0);
  const maxReservedAtOnce = reservations.reduce((maximum, reservation) => {
    const reservedAtStart = reservations
      .filter(entry => entry.start <= reservation.start && entry.end >= reservation.start)
      .reduce((total, entry) => total + entry.qty, 0);
    return Math.max(maximum, reservedAtStart);
  }, 0);

  return maintenanceQty + maxReservedAtOnce;
}

function setActive(view) {
  document.querySelectorAll('[data-view]').forEach(button => {
    button.classList.toggle('active', button.dataset.view === view);
  });
  document.querySelector('#themeSettingsButton')?.classList.toggle('active', view === 'account');
}

function rebuildNav() {
  document.querySelector('.main-nav')?.remove();
  document.querySelector('#themeSettingsButton')?.remove();
  if (!currentUser) {
    document.querySelector('.topbar').insertAdjacentHTML('beforeend', `
      <button class="nav-pill settings-pill" id="themeSettingsButton" type="button" aria-label="Theme settings">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0-5.25 1.08 1.95 2.2.36 1.53-1.62 2.12 2.12-1.62 1.53.36 2.2L19.62 10.6v3l-1.95 1.08-.36 2.2 1.62 1.53-2.12 2.12-1.53-1.62-2.2.36L12 21.22l-1.08-1.95-2.2-.36-1.53 1.62-2.12-2.12 1.62-1.53-.36-2.2L4.38 13.6v-3l1.95-1.08.36-2.2-1.62-1.53 2.12-2.12 1.53 1.62 2.2-.36L12 3Z"/></svg>
        <span>Settings</span>
      </button>
    `);
    bindNav();
    return;
  }

  const staff = ['staff', 'admin'].includes(currentUser.role);
  document.querySelector('.topbar').insertAdjacentHTML('beforeend', `
    <nav class="main-nav" aria-label="Main navigation">
      ${currentUser.role === 'resident' ? '<button class="nav-pill" data-view="catalog">Catalog</button>' : ''}
      ${currentUser.role === 'admin'
        ? '<button class="nav-pill" data-view="manageStaff">Manage staff</button>'
        : staff
          ? '<button class="nav-pill" data-view="staff">Staff dashboard</button>'
          : '<button class="nav-pill" data-view="borrowings">My borrowings</button>'}
      ${currentUser.role === 'admin' ? '<button class="nav-pill" data-view="admin">Admin</button>' : ''}
      <button class="nav-pill settings-pill" id="themeSettingsButton" data-view="account" type="button" aria-label="Theme settings">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0-5.25 1.08 1.95 2.2.36 1.53-1.62 2.12 2.12-1.62 1.53.36 2.2L19.62 10.6v3l-1.95 1.08-.36 2.2 1.62 1.53-2.12 2.12-1.53-1.62-2.2.36L12 21.22l-1.08-1.95-2.2-.36-1.53 1.62-2.12-2.12 1.62-1.53-.36-2.2L4.38 13.6v-3l1.95-1.08.36-2.2-1.62-1.53 2.12-2.12 1.53 1.62 2.2-.36L12 3Z"/></svg>
        <span>Settings</span>
      </button>
    </nav>
  `);

  bindNav();
}

function bindNav() {
  document.querySelectorAll('[data-view]').forEach(button => {
    button.onclick = () => {
      const views = {
        catalog: renderCatalog,
        borrowings: renderBorrowings,
        staff: renderStaff,
        admin: renderAdmin,
        manageStaff: renderManageStaff,
        account: renderAccount
      };
      views[button.dataset.view]?.();
    };
  });

  document.querySelector('.brand').onclick = () => {
    if (!currentUser) return renderLogin();
    if (currentUser.role === 'admin') return renderAdmin();
    currentUser.role === 'staff' ? renderStaff() : renderCatalog();
  };
  document.querySelector('#themeSettingsButton').onclick = () => {
    if (currentUser) return renderAccount();
    openThemeSettings();
  };
}

function renderLogin(register = false) {
  rebuildNav();
  setActive('');
  app.innerHTML = register ? `
    <section class="login-page">
      <form class="login-card register-card" id="registerForm">
        <h1>Register</h1>
        <p class="tagline">Create your resident account.</p>
        <div class="field"><label>Full name</label><input name="name" required></div>
        <div class="field"><label>Mobile number</label><input name="mobile" type="tel" inputmode="tel" autocomplete="tel" pattern="09[0-9]{9}" placeholder="09XXXXXXXXX" required></div>
        <div class="field"><label>Email</label><input name="email" type="email" inputmode="email" autocomplete="email" required></div>
        <div class="field"><label>Household address / purok</label><input name="address" autocomplete="street-address" required></div>
        <div class="field"><label>Password</label><input name="password" type="password" minlength="8" autocomplete="new-password" required></div>
        <p class="form-error" id="formError"></p>
        <button class="primary" type="submit">Create account</button>
        <div class="login-links"><a href="#" id="backLogin">Back to login</a></div>
      </form>
    </section>
  ` : `
    <section class="login-page">
      <form class="login-card" id="loginForm">
        <h1>Tulong Tools</h1>
        <p class="tagline">Borrow tools and equipment from your barangay.</p>
        <div class="field"><label>Email or mobile</label><input name="identity" autocomplete="username" required></div>
        <div class="field"><label>Password</label><input name="password" type="password" autocomplete="current-password" required></div>
        <p class="form-error" id="formError"></p>
        <button class="primary" type="submit">Log in</button>
        <div class="login-links"><a href="#" id="showRegister">Register</a><a href="#" id="forgotPassword">Forgot password?</a></div>
      </form>
    </section>
  `;

  if (register) {
    document.querySelector('#backLogin').onclick = event => {
      event.preventDefault();
      renderLogin();
    };
    document.querySelector('#registerForm').onsubmit = async event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const mobile = data.get('mobile').trim();
      const email = data.get('email').trim().toLowerCase();

      if (!/^09\d{9}$/.test(mobile)) {
        document.querySelector('#formError').textContent = 'Mobile number must have 11 digits and start with 09.';
        return;
      }
      if (contactAlreadyRegistered(email, mobile)) {
        document.querySelector('#formError').textContent = 'Email or mobile number is already registered.';
        return;
      }

      db.users.push({
        id: Date.now(),
        name: data.get('name').trim(),
        mobile,
        email,
        address: data.get('address').trim(),
        password: data.get('password'),
        role: 'resident',
        verified: false
      });
      saveDb();
      addAudit('Registered resident account', 'users', db.users.at(-1).id);
      await showNotice('Account created. A staff member must verify it before borrowing.');
      renderLogin();
    };
  } else {
    document.querySelector('#showRegister').onclick = event => {
      event.preventDefault();
      renderLogin(true);
    };
    document.querySelector('#forgotPassword').onclick = async event => {
      event.preventDefault();
      await showNotice('Ask barangay staff to reset your password.');
    };
    document.querySelector('#loginForm').onsubmit = event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const identity = data.get('identity').trim().toLowerCase();
      const password = data.get('password');
      const user = db.users.find(entry =>
        (entry.email.toLowerCase() === identity || entry.mobile === identity) &&
        entry.password === password
      );
      if (!user) {
        document.querySelector('#formError').textContent = 'Email/mobile or password is incorrect.';
        return;
      }

      currentUser = { ...user };
      sessionStorage.setItem('tulongtools-user', JSON.stringify(currentUser));
      rebuildNav();
      ['staff', 'admin'].includes(user.role) ? renderStaff() : renderCatalog();
    };
  }
}

function catalogCards(category = 'All', search = '') {
  return db.items
    .filter(item => item.active)
    .filter(item => category === 'All' || item.category === category)
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .map(item => `
      <article class="item-card" data-item="${item.id}" tabindex="0">
        <div class="item-photo">${itemPhotoContent(item)}</div>
        <div class="item-card-body">
          <h3>${escapeHtml(item.name)}</h3>
          <p>${availableQty(item, '2026-11-24', '2026-11-26')} available · ${peso(item.deposit)} deposit</p>
        </div>
      </article>
    `).join('');
}

function renderCatalog() {
  if (!currentUser) return renderLogin();
  setActive('catalog');
  app.innerHTML = `
    <section class="catalog-page">
      <div class="catalog-heading">
        <h1>Tool catalog</h1>
        <input id="catalogSearch" class="search-box" placeholder="Search equipment">
      </div>
      ${borrowingRulesNotice()}
      <div class="category-pills">
        <button class="filter-pill active" data-category="All">All</button>
        <button class="filter-pill" data-category="Hand Tools">Hand tools</button>
        <button class="filter-pill" data-category="Event Equipment">Event equipment</button>
      </div>
      <div class="catalog-grid" id="catalogGrid">${catalogCards()}</div>
    </section>
  `;

  const refreshCards = () => {
    const category = document.querySelector('.filter-pill.active')?.dataset.category || 'All';
    document.querySelector('#catalogGrid').innerHTML = catalogCards(category, document.querySelector('#catalogSearch').value);
    bindCatalogCards();
  };
  document.querySelector('#catalogSearch').oninput = refreshCards;
  document.querySelectorAll('.filter-pill').forEach(button => button.onclick = () => {
    document.querySelectorAll('.filter-pill').forEach(pill => pill.classList.remove('active'));
    button.classList.add('active');
    refreshCards();
  });
  bindCatalogCards();
}

function bindCatalogCards() {
  document.querySelectorAll('.item-card').forEach(card => {
    const open = () => renderItem(Number(card.dataset.item));
    card.onclick = open;
    card.onkeydown = event => {
      if (event.key === 'Enter') open();
    };
  });
}

function renderItem(id) {
  if (!currentUser) return renderLogin();
  setActive('catalog');
  const item = itemById(id);
  let start = '2026-11-24';
  let end = '2026-11-26';

  app.innerHTML = `
    <section class="item-page">
      <div class="item-left">
        <div class="item-photo-large">${itemPhotoContent(item)}</div>
        <h1>${escapeHtml(item.name)}</h1>
        <p class="item-description">${escapeHtml(item.description)}</p>
        <div class="badges">
          <span class="badge">Deposit ${peso(item.deposit)}</span>
          <span class="badge">Max ${item.maxDays} days</span>
          <span class="badge" id="availableBadge">${availableQty(item, start, end)} available</span>
        </div>
      </div>
      <aside class="booking-card">
        <h2>Pick your dates</h2>
        ${borrowingRulesNotice()}
        <div class="calendar-head"><span class="calendar-month">November 2026</span><span>Held dates are unavailable</span></div>
        <div class="calendar-grid">
          ${['Su','Mo','Tu','We','Th','Fr','Sa'].map(day => `<span class="weekday">${day}</span>`).join('')}
          ${Array.from({ length: 30 }, (_, index) => {
            const day = index + 1;
            const date = `2026-11-${String(day).padStart(2, '0')}`;
            return `<button type="button" class="day ${date >= start && date <= end ? 'selected' : ''}" data-date="${date}">${day}</button>`;
          }).join('')}
        </div>
        <div class="booking-fields">
          <div class="field"><label>Quantity</label><input id="reserveQty" type="number" min="1" max="${item.qty}" value="1"></div>
          <div class="field"><label>Pickup and due</label><input id="reserveDates" value="${shortDate(start)} to ${shortDate(end)}" readonly></div>
        </div>
        <p class="form-error" id="reserveError"></p>
        <button class="booking-submit" id="submitReservation">Submit reservation</button>
      </aside>
    </section>
  `;

  let firstDate = null;
  document.querySelectorAll('.day').forEach(day => day.onclick = () => {
    const date = day.dataset.date;
    if (!firstDate) {
      firstDate = date;
      start = date;
      end = date;
    } else {
      if (date < firstDate) {
        start = date;
        end = firstDate;
      } else {
        start = firstDate;
        end = date;
      }
      const days = Math.round((new Date(`${end}T12:00:00`) - new Date(`${start}T12:00:00`)) / 86400000) + 1;
      if (days > item.maxDays) {
        firstDate = null;
        start = '2026-11-24';
        end = '2026-11-26';
        document.querySelector('#reserveError').textContent = `Maximum loan period is ${item.maxDays} days.`;
      } else {
        firstDate = null;
      }
    }
    document.querySelectorAll('.day').forEach(button => button.classList.toggle('selected', button.dataset.date >= start && button.dataset.date <= end));
    document.querySelector('#reserveDates').value = `${shortDate(start)} to ${shortDate(end)}`;
    document.querySelector('#availableBadge').textContent = `${availableQty(item, start, end)} available`;
  });

  document.querySelector('#submitReservation').onclick = async () => {
    if (!currentUser.verified) {
      document.querySelector('#reserveError').textContent = 'Your resident account is pending verification.';
      return;
    }
    const qty = Number(document.querySelector('#reserveQty').value);
    if (!Number.isInteger(qty) || qty < 1) {
      document.querySelector('#reserveError').textContent = 'Enter a valid quantity.';
      return;
    }
    const available = availableQty(item, start, end);
    if (qty > available) {
      document.querySelector('#reserveError').textContent = `Only ${available} unit(s) available for these dates.`;
      return;
    }
    db.reservations.push({
      id: Date.now(),
      userId: currentUser.id,
      itemId: item.id,
      qty,
      start,
      end,
      status: 'pending',
      reason: ''
    });
    saveDb();
    addAudit('Submitted reservation', 'reservations', db.reservations.at(-1).id);
    await showNotice('Reservation submitted and sent to staff.');
    renderBorrowings();
  };
}

function dashboardStatsMarkup(stats) {
  const icons = {
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    box: '<path d="m12 3 9 4.5v9L12 21l-9-4.5v-9L12 3Z"/><path d="m3.3 7.5 8.7 4.4 8.7-4.4M12 21v-9.1"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    list: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5h6M9 10h6M9 14h6M9 18h3"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>'
  };
  return `
    <div class="dashboard-stats-grid">
      ${stats.map(({ title, value, icon }) => `
        <article class="dashboard-stat-card">
          <div class="dashboard-stat-copy">
            <span class="dashboard-stat-title">${escapeHtml(title)}</span>
            <strong class="dashboard-stat-value">${escapeHtml(value)}</strong>
          </div>
          <span class="dashboard-stat-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[icon]}</svg>
          </span>
        </article>
      `).join('')}
    </div>
  `;
}

function statusPill(status) {
  const labels = { pending: 'Pending', approved: 'Approved', declined: 'Declined', cancelled: 'Cancelled', released: 'Released', completed: 'Returned' };
  return `<span class="status-pill status-${status}">${labels[status] || status}</span>`;
}

function renderBorrowings() {
  if (!currentUser) return renderLogin();
  setActive('borrowings');
  const reservations = db.reservations.filter(reservation => reservation.userId === currentUser.id);
  const activeCount = reservations.filter(reservation => reservation.status === 'released').length;
  const pendingCount = reservations.filter(reservation => reservation.status === 'pending').length;
  const readyCount = reservations.filter(reservation => reservation.status === 'approved').length;

  app.innerHTML = `
    <section class="catalog-page">
      <h1>My borrowings</h1>
      <p class="dashboard-subtitle">Track your requested, pending, and borrowed community equipment.</p>
      ${dashboardStatsMarkup([
        { title: 'Active borrowings', value: activeCount, icon: 'box' },
        { title: 'Pending requests', value: pendingCount, icon: 'clock' },
        { title: 'Ready for pickup', value: readyCount, icon: 'check' }
      ])}
      ${borrowingRulesNotice()}
      <div class="borrowings-list">
        ${reservations.length ? reservations.map(reservation => {
          const item = itemById(reservation.itemId);
          return `
            <article class="borrowing-card">
              <div><h3>${escapeHtml(item.name)} x${reservation.qty}</h3><p>${shortDate(reservation.start)} to ${shortDate(reservation.end)}</p>
              ${reservation.reason ? `<p class="danger-text">Reason: ${escapeHtml(reservation.reason)}</p>` : ''}</div>
              <div>${statusPill(reservation.status)}
              ${['pending', 'approved'].includes(reservation.status) ? `<button class="text-button cancel-reservation" data-id="${reservation.id}">Cancel</button>` : ''}</div>
            </article>`;
        }).join('') : '<article class="empty-card">No reservations yet.</article>'}
      </div>
    </section>
  `;

  document.querySelectorAll('.cancel-reservation').forEach(button => button.onclick = async () => {
    if (!await showConfirmation('Cancel this reservation?')) return;
    const reservation = db.reservations.find(entry => entry.id === Number(button.dataset.id));
    reservation.status = 'cancelled';
    saveDb();
    addAudit('Cancelled reservation', 'reservations', reservation.id);
    renderBorrowings();
  });
}

function renderStaff() {
  if (!['staff', 'admin'].includes(currentUser?.role)) return renderLogin();
  setActive('staff');

  const pending = db.reservations.filter(reservation => reservation.status === 'pending');
  const approved = db.reservations.filter(reservation => reservation.status === 'approved');
  const released = db.transactions.filter(transaction => transaction.status === 'out');
  const repairs = db.maintenance.filter(record => !record.completedOn);

  app.innerHTML = `
    <section class="staff-page">
      <div class="staff-heading"><h1>Staff dashboard</h1></div>
      <p class="dashboard-subtitle">Community equipment and reservations overview.</p>
      ${dashboardStatsMarkup([
        { title: 'Pending', value: pending.length, icon: 'clock' },
        { title: 'Ready for release', value: approved.length, icon: 'check' },
        { title: 'In maintenance', value: repairs.length, icon: 'activity' },
        { title: 'Items out', value: released.length, icon: 'box' }
      ])}
      <div class="staff-grid">
        <article class="staff-card"><h2>Pending reservations</h2><hr>
          ${pending.length ? pending.map(reservation => {
            const item = itemById(reservation.itemId);
            const user = userById(reservation.userId);
            return `<div class="task-row"><div><span class="task-name">${escapeHtml(item.name)} x${reservation.qty}</span><span class="task-meta">${escapeHtml(user.name)} · ${shortDate(reservation.start)} to ${shortDate(reservation.end)}</span></div><div><button class="task-button approve-reservation" data-id="${reservation.id}">Approve</button><button class="task-button decline-reservation" data-id="${reservation.id}">Decline</button></div></div>`;
          }).join('') : '<p class="empty-text">No pending reservations.</p>'}
        </article>
        <article class="staff-card"><h2>Ready for release</h2><hr>
          ${approved.length ? approved.map(reservation => {
            const item = itemById(reservation.itemId);
            const user = userById(reservation.userId);
            return `<div class="task-row"><div><span class="task-name">${escapeHtml(item.name)} x${reservation.qty}</span><span class="task-meta">${escapeHtml(user.name)} · Due ${shortDate(reservation.end)}</span></div><button class="task-button release-reservation" data-id="${reservation.id}">Release</button></div>`;
          }).join('') : '<p class="empty-text">No reservations ready.</p>'}
        </article>
        <article class="staff-card"><h2>Maintenance</h2><hr>
          ${repairs.length ? repairs.map(record => `
            <div class="task-row"><div><span class="task-name">${escapeHtml(itemById(record.itemId).name)}</span><span class="task-meta">${escapeHtml(record.issue)}</span></div><button class="task-button complete-maintenance" data-id="${record.id}">Complete</button></div>
          `).join('') : '<p class="empty-text">No open repairs.</p>'}
        </article>
      </div>
      <article class="overdue-card"><h2>Released items</h2>
        ${released.length ? released.map(transaction => {
          const reservation = db.reservations.find(entry => entry.id === transaction.reservationId);
          const item = itemById(reservation.itemId);
          const user = userById(reservation.userId);
          return `<div class="overdue-row"><strong>${escapeHtml(item.name)} x${reservation.qty}</strong><span class="task-meta" style="margin:0 auto 0 8px">· ${escapeHtml(user.name)}, ${escapeHtml(user.address)}</span><button class="task-button process-return" data-id="${transaction.id}">Return</button></div>`;
        }).join('') : '<p class="empty-text">No items currently out.</p>'}
      </article>
    </section>
  `;

  document.querySelectorAll('.approve-reservation').forEach(button => button.onclick = () => {
    const reservation = db.reservations.find(entry => entry.id === Number(button.dataset.id));
    reservation.status = 'approved';
    saveDb();
    addAudit('Approved reservation', 'reservations', reservation.id);
    renderStaff();
  });
  document.querySelectorAll('.decline-reservation').forEach(button => button.onclick = async () => {
    const reason = await showInputDialog('Enter a reason for declining this reservation.', {
      label: 'Reason',
      value: 'Outside availability'
    }, 'Decline reservation');
    if (reason === null) return;
    const reservation = db.reservations.find(entry => entry.id === Number(button.dataset.id));
    reservation.status = 'declined';
    reservation.reason = reason;
    saveDb();
    addAudit('Declined reservation', 'reservations', reservation.id);
    renderStaff();
  });
  document.querySelectorAll('.release-reservation').forEach(button => button.onclick = () => releaseItem(Number(button.dataset.id)));
  document.querySelectorAll('.process-return').forEach(button => button.onclick = () => returnItem(Number(button.dataset.id)));
  document.querySelectorAll('.complete-maintenance').forEach(button => button.onclick = () => {
    const record = db.maintenance.find(entry => entry.id === Number(button.dataset.id));
    record.completedOn = new Date().toISOString().slice(0, 10);
    saveDb();
    addAudit('Completed maintenance', 'maintenance', record.id);
    renderStaff();
  });
}

async function releaseItem(reservationId) {
  const reservation = db.reservations.find(entry => entry.id === reservationId);
  const item = itemById(reservation.itemId);
  const deposit = await showInputDialog(`Record the cash deposit for ${item.name}.`, {
    label: 'Cash deposit (PHP)',
    type: 'number',
    value: item.deposit,
    min: 0,
    step: '0.01',
    required: true
  }, 'Release item');
  if (deposit === null) return;
  const paid = Number(deposit);
  if (!Number.isFinite(paid) || paid < 0) return showNotice('Deposit cannot be negative.');

  db.transactions.push({
    id: Date.now(),
    reservationId,
    releasedBy: currentUser.id,
    releasedAt: new Date().toISOString(),
    returnedAt: null,
    depositPaid: paid,
    lateFee: 0,
    damageCharge: 0,
    status: 'out'
  });
  reservation.status = 'released';
  saveDb();
  addAudit('Released item', 'transactions', db.transactions.at(-1).id);
  await showNotice('Release recorded.');
  renderStaff();
}

async function returnItem(transactionId) {
  const transaction = db.transactions.find(entry => entry.id === transactionId);
  const reservation = db.reservations.find(entry => entry.id === transaction.reservationId);
  const item = itemById(reservation.itemId);
  const condition = await showInputDialog('Select the condition of the returned item.', {
    label: 'Return condition',
    type: 'select',
    value: 'good',
    required: true,
    options: [
      { value: 'good', label: 'Good' },
      { value: 'fair', label: 'Fair' },
      { value: 'damaged', label: 'Damaged' }
    ]
  }, 'Process return');
  if (condition === null) return;
  const rating = condition.trim().toLowerCase();
  if (!['good', 'fair', 'damaged'].includes(rating)) return showNotice('Choose good, fair, or damaged.');

  const today = new Date().toISOString().slice(0, 10);
  const daysLate = Math.max(0, Math.ceil((new Date(`${today}T12:00:00`) - new Date(`${reservation.end}T12:00:00`)) / 86400000));
  const lateFee = daysLate * db.lateFeePerDay;
  let damageCharge = 0;
  let damageIssue = '';

  if (rating === 'damaged') {
    const charge = await showInputDialog('Enter the assessed damage charge.', {
      label: 'Damage charge (PHP)',
      type: 'number',
      value: 500,
      min: 0,
      step: '0.01'
    }, 'Assess damage');
    damageCharge = Number(charge || 0);
    if (!Number.isFinite(damageCharge) || damageCharge < 0) {
      await showNotice('Damage charge cannot be negative.');
      return;
    }
    const issue = await showInputDialog('Describe the damage noted on return.', {
      label: 'Damage description',
      value: 'Damage noted at return'
    }, 'Describe damage');
    damageIssue = issue || 'Damage noted at return';
  }

  if (rating === 'damaged') {
    db.maintenance.push({
      id: Date.now(),
      itemId: item.id,
      qtyAffected: reservation.qty,
      issue: damageIssue,
      cost: damageCharge,
      startedOn: today,
      completedOn: null
    });
  }

  transaction.returnedAt = new Date().toISOString();
  transaction.lateFee = lateFee;
  transaction.damageCharge = damageCharge;
  transaction.status = 'returned';
  reservation.status = 'completed';
  saveDb();
  addAudit('Processed return', 'transactions', transaction.id);
  await showNotice(`Return recorded. Late fee: ${peso(lateFee)}. Damage charge: ${peso(damageCharge)}.`);
  renderStaff();
}

function showItemModal(onAdded) {
  document.querySelector('.modal-backdrop')?.remove();
  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-backdrop">
      <form class="modal-card" id="itemForm">
        <h2>Add item</h2>
        <div class="field"><label>Name</label><input name="name" required></div>
        <div class="field"><label>Category</label><select name="category"><option>Hand Tools</option><option>Event Equipment</option></select></div>
        <div class="booking-fields">
          <div class="field"><label>Quantity</label><input name="qty" type="number" min="1" value="1" required></div>
          <div class="field"><label>Deposit</label><input name="deposit" type="number" min="0" value="0" required></div>
        </div>
        <div class="field"><label>Description</label><textarea name="description"></textarea></div>
        <div class="modal-actions"><button type="button" class="text-button" id="closeModal">Cancel</button><button type="submit" class="task-button">Add item</button></div>
      </form>
    </div>
  `);
  document.querySelector('#closeModal').onclick = () => document.querySelector('.modal-backdrop').remove();
  document.querySelector('#itemForm').onsubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    db.items.push({
      id: Date.now(),
      name: data.get('name').trim(),
      category: data.get('category'),
      description: data.get('description').trim(),
      qty: Number(data.get('qty')),
      deposit: Number(data.get('deposit')),
      maxDays: 3,
      active: true
    });
    saveDb();
    addAudit('Added item', 'items', db.items.at(-1).id);
    document.querySelector('.modal-backdrop').remove();
    onAdded();
  };
}

function renderAdmin(selectedTab = 'manageItems') {
  if (currentUser?.role !== 'admin') return renderLogin();
  setActive('admin');
  const pendingReservations = db.reservations.filter(reservation => reservation.status === 'pending').length;
  const activeLoans = db.transactions.filter(transaction => transaction.status === 'out').length;
  const openRepairs = db.maintenance.filter(record => !record.completedOn).length;
  const staffCount = db.users.filter(user => user.role === 'staff').length;

  app.innerHTML = `
    <section class="staff-page">
      <div class="staff-heading"><h1>Administration</h1></div>
      <p class="dashboard-subtitle">System-wide overview, staff monitoring, and equipment reservations.</p>
      ${dashboardStatsMarkup([
        { title: 'Total reservations', value: db.reservations.length, icon: 'list' },
        { title: 'Pending', value: pendingReservations, icon: 'clock' },
        { title: 'Active loans', value: activeLoans, icon: 'box' },
        { title: 'In repair', value: openRepairs, icon: 'activity' },
        { title: 'Staff accounts', value: staffCount, icon: 'users' }
      ])}
      <div class="admin-grid">
        <article class="staff-card"><h2>Users and verification</h2><hr>
          ${db.users.map(user => `
            <div class="task-row"><div><span class="task-name">${escapeHtml(user.name)}</span><span class="task-meta">${escapeHtml(user.role)} · ${escapeHtml(user.email)}</span></div>
            <div class="admin-user-actions">
              ${user.role === 'resident' ? `<button class="task-button verify-user ${user.verified ? 'verified' : ''}" data-id="${user.id}">${user.verified ? 'Verified' : 'Verify'}</button>` : ''}
              ${user.role === 'resident' && ![1, 2, 3].includes(user.id) ? `<button class="task-button delete-user" data-id="${user.id}" title="Delete ${escapeHtml(user.name)}">Delete</button>` : ''}
            </div></div>
          `).join('')}
        </article>
        <article class="staff-card"><h2>Borrowing rules</h2><hr>
          <div class="field"><label>Late fee per day</label><input id="lateFee" type="number" min="0" value="${db.lateFeePerDay}"></div>
          <button class="task-button" id="saveRules">Save rules</button>
        </article>
        <article class="staff-card"><h2>Reports</h2><hr>
          <p>Usage: <strong>${db.transactions.length}</strong> releases</p>
          <p>Released: <strong>${db.transactions.filter(transaction => transaction.status === 'out').length}</strong></p>
          <p>Maintenance cost: <strong>${peso(db.maintenance.reduce((sum, record) => sum + Number(record.cost || 0), 0))}</strong></p>
          <button class="task-button" id="printReport">Print report</button>
        </article>
      </div>
      <div class="admin-content-tabs" role="tablist" aria-label="Admin tools">
        <button class="admin-content-tab ${selectedTab === 'manageItems' ? 'active' : ''}" id="manageItemsTab" type="button" role="tab" aria-selected="${selectedTab === 'manageItems'}" aria-controls="manageItemsPanel">Manage items</button>
        <button class="admin-content-tab ${selectedTab === 'auditLog' ? 'active' : ''}" id="auditLogTab" type="button" role="tab" aria-selected="${selectedTab === 'auditLog'}" aria-controls="auditLogPanel">Audit log</button>
      </div>
      <section class="admin-tab-panel" id="manageItemsPanel" role="tabpanel" aria-labelledby="manageItemsTab" ${selectedTab !== 'manageItems' ? 'hidden' : ''}>
        <article class="overdue-card item-photo-manager">
          <div class="admin-item-heading">
            <h2>Manage items</h2>
            <button class="task-button" id="adminAddItem" type="button">Add item</button>
          </div>
          <p class="empty-text">Edit stock quantity and deposit, or choose an item photo. Changes appear in the catalog.</p>
          <div class="item-photo-list">
            ${db.items.map(item => `
              <div class="item-photo-row">
                <div class="admin-item-photo">${itemPhotoContent(item)}</div>
                <div class="item-photo-controls">
                  <strong>${escapeHtml(item.name)}</strong>
                  <form class="inventory-edit-form" data-id="${item.id}">
                    <label>Total quantity
                      <input name="qty" type="number" min="${minimumItemQty(item.id)}" step="1" value="${item.qty}" required>
                    </label>
                    <label>Deposit (PHP)
                      <input name="deposit" type="number" min="0" step="1" value="${item.deposit}" required>
                    </label>
                    <button class="task-button" type="submit">Save changes</button>
                    <p class="inventory-edit-status" aria-live="polite"></p>
                  </form>
                  <input class="item-photo-upload" type="file" accept="image/*" data-id="${item.id}" aria-label="Choose a photo for ${escapeHtml(item.name)}">
                  <p class="photo-upload-status" data-photo-status="${item.id}" aria-live="polite"></p>
                </div>
              </div>
            `).join('')}
          </div>
        </article>
      </section>
      <section class="admin-tab-panel" id="auditLogPanel" role="tabpanel" aria-labelledby="auditLogTab" ${selectedTab !== 'auditLog' ? 'hidden' : ''}>
        <article class="overdue-card"><h2>Audit log</h2>
          ${db.audit.length ? db.audit.slice(0, 8).map(entry => `
            <div class="overdue-row audit-log-row">
              <strong>${escapeHtml(entry.action)}</strong>
              <span class="task-meta">${escapeHtml(userById(entry.userId)?.name || 'System')}</span>
              <span class="days-pill">${new Date(entry.loggedAt).toLocaleString()}</span>
              <button class="task-button delete-audit-entry" type="button" data-id="${entry.id}" aria-label="Remove audit entry: ${escapeHtml(entry.action)}">Remove</button>
            </div>
          `).join('') : '<p class="empty-text">No actions recorded.</p>'}
        </article>
      </section>
    </section>
  `;

  document.querySelectorAll('.admin-content-tab').forEach(tab => tab.onclick = () => {
    document.querySelectorAll('.admin-content-tab').forEach(otherTab => {
      const active = otherTab === tab;
      otherTab.classList.toggle('active', active);
      otherTab.setAttribute('aria-selected', String(active));
      document.getElementById(otherTab.getAttribute('aria-controls')).hidden = !active;
    });
  });

  document.querySelectorAll('.delete-audit-entry').forEach(button => button.onclick = async () => {
    const entryId = Number(button.dataset.id);
    const entry = db.audit.find(record => record.id === entryId);
    if (!entry || !await showConfirmation(`Remove "${entry.action}" from the audit log? This cannot be undone.`, 'Remove audit entry')) return;

    const previousAudit = db.audit;
    db.audit = db.audit.filter(record => record !== entry);
    try {
      saveDb();
    } catch (error) {
      db.audit = previousAudit;
      console.error('Could not remove the audit log entry.', error);
      await showNotice('The audit entry could not be removed. Check that browser storage is available.');
      return;
    }
    renderAdmin('auditLog');
  });

  document.querySelector('#adminAddItem').onclick = () => showItemModal(() => renderAdmin());

  document.querySelectorAll('.inventory-edit-form').forEach(form => form.onsubmit = event => {
    event.preventDefault();
    const item = itemById(form.dataset.id);
    if (!item) return;

    const data = new FormData(form);
    const quantity = Number(data.get('qty'));
    const deposit = Number(data.get('deposit'));
    const status = form.querySelector('.inventory-edit-status');
    const minimumQty = minimumItemQty(item.id);

    if (!Number.isInteger(quantity) || quantity < minimumQty) {
      status.textContent = `Quantity must be a whole number of at least ${minimumQty}; current bookings or maintenance need that many.`;
      return;
    }
    if (!Number.isFinite(deposit) || deposit < 0) {
      status.textContent = 'Enter a valid deposit amount of zero or more.';
      return;
    }

    const previousQty = item.qty;
    const previousDeposit = item.deposit;
    const previousAuditLength = db.audit.length;
    item.qty = quantity;
    item.deposit = deposit;
    try {
      addAudit('Updated item quantity and deposit', 'items', item.id);
    } catch {
      item.qty = previousQty;
      item.deposit = previousDeposit;
      db.audit.length = previousAuditLength;
      status.textContent = 'Changes could not be saved. Check that browser storage is available.';
      return;
    }
    renderAdmin();
  });

  document.querySelectorAll('.item-photo-upload').forEach(input => input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;

    const status = document.querySelector(`[data-photo-status="${input.dataset.id}"]`);
    if (!file.type.startsWith('image/')) {
      status.textContent = 'Choose an image file.';
      input.value = '';
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      status.textContent = 'Image must be 8 MB or smaller.';
      input.value = '';
      return;
    }

    status.textContent = 'Processing image...';
    let imageData;
    try {
      imageData = await resizeItemPhoto(file);
    } catch (error) {
      status.textContent = error.message;
      input.value = '';
      return;
    }

    const item = itemById(input.dataset.id);
    if (!item) {
      status.textContent = 'This item could not be found.';
      input.value = '';
      return;
    }

    const previousImage = item.image;
    const previousAuditLength = db.audit.length;
    item.image = imageData;
    try {
      addAudit('Updated item photo', 'items', item.id);
    } catch {
      item.image = previousImage;
      db.audit.length = previousAuditLength;
      status.textContent = 'Photo could not be saved. Browser storage may be full; try a smaller image.';
      input.value = '';
      return;
    }
    renderAdmin();
  });

  document.querySelectorAll('.verify-user').forEach(button => button.onclick = () => {
    const user = db.users.find(entry => entry.id === Number(button.dataset.id));
    user.verified = !user.verified;
    saveDb();
    addAudit(user.verified ? 'Verified resident' : 'Unverified resident', 'users', user.id);
    renderAdmin();
  });
  document.querySelectorAll('.delete-user').forEach(button => button.onclick = async () => {
    const userId = Number(button.dataset.id);
    const user = db.users.find(entry => entry.id === userId);
    if (!user || user.role !== 'resident' || [1, 2, 3].includes(user.id)) return;
    if (!await showConfirmation(`Delete ${user.name}? This will also remove their reservations and transactions.`)) return;

    const reservationIds = db.reservations
      .filter(reservation => reservation.userId === userId)
      .map(reservation => reservation.id);

    db.users = db.users.filter(entry => entry.id !== userId);
    db.reservations = db.reservations.filter(reservation => reservation.userId !== userId);
    db.transactions = db.transactions.filter(transaction => !reservationIds.includes(transaction.reservationId));
    addAudit('Deleted user', 'users', userId);
    renderAdmin();
  });
  document.querySelector('#saveRules').onclick = async () => {
    db.lateFeePerDay = Number(document.querySelector('#lateFee').value || 0);
    saveDb();
    addAudit('Updated borrowing rules', 'rules', 0);
    await showNotice('Borrowing rules saved.');
  };
  document.querySelector('#printReport').onclick = () => window.print();
}

function renderManageStaff() {
  if (currentUser?.role !== 'admin') return renderLogin();
  setActive('manageStaff');

  app.innerHTML = `
    <section class="staff-page">
      <div class="staff-heading"><h1>Manage staff</h1></div>
      <p class="empty-text">Add staff accounts, update their details, or remove access. Historical actions and transactions are kept.</p>
      <article class="overdue-card">
        <h2>Add staff account</h2>
        <form id="addStaffForm" class="staff-add-form">
          <div class="staff-add-fields">
            <label>Full name<input name="name" required></label>
            <label>Email<input name="email" type="email" required></label>
            <label>Mobile number<input name="mobile" pattern="09[0-9]{9}" placeholder="09XXXXXXXXX" required></label>
            <label>Address<input name="address" value="Barangay Hall" required></label>
            <label>Password<input name="password" type="password" minlength="4" autocomplete="new-password" required></label>
          </div>
          <p class="staff-form-status" id="addStaffStatus" aria-live="polite"></p>
          <button class="task-button" type="submit">Add staff</button>
        </form>
      </article>
      <div class="staff-management-list">
        ${db.users.filter(user => user.role === 'staff').map(user => `
          <article class="staff-management-card">
            <h2>${escapeHtml(user.name)}</h2>
            <form class="staff-edit-form" data-id="${user.id}">
              <div class="staff-edit-fields">
                <label>Full name<input name="name" value="${escapeHtml(user.name)}" required></label>
                <label>Email<input name="email" type="email" value="${escapeHtml(user.email)}" required></label>
                <label>Mobile number<input name="mobile" value="${escapeHtml(user.mobile)}" pattern="09[0-9]{9}" required></label>
                <label>Address<input name="address" value="${escapeHtml(user.address)}" required></label>
                <label>New password<input name="password" type="password" minlength="4" autocomplete="new-password" placeholder="Leave blank to keep current"></label>
              </div>
              <p class="staff-form-status" aria-live="polite"></p>
              <div class="staff-form-actions">
                <button class="task-button" type="submit">Save changes</button>
                <button class="task-button delete-staff" type="button" data-id="${user.id}">Delete staff</button>
              </div>
            </form>
          </article>
        `).join('') || '<article class="empty-card">No staff accounts yet.</article>'}
      </div>
    </section>
  `;

  document.querySelector('#addStaffForm').onsubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name').trim();
    const email = data.get('email').trim().toLowerCase();
    const mobile = data.get('mobile').trim();
    const address = data.get('address').trim();
    const password = data.get('password');
    const status = document.querySelector('#addStaffStatus');

    if (!/^09\d{9}$/.test(mobile)) {
      status.textContent = 'Mobile number must have 11 digits and start with 09.';
      return;
    }
    if (contactAlreadyRegistered(email, mobile)) {
      status.textContent = 'That email or mobile number is already in use.';
      return;
    }

    const staff = {
      id: Date.now(),
      name,
      mobile,
      email,
      address,
      password,
      role: 'staff',
      verified: true
    };
    const previousAuditLength = db.audit.length;
    db.users.push(staff);
    try {
      addAudit('Added staff account', 'users', staff.id);
    } catch {
      db.users = db.users.filter(user => user.id !== staff.id);
      db.audit.length = previousAuditLength;
      status.textContent = 'Staff account could not be saved. Check that browser storage is available.';
      return;
    }
    renderManageStaff();
  };

  document.querySelectorAll('.staff-edit-form').forEach(form => form.onsubmit = event => {
    event.preventDefault();
    const user = db.users.find(entry => entry.id === Number(form.dataset.id) && entry.role === 'staff');
    if (!user) return;

    const data = new FormData(form);
    const name = data.get('name').trim();
    const email = data.get('email').trim().toLowerCase();
    const mobile = data.get('mobile').trim();
    const address = data.get('address').trim();
    const password = data.get('password').trim();
    const status = form.querySelector('.staff-form-status');

    if (!/^09\d{9}$/.test(mobile)) {
      status.textContent = 'Mobile number must have 11 digits and start with 09.';
      return;
    }
    if (contactAlreadyRegistered(email, mobile, user.id)) {
      status.textContent = 'That email or mobile number is already in use.';
      return;
    }
    if (password && password.length < 4) {
      status.textContent = 'A new password must be at least 4 characters.';
      return;
    }

    const previous = {
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      address: user.address,
      password: user.password
    };
    const previousAuditLength = db.audit.length;
    Object.assign(user, { name, email, mobile, address });
    if (password) user.password = password;
    try {
      addAudit('Updated staff account', 'users', user.id);
    } catch {
      Object.assign(user, previous);
      db.audit.length = previousAuditLength;
      status.textContent = 'Staff account could not be saved. Check that browser storage is available.';
      return;
    }
    renderManageStaff();
  });

  document.querySelectorAll('.delete-staff').forEach(button => button.onclick = async () => {
    const userId = Number(button.dataset.id);
    const user = db.users.find(entry => entry.id === userId && entry.role === 'staff');
    if (!user) return;
    if (!await showConfirmation(`Delete the staff account for ${user.name}? Historical actions and transactions will remain.`)) return;

    const userIndex = db.users.indexOf(user);
    const previousAuditLength = db.audit.length;
    db.users.splice(userIndex, 1);
    try {
      addAudit('Deleted staff account', 'users', user.id);
    } catch {
      db.users.splice(userIndex, 0, user);
      db.audit.length = previousAuditLength;
      await showNotice('Staff account could not be deleted. Check that browser storage is available.');
      return;
    }
    renderManageStaff();
  });
}

function renderAccount() {
  if (!currentUser) return renderLogin();
  setActive('account');
  const selectedTheme = document.body.dataset.theme || 'dark';
  app.innerHTML = `
    <section class="catalog-page">
      <h1>Account</h1>
      <article class="account-card">
        <h2>${escapeHtml(currentUser.name)}</h2>
        <p>${escapeHtml(currentUser.email)} · ${escapeHtml(currentUser.address)}</p>
        <p>Role: ${escapeHtml(currentUser.role)} · ${currentUser.verified ? 'Verified' : 'Pending verification'}</p>
        ${['admin', 'resident'].includes(currentUser.role) ? `
          <div class="account-login-edit">
            <h3>Edit ${currentUser.role === 'admin' ? 'admin' : 'resident'} login</h3>
            <form id="accountLoginForm">
              <label>Email
                <input name="email" type="email" value="${escapeHtml(currentUser.email)}" required>
              </label>
              <label>New password
                <input name="password" type="password" minlength="${currentUser.role === 'resident' ? 8 : 4}" autocomplete="new-password" placeholder="Leave blank to keep current">
              </label>
              <p class="staff-form-status" id="accountLoginStatus" aria-live="polite"></p>
              <button class="task-button" type="submit">Save login</button>
            </form>
          </div>
        ` : ''}
        <button class="task-button" id="logoutButton">Log out</button>
      </article>
      <article class="theme-card">
        <h2>Theme</h2>
        <p>Choose a design for your dashboard.</p>
        <div class="theme-grid" role="group" aria-label="Choose a theme">
          ${renderThemeOptions(selectedTheme)}
        </div>
        <p class="theme-status" id="themeStatus" aria-live="polite"></p>
      </article>
    </section>
  `;
  bindThemeOptions();
  if (['admin', 'resident'].includes(currentUser.role)) {
    document.querySelector('#accountLoginForm').onsubmit = async event => {
      event.preventDefault();
      const account = db.users.find(user => user.id === currentUser.id && user.role === currentUser.role);
      if (!account) return;

      const data = new FormData(event.currentTarget);
      const email = data.get('email').trim().toLowerCase();
      const password = data.get('password').trim();
      const status = document.querySelector('#accountLoginStatus');
      const minimumPasswordLength = account.role === 'resident' ? 8 : 4;

      if (contactAlreadyRegistered(email, account.mobile, account.id)) {
        status.textContent = 'That email is already in use.';
        return;
      }
      if (password && password.length < minimumPasswordLength) {
        status.textContent = `A new password must be at least ${minimumPasswordLength} characters.`;
        return;
      }

      const previousEmail = account.email;
      const previousPassword = account.password;
      const previousAuditLength = db.audit.length;
      account.email = email;
      if (password) account.password = password;
      try {
        addAudit(`Updated ${account.role} login credentials`, 'users', account.id);
      } catch {
        account.email = previousEmail;
        account.password = previousPassword;
        db.audit.length = previousAuditLength;
        status.textContent = 'Login details could not be saved. Check that browser storage is available.';
        return;
      }

      currentUser = { ...account };
      sessionStorage.setItem('tulongtools-user', JSON.stringify(currentUser));
      await showNotice('Login details updated. Use the new email and password the next time you log in.');
      renderAccount();
    };
  }
  document.querySelector('#logoutButton').onclick = () => {
    currentUser = null;
    sessionStorage.removeItem('tulongtools-user');
    rebuildNav();
    renderLogin();
  };
}

function renderThemeOptions(selectedTheme) {
  return themePresets.map(theme => `
    <button type="button" class="theme-option${theme.id === selectedTheme ? ' selected' : ''}" data-theme-option="${theme.id}" aria-pressed="${theme.id === selectedTheme}" aria-label="${theme.name} theme">
      <span class="theme-swatches" aria-hidden="true">${theme.swatches.map(color => `<span style="background:${color}"></span>`).join('')}</span>
      <span class="theme-option-name">${theme.name}</span>
    </button>
  `).join('');
}

function openThemeSettings() {
  document.querySelector('#themeSettingsBackdrop')?.remove();
  const selectedTheme = document.body.dataset.theme || 'dark';
  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-backdrop" id="themeSettingsBackdrop">
      <section class="modal-card theme-settings-dialog" role="dialog" aria-modal="true" aria-labelledby="themeSettingsTitle">
        <button class="theme-settings-close" id="closeThemeSettings" type="button" aria-label="Close theme settings">&times;</button>
        <h2 id="themeSettingsTitle">Theme settings</h2>
        <p>Choose a design for your dashboard.</p>
        <div class="theme-grid" role="group" aria-label="Choose a theme">
          ${renderThemeOptions(selectedTheme)}
        </div>
        <p class="theme-status" id="themeStatus" aria-live="polite"></p>
      </section>
    </div>
  `);
  const backdrop = document.querySelector('#themeSettingsBackdrop');
  document.querySelector('#closeThemeSettings').onclick = () => backdrop.remove();
  backdrop.onclick = event => {
    if (event.target === backdrop) backdrop.remove();
  };
  bindThemeOptions();
}

function bindThemeOptions() {
  document.querySelectorAll('[data-theme-option]').forEach(button => {
    button.onclick = () => {
      const theme = themePresets.find(preset => preset.id === button.dataset.themeOption);
      if (!theme) return;
      try {
        localStorage.setItem(themeStorageKey, theme.id);
      } catch (error) {
        console.error('Could not save the selected theme.', error);
        document.querySelector('#themeStatus').textContent = 'Theme could not be saved. Check that browser storage is available.';
        return;
      }
      applyTheme(theme.id);
      document.querySelectorAll('[data-theme-option]').forEach(option => {
        const selected = option.dataset.themeOption === theme.id;
        option.classList.toggle('selected', selected);
        option.setAttribute('aria-pressed', String(selected));
      });
      document.querySelector('#themeStatus').textContent = `${theme.name} theme selected.`;
    };
  });
}

function applyTheme(themeId) {
  const theme = themePresets.find(preset => preset.id === themeId) || themePresets.find(preset => preset.id === 'dark');
  if (themeId !== theme.id) console.warn(`Unknown theme "${themeId}". Using Dark instead.`);
  document.body.dataset.theme = theme.id;
  Object.entries({
    '--theme-page': theme.page,
    '--theme-surface': theme.surface,
    '--theme-surface-alt': theme.surfaceAlt,
    '--theme-text': theme.text,
    '--theme-muted': theme.muted,
    '--theme-border': theme.border,
    '--theme-primary': theme.primary,
    '--theme-accent': theme.accent,
    '--theme-header': theme.header,
    '--theme-header-text': theme.headerText,
    '--theme-input': theme.input,
    '--theme-input-text': theme.inputText
  }).forEach(([property, value]) => document.body.style.setProperty(property, value));
}

function readTheme() {
  try {
    return localStorage.getItem(themeStorageKey) || 'dark';
  } catch (error) {
    console.error('Could not read the saved theme.', error);
    return 'dark';
  }
}

applyTheme(readTheme());
rebuildNav();
bindNav();
window.addEventListener('storage', event => {
  if (event.key !== storageKey || !event.newValue) return;

  try {
    const updatedDb = JSON.parse(event.newValue);
    if (!updatedDb || !Array.isArray(updatedDb.items) || !Array.isArray(updatedDb.users) || !Array.isArray(updatedDb.reservations)) {
      console.error('Could not refresh app data after a storage update.');
      return;
    }
    db = updatedDb;
  } catch (error) {
    console.error('Could not refresh app data after a storage update.', error);
    return;
  }

  const activeView = document.querySelector('.main-nav [data-view].active')?.dataset.view;
  if (currentUser) {
    const updatedUser = db.users.find(user => user.id === currentUser.id);
    if (!updatedUser) {
      currentUser = null;
      sessionStorage.removeItem('tulongtools-user');
      rebuildNav();
      renderLogin();
      return;
    }

    currentUser = { ...updatedUser };
    sessionStorage.setItem('tulongtools-user', JSON.stringify(currentUser));
    rebuildNav();
  }

  if (currentUser?.role === 'staff' && activeView === 'staff') renderStaff();
  if (currentUser?.role === 'resident' && activeView === 'borrowings') renderBorrowings();
  if (currentUser?.role === 'resident' && activeView === 'catalog') renderCatalog();
  if (currentUser?.role === 'admin' && activeView === 'admin') renderAdmin();
  if (currentUser?.role === 'admin' && activeView === 'manageStaff') renderManageStaff();
  if (activeView === 'account' && currentUser) renderAccount();
});
if (currentUser) {
  ['staff', 'admin'].includes(currentUser.role) ? renderStaff() : renderCatalog();
} else {
  renderLogin();
}
