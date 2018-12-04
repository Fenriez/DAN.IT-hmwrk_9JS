let getBirthDate = prompt('Enter your birth date in format: dd.mm.year', ''),
    date = getBirthDate.split('.'),
    birth_date = new Date(`${date[2]}-${date[1]}-${date[0]}`),
    current_date = new Date,
    age = current_date.getYear() - birth_date.getYear(); 

// const ZODIAC_SIGN = {
//     'Aries': [21, 3],
//     'Taurus': [21, 4],
//     'Gemini': [22, 5],
//     'Cancer': [22, 6],
//     'Leo': [23, 7],
//     'Virgo': [22, 8],
//     'Libra': [24, 9],
//     'Scorpio': [24, 10],
//     'Sagittarius': [23, 11],
//     'Capricorn': [23, 12],
//     'Aquarius': [21, 1],
//     'Pisces': [20, 2]
// }

const ZODIAC_SIGN = {
    3: [21, 'Aries'],
    4: [21, 'Taurus'],
    5: [22, 'Gemini'],
    6: [22, 'Cancer'],
    7: [23, 'Leo'],
    8: [22, 'Virgo'],
    9: [24, 'Libra'],
    10: [24, 'Scorpio'],
    11: [23, 'Sagittarius'],
    12: [23, 'Capricorn'],
    1: [21, 'Aquarius'],
    2: [20, 'Pisces']
}

let getZodiacSign = (month, day) => {
    for (let sign in ZODIAC_SIGN) {
        if (month + 1 == sign) {
            if (day >= ZODIAC_SIGN[sign][0]) {
                return ZODIAC_SIGN[sign][1];
            } else {
                sign--;
                return ZODIAC_SIGN[sign][1];
            }
        }
    }
}

console.log(`You are ${parseInt(age)} years old`);
console.log(`Your zodiac sign is ${getZodiacSign(birth_date.getMonth(), birth_date.getDate())}`);