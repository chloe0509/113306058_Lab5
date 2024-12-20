const mathInput = document.getElementById('math');
const englishInput = document.getElementById('english');
const submitButton = document.getElementById('submit');
const tableBody = document.getElementById('table-body');
const mathAverageCell = document.getElementById('math-average');
const englishAverageCell = document.getElementById('english-average');
const overallAverageCell = document.getElementById('overall-average');

let rowCount = 0;
let mathTotal = 0;
let englishTotal = 0;

submitButton.addEventListener('click', () => {
    const mathScore = parseFloat(mathInput.value);
    const englishScore = parseFloat(englishInput.value);

    if (isNaN(mathScore) || isNaN(englishScore)) {
        alert('Please enter valid numbers for Math and English scores.');
        return;
    }

    rowCount++;
    mathTotal += mathScore;
    englishTotal += englishScore;

    const rowAverage = ((mathScore + englishScore) / 2).toFixed(2);

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathScore}</td>
        <td>${englishScore}</td>
        <td>${rowAverage}</td>
    `;
    tableBody.appendChild(row);

    updateFooter();
    mathInput.value = '';
    englishInput.value = '';
});

function updateFooter() {
    const mathAverage = (mathTotal / rowCount).toFixed(2);
    const englishAverage = (englishTotal / rowCount).toFixed(2);
    const overallAverage = ((mathTotal + englishTotal) / (rowCount * 2)).toFixed(2);

    mathAverageCell.textContent = mathAverage;
    englishAverageCell.textContent = englishAverage;
    overallAverageCell.textContent = overallAverage;
}
