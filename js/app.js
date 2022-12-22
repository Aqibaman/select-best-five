const players = [];
function displayPlayer() {
    const playerContainer = document.getElementById("player-list");
    playerContainer.textContent = '';

    for (let i = 0; i < players.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `
        <li class="fs-4 fw-semibold"><span>${i + 1}. </span> ${players[i].playerName}</li>
        `;
        playerContainer.appendChild(li);
    }

}
function addToSelected(element) {
    const playerName = element.parentNode.children[0].innerText;

    const player = {
        playerName: playerName
    }
    if (players.length < 5) {
        players.push(player);
    }
    else {
        alert("Your quota for player list is already fill-up");
    }
    displayPlayer();
    document.getElementById(element.id).setAttribute('disabled', '');


}

document.getElementById("btn-calculate").addEventListener("click", function () {
    const perPlayerAmount = getInputFieldValueById("per-player-input");
    if (isNaN(perPlayerAmount)) {
        alert("Please put here a valid number");
        return;
    }
    const playersExpenses = perPlayerAmount * players.length;
    setTextElementValueById("players-expenses", playersExpenses);
    document.getElementById("btn-calculate-total").addEventListener("click", function () {
        const managerSalary = getInputFieldValueById("manager-salary-input");
        const coachSalary = getInputFieldValueById("coach-salary-input");
        if (isNaN((managerSalary) && (coachSalary))) {
            alert("Please put here a valid number");
            return;
        }
        const calculateTotal = playersExpenses + managerSalary + coachSalary;
        setTextElementValueById("total-expenses", calculateTotal);
    })
})








