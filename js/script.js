'use strict';

const year = prompt ('Введiть ваш рік народження')
const citi = prompt ('В якому місті ви живете?')
const sport = prompt ('Який ваш улюблений вид спорту?')

let finalMessage;

console.log(year)
console.log(typeof year)
console.log(Number(year))

if (year === null) {
    finalMessage = `Шкода, що Ви не захотіли ввести свій рік народження`
} else if (isNaN(Number(year))) {
    finalMessage = `Ви ввели не цифри`
} else {
    const currentYear = new Date().getFullYear()
    const age = currentYear - Number(year)
    finalMessage = ` ${age} `
}

switch (citi) {
    case 'Київ':
        finalMessage += 'Ти живеш у столиці України'
        break
    case 'Вашингтон':
        finalMessage += 'Tи живеш у столиці США'
        break
    case 'Лондон':
        finalMessage += 'Ти живеш у столиці Великобританіі'
        break
    case null:
        finalMessage += `Шкода, що Ви не захотіли ввести свое місто`
        break
    default:
        finalMessage += `Ти живеш у місті ${citi}`
}

switch (sport) {
    case 'шахмати':
        finalMessage += 'Круто! Хочеш стати Гукешем Доммараджем?'
        break
    case 'бокс':
        finalMessage += 'Круто! Хочеш стати Олександром Усіком?'
        break
    case 'біг':
        finalMessage += 'Круто! Хочеш стати Усейном Болтом?'
        break
    case null:
        finalMessage += `Шкода, що Ви не захотіли ввести свій улюблений вид спорту`
        break
    default:
        finalMessage += `Ти любиш ${sport}`
}


alert(finalMessage)