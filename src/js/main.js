import {settings} from "./settings";
import {Player} from "./Player";

const monsterGame = {
    logContainerElement: document.querySelector(settings.logContainerSelector),
    formElement: document.getElementById(settings.playGameFormId),
    attackBtnElement: document.getElementById(settings.attackBtnID),
    PlayerOneH2Element: document.getElementById(settings.playerNameId),
    controlsContainerElement: document.querySelector(settings.controlDivSelector),

    init() {
        this.players = [new Player(settings.defaultPlayerName1), new Player(settings.defaultPlayerName2)];
        this.addEventListeners();
    },
    addEventListeners() {
        this.formElement.addEventListener('submit', (evt) => {
            this.initPlayerName(evt);
        });
        this.attackBtnElement.addEventListener('click', () => {
            this.attack();
        });
    },
    attack() {
        for (const player of this.players) {
            const damage = Math.floor(Math.random() * settings.actions.attack.max_impact);
            player.health += damage;
            this.logContainerElement.insertAdjacentHTML('beforeend', settings.actions.attack.message(player, damage));
        }

        console.log(this.players);
    },
    initPlayerName(evt) {
        evt.preventDefault();
        this.players[0].name = evt.currentTarget.querySelector('input').value
        this.PlayerOneH2Element.textContent = this.players[0].name;
        this.hideFormAndDisplayControls(evt);
    },

    hideFormAndDisplayControls(evt) {
        evt.currentTarget.classList.add(settings.hideElementClass);
        this.controlsContainerElement.classList.remove(settings.hideElementClass);
    },
}

monsterGame.init();