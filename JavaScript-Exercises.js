//1  (M Ahmed Raza 29-Sept-2022) Done
//2 (M Ahmed Raza 29-Sept-2022)
const name = 'Ahmed'
console.log(`Hello ${name}, would you like to learn some Python today?`)
//3 (M Ahmed Raza 29-Sept-2022)
// const mame = 'ahmEd'
console.log(name.toLowerCase())
console.log(name.toUpperCase())
console.log(name[0].toUpperCase()+name.slice(1,).toLowerCase())
//4 (M Ahmed Raza 29-Sept-2022)
console.log(`Muhammad Iqbal once said, "Words, without power, is mere philosophy."`)
//5 (M Ahmed Raza 29-Sept-2022)
const famous_person = 'Muhammad Iqbal'
const message = 'Words, without power, is mere philosophy.'
console.log(`${famous_person} once said, "${message}"`)
//6 (M Ahmed Raza 29-Sept-2022)
let NameOfPerson = "\n\tShafiq\t"
console.log(NameOfPerson)
console.log(NameOfPerson.trim())
//7 and 8 (M Ahmed Raza 29-Sept-2022)
console.log(6+2)
console.log(12-4)
console.log(2*4)
console.log(160/20)
//9 (M Ahmed Raza 29-Sept-2022)
var favNo = 8
console.log(`My favourite number is ${favNo}`)
//10 (M Ahmed Raza 29-Sept-2022)
const favNo = 8 // 8 no stored in a varibale
console.log(`My favourite number is ${favNo}`) //Printing fav no with a message 
//11 (M Ahmed Raza 29-Sept-2022)
var Names = ["Ahmed","Ali","Daniyal","Shayan","Umer"]
Names.forEach( n => console.log(n))
//12 (M Ahmed Raza 29-Sept-2022)
const Names = ["Ahmed","Ali","Daniyal","Shayan","Umer"]
Names.forEach( n => console.log(`Hi, ${n} How are you?`))
//13 (M Ahmed Raza 29-Sept-2022)
const cars = ["Civic","Corola","Ferrari","Lambo"]
cars.forEach( c => console.log(`I just want ${c}`))
//14 (M Ahmed Raza 29-Sept-2022)
const invities = ['fakhar','asif', 'rizu','bobby']
invities.forEach( i => console.log(`Asalamualikum ${i} Im arranging dinner tonight come on time`))
//15 (M Ahmed Raza 29-Sept-2022)
let Invities = ['fakhar','asif', 'rizu','bobby']
Invities.forEach( i => console.log(`Asalamualikum ${i} Im arranging dinner tonight come on time`))
console.log(`${Invities[3] } won't be able to come`)
Invities[3] = 'sarfaraz'
Invities.forEach( i => console.log(`Asalamualikum ${i} Im arranging dinner tonight come on time`))    
//16 (M Ahmed Raza 29-Sept-2022)
Invities.forEach( i => console.log(`Asalamualikum ${i} Im arranging dinner tonight come on time`))
console.log(`I found a bigger table`)
Invities.unshift('haider')
Invities.splice(Math.ceil(Invities.length/2),0, 'khurseed');
Invities.push('irfan')
Invities.forEach( i => console.log(`Asalamualikum ${i} Im arranging dinner tonight come on time`))
//17 (M Ahmed Raza 29-Sept-2022)
Invities.forEach( i => console.log(`Asalamualikum ${i} Im arranging dinner tonight come on time`))
console.log(`We can only invite only 2 people`)
const len = Invities.length-2
for(let i=0; i<len; i++){
    const rName = Invities.pop()
    console.log(`${rName} you won't be able to attend the dinner`)
}
Invities.forEach(i => console.log(`${i} you are still invited`))
//18 (M Ahmed Raza 29-Sept-2022)
const favPlaces = ["Makkah","Madina","Karbala","Palestain"]
console.log(favPlaces)
console.log(favPlaces.slice().sort())
console.log(favPlaces)
console.log(favPlaces.slice().reverse())
console.log(favPlaces)
console.log(favPlaces.reverse())
console.log(favPlaces.reverse())
console.log(favPlaces.sort())
console.log(favPlaces.reverse())
//19 (M Ahmed Raza 29-Sept-2022)
console.log(Invities.length)
//20 (M Ahmed Raza 29-Sept-2022)
const arr = ["China","k2","Nanga Parbat","Karachi","Islamaba","Chinab","Satlaj"]
//21 (M Ahmed Raza 29-Sept-2022)
let bj ={
    name: "Ahmed",
}
//22 (M Ahmed Raza 29-Sept-2022)
arr[8]
//23 (M Ahmed Raza 30-Sept-2022)
console.log("1=='1 would be true")
console.log(1 == '1')
console.log(" ''=='' would be true")
console.log('' == '')
console.log(" ''==='' would be true")
console.log('' === '')
console.log(" [].length == [].length would be true")
console.log([].length == [].length )
console.log(" -1 == '-1' would be true")
console.log(-1 == '-1')
console.log("{} == {} false")
console.log({} == {})
console.log("1===1 would be false")
console.log(1 === '1')
console.log("[] == [] would be false")
console.log([] == [])
console.log("[] == [] would be false")
console.log([] == [])
console.log("'a' === 'b'  would be false")
console.log('a' === 'b')
console.log("'M' == 'm'  would be false")
console.log('M' == 'm')
//24 (M Ahmed Raza 30-Sept-2022)
console.log("'String' == 'string' would be false")
console.log('String' == 'string')
console.log("'String' != 'string' would be true")
console.log('String' != 'string')
console.log("'String'.toLowerCase() != 'string' would be false")
console.log('String'.toLowerCase() != 'string')
console.log("'2' != 2 would be false")
console.log('2' != 2)
console.log("'2' !== 2 would be true")
console.log('2' !== 2)
console.log("'2' >= 2 would be true")
console.log('2' >= 2)
console.log("'2' <= 2 would be true")
console.log('2' <= 2)
console.log("5 < 2 would be false")
console.log(5 < 2)
console.log("5 > 2 would be true")
console.log(5 > 2)
console.log("5 > 2 && 1 > 2 would be false")
console.log(5 > 2 && 1 > 2)
console.log("5 > 2 || 1 > 2 would be true")
console.log(5 > 2 || 1 > 2)
var arra = [1,2,3,4]
console.log("1 in arra  would be true")
console.log(1 in arra)
console.log(" !1 in arra  would be false")
console.log(!1 in arra)
//25 (M Ahmed Raza 30-Sept-2022)
var alien_color = 'green'
if(alien_color === 'green'){
    console.log('Player just earned 5 points')
}
alien_color = 'red'
if(alien_color === 'green'){
    console.log('Player just earned 5 points')
}
//26 (M Ahmed Raza 30-Sept-2022)
var alien_color = 'yellow'
if(alien_color === 'green'){
    console.log('Player just earned 5 points')
} else if(alien_color !== 'green'){
    console.log('Player just earned 10 points')
}
alien_color = 'green'
if(alien_color === 'green'){
    console.log('Player just earned 5 points')
} else if(alien_color !== 'green'){
    console.log('Player just earned 10 points')
}
//27 (M Ahmed Raza 30-Sept-2022)
var alien_color = 'yellow'
if(alien_color === 'green'){
    console.log('Player just earned 5 points')
} else if(alien_color === 'yellow'){
    console.log('Player just earned 10 points')
}else if(alien_color === 'red'){
    console.log('Player just earned 15 points')
}
alien_color = 'green'
if(alien_color === 'green'){
    console.log('Player just earned 5 points')
} else if(alien_color === 'yellow'){
    console.log('Player just earned 10 points')
}else if(alien_color === 'red'){
    console.log('Player just earned 15 points')
}
alien_color = 'red'
if(alien_color === 'green'){
    console.log('Player just earned 5 points')
} else if(alien_color === 'yellow'){
    console.log('Player just earned 10 points')
}else if(alien_color === 'red'){
    console.log('Player just earned 15 points')
}
//28 (M Ahmed Raza 30-Sept-2022)

var age = 22
if (age < 2){
    console.log('The person is a baby')
} else if (age >= 2 && age < 4){
    console.log('The person is a toddler')
} else if (age >= 4 && age < 13){
    console.log('The person is a kid')
} else if (age >= 13 && age < 20){
    console.log('The person is a teenager')
} else if (age >= 20 && age < 65){
    console.log('The person is a adult')
} else if (age >= 65){
    console.log('The person is a elder')
}
//29 (M Ahmed Raza 30-Sept-2022)
var favorite_fruits = ['banana', 'pineapple', 'apple']
if(favorite_fruits.includes('banana')){
    console.log('You really like bananas!')
} else if(favorite_fruits.includes('apple')){
    console.log('You really like apple!')
} else if(favorite_fruits.includes('pineapple')){
    console.log('You really like pineapple!')
}  else if(favorite_fruits.includes('orange')){
    console.log('You really like orange!')
} else if(favorite_fruits.includes('papaya')){
    console.log('You really like papaya!')
}
//30 (M Ahmed Raza 30-Sept-2022)
var users = ['Ahmed', 'Khan', 'Bobby', 'Admin' ,'Rizwan']
users.forEach((user) => {
    if (user === 'Admin') console.log("Hello admin, would you like to see a status report?")
    else console.log(`Hi ${user}, Thank You for logging.`)
})
//31 (M Ahmed Raza 30-Sept-2022)
var users = []
if(users.length ===  0) {
    console.log("We need to find some users")
} else {

users.forEach((user) => {
    if (user === 'Admin') console.log("Hello admin, would you like to see a status report?")
    else console.log(`Hi ${user}, Thank You for logging.`)
})}
//32 (M Ahmed Raza 30-Sept-2022)
var current_users = ['Ahmed', 'Khan', 'Bobby', 'Admin' ,'Rizwan']
var new_users = ['ahmed', 'Shifran', 'BobBy', 'Farook' ,'Shabi']

new_users.forEach((user)=> {
   let exist = current_users.some(u => {
        return u.toLowerCase() === user.toLowerCase()
    })
    if(exist){
        console.log("User is already avaliable with this name kindly select another")
    } else {
        console.log("Usernam is avaliable")
    }
})
//33 (M Ahmed Raza 30-Sept-2022)
var ordinal_numbers = [1,2,3,4,5,6,7,8,9]
ordinal_numbers.forEach((n) => {
    let no;
    if(n === 1){
        no = `${n}st`
    } else if(n === 2){
        no = `${n}nd`
    }else if(n === 3){
        no = `${n}rd`
    } else {
        no = `${n}th`
    }
    console.log(no)
})
//34 (M Ahmed Raza 30-Sept-2022)
var pizzas = ['Tandoori','Tikka', 'Fajita']
pizzas.forEach(pizza => {
    console.log(`I Like ${pizza} Pizza`)
})
console.log("I like piiza with extra chees \nAnd more sauses\nAnd little Sipcy")
//35 (M Ahmed Raza 30-Sept-2022)
var animal = ["elephant", 'Tiger', "Whale"]
animal.forEach(a => {
    console.log(`${a} is not a pet`)
})
console.log('These all animals are maimals and they are wild animals')
//36 (M Ahmed Raza 30-Sept-2022)
function make_shrit (Size, Text){
    console.log(`${Text} will be printed on ${Size} sized shirt`)
}
make_shrit("Medium","Metaverse")
//37 (M Ahmed Raza 30-Sept-2022)
function make_shrit (Size="Large", Text="I love javascript"){
    console.log(`${Text} will be printed on ${Size} sized shirt`)
}
make_shrit()
make_shrit("medium")
make_shrit("large")
//38 (M Ahmed Raza 30-Sept-2022)
function describe_city(city="Karachi", country="Pakistan") {
    console.log(`${city} is the city of ${country}`)
}
describe_city()
describe_city('Islamabad')
describe_city('London')
describe_city('Lahore')
//39 (M Ahmed Raza 30-Sept-2022)
function city_country(city, country) {
    return `${city}, ${country}`
}
console.log(city_country("Karachi",'Pakistan'))
console.log(city_country("Dubai",'UAE'))
console.log(city_country("Jeddah",'Saudia'))
//40 (M Ahmed Raza 30-Sept-2022)
function make_album(artist, album, numoftract){
    let obje = {
     artist,
     album,
 }  
    if(numoftract){
        obje['numoftrack']=numoftract;
    }
 return  obje
}
console.log(make_album("Adat","Atif"))
//41 (M Ahmed Raza 30-Sept-2022)
function show_magicians(magians){
    magians?.forEach((m) => {
        console.log(m)
    })  
  }
  var magians = ['Ahmed',"Ali","Shayan"]
  show_magicians(magians)
//42 (M Ahmed Raza 30-Sept-2022)
function show_magicians(magians){
    magians?.forEach((m) => {
        console.log(m)
    })  
  }
  var magians = ['Ahmed',"Ali","Shayan"]
  function make_great(){
      magians = magians.map((m)=> `The Great ${m}`)
  }
  make_great()
  show_magicians(magians)
//43 (M Ahmed Raza 30-Sept-2022)
function show_magicians(magians){
    magians?.forEach((m) => {
        console.log(m)
    })  
  }
  var magians = ['Ahmed',"Ali","Shayan"]
  var duplicates = [...magians]
  function make_great(){
      duplicates = duplicates.map((m)=> `The Great ${m}`)
  }
  make_great()
  show_magicians(magians)
//44 (M Ahmed Raza 30-Sept-2022)
function sandwitch(items){
    console.log(`Your order is ready with ${items.join(', ')}`)
}
sandwitch(["CHeese","Paproni","Kali mirch"])
sandwitch(["Spice","Mayo","Ketchup"])
//45 (M Ahmed Raza 30-Sept-2022)
function car(maufectuere, model, kargs){
    let c = {
        maufectuere, model
    }
    if(kargs) c = {...c, ...kargs}
    return c
}
car("Honda", "Civic", {Color: 'Black', Type:'Sports'})




