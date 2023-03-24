const now = new Date()

// timestamp
// ilość milisekund od 01.01.1970
now.getTime() //?

// ISO
now.toISOString() //?

const dateText = "2023-03-24T09:57:15.538Z";
const dateNumber = 1679655443862;

const now2 = new Date(dateText)
const now3 = new Date(dateNumber)


now //?
now.setDate(now.getDate() + 10)
now.setHours(10)

now