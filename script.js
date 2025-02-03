// Open/Close Modal Functions
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'flex';
}

function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
}

function openEmployeeRegister() {
    document.getElementById('employeeRegisterModal').style.display = 'flex';
}

function closeEmployeeRegisterModal() {
    document.getElementById('employeeRegisterModal').style.display = 'none';
}

function openCustomerRegister() {
    document.getElementById('customerRegisterModal').style.display = 'flex';
}

function closeCustomerRegisterModal() {
    document.getElementById('customerRegisterModal').style.display = 'none';
}

function openWagesCalculator() {
    document.getElementById('wagesCalculatorModal').style.display = 'flex';
}

function closeWagesCalculatorModal() {
    document.getElementById('wagesCalculatorModal').style.display = 'none';
}

// Admin Login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'ADMIN' && password === 'admin') {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('adminDashboard').style.display = 'block';
    } else {
        alert('Invalid credentials');
    }
}

// Wages Calculation
function calculateWages() {
    const hoursWorked = document.getElementById('hoursWorked').value;
    const wageRate = document.getElementById('wageRate').value;
    const wages = hoursWorked * wageRate;
    document.getElementById('calculatedWages').innerText = 'Calculated Wages: $' + wages;
}
