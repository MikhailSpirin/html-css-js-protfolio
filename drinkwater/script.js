const cups = document.querySelector('.cups-container');
const cupFilledContainer = document.querySelector('.cup.big .filled');
const cupFilledPercentage = document.getElementById("percentage");
const cupFilledRemainingLabel = document.getElementById("empty-quantity");
const cupFilledRemainingContainer = document.querySelector(".cup.big .empty");
const MAX = cups.children.length;

const handleSmallCupsClick = (e) => {
    const clickedCup = e.target;
    let filled = false, i = 0;
    
    if (clickedCup === e.currentTarget) return;
    for (const cup of cups.children) {
        if (filled) {
            cup.classList.remove('active');
        } else {
            cup.classList.add('active');
        }
        if (cup === clickedCup) {
            filled = true;
            handleBigCupNumbers(i+1, MAX);
        }
        i++;
    }
}

const handleBigCupNumbers = (i, max) => {
    cupFilledContainer.style.height = `${i / max * 100}%`;
    cupFilledRemainingContainer.style.display = (i === max) ? 'none' : 'flex';
    cupFilledContainer.style.display = (i === 0) ? 'none' : 'flex';
    cupFilledPercentage.innerText = `${i / max * 100}%`;
    cupFilledRemainingLabel.innerText = `${2 - 0.25 * i} L`;
}

cups.addEventListener('click', handleSmallCupsClick);

