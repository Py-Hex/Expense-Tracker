document.addEventListener('DOMContentLoaded', function () { 
    if (document.querySelector('#total').innerHTML == 0) {
        document.querySelector('.expense-list').style.display = "none";
    }

    const form = document.querySelector('form'),
        expList = document.querySelector('.expense-list'),
        expense = document.querySelector('#expense'),
        amount = document.querySelector('#amount'),
        tableBody = document.querySelector('tbody');

        let total = 0;

    form.onsubmit = () => {
        const tableRow = document.createElement('tr'),
            tableCell = document.createElement('td'),
            tableCell2 = document.createElement('td');
        tableCell.innerHTML = `${expense.value}`;
        tableCell2.innerHTML = `${amount.value}`;

        console.log(tableCell)
        console.log(tableCell2)
        
        tableRow.appendChild(tableCell);
        tableRow.appendChild(tableCell2);
        tableBody.append(tableRow);
        
        
        
        total += parseFloat(amount.value);

        expense.value = '';
        amount.value = '';

        document.querySelector('#total').innerHTML = `${total}`
        document.querySelector('.expense-list').style.display = 'block';
        return false;
    }
 })