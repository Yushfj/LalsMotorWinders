// Login Modal
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.querySelector('#loginModal .close');

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

closeLogin.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Admin Login
const submitLogin = document.getElementById('submitLogin');
submitLogin.addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'ADMIN' && password === 'admin') {
    document.getElementById('adminDashboard').classList.remove('hidden');
    loginModal.style.display = 'none';
  } else {
    alert('Invalid credentials');
  }
});

// Wages Calculator
const calculateWages = document.getElementById('calculateWages');
calculateWages.addEventListener('click', () => {
  const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
  const wageRate = parseFloat(document.getElementById('wageRateDisplay').value);
  const totalWages = hoursWorked * wageRate;
  document.getElementById('totalWages').textContent = totalWages.toFixed(2);
});
