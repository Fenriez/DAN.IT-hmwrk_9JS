// let getBirthDate = prompt('Enter your birth date in format: dd.mm.year', '');
let getBirthDate = '11.11.1989',
    birth_date = new Date(getBirthDate),
    current_date = new Date,
    age = (current_date - birth_date) / 1000 / 60 / 60 / 24 / 365;

const ZODIAC_SIGN = {
    'Aries': [21, 3],
    'Taurus': [21, 4],
    'Gemini': [22, 5],
    'Cancer': [22, 6],
    'Leo': [23, 7],
    'Virgo': [22, 8],
    'Libra': [24, 9],
    'Scorpio': [24, 10],
    'Sagittarius': [23, 11],
    'Capricorn': [23, 12],
    'Aquarius': [21, 1],
    'Pisces': [20, 2]
}  
console.log(ZODIAC_SIGN);
let getZodiacSign = (month, day) => {
    for (let sign in ZODIAC_SIGN) {
        if (month + 1 == ZODIAC_SIGN[sign][1]) {
            if (day >= ZODIAC_SIGN[sign][0]) {
                return sign;
            } else {
                return ZODIAC_SIGN[sign+1];
            }
        }
    }
}
// console.log(`You are ${parseInt(age)} years old`);
// console.log(`Your zodiac sign is ${getZodiacSign(birth_date.getMonth(), birth_date.getDate())}`);