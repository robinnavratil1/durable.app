let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Základní car detailing"`,
    person: `Čištění a voskování exteriéru vozidla, včetně umytí, ošetření povrchu a leštění. `
}, {
    quote: `"Detailing interiéru"`,
    person: `  Čištění a oživení interiéru vozidla, včetně čalounění, plastů, skel a všech dalších povrchů.`
}, {
    quote: `"Nanolakování a ochrana povrchu: "`,
    person: `Aplikace speciálních ochranných prostředků, jako je nanolakování, keramické povlaky nebo vosky, které chrání lak vozidla před poškozením a znečištěním.`
}, {
    quote: `"Odstranění vodních skvrn a drobných škrábanců"`,
    person: ` Použití specializovaných technik a produktů k odstranění vodních skvrn, lepidel, žvýkačky, drobných škrábanců a dalších defektů na povrchu vozidla.`
}, {
    quote: `"Čištění motoru"`,
    person: `Důkladné čištění motorového prostoru od prachu, oleje a jiných nečistot..`

}, ]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})