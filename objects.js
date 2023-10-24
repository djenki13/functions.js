// const adventurer = {
//     name: "Dan",
//     hitpoints: 15,
//     belongings: ['sword','potion','pills'],
//     skills: ['fighting','magic','mindcontrol'],
//     companion: {
//         name: 'Velma',
//         type: 'bat',
//         companion: {
//             name: 'Tim',
//             type: 'parasite',
//             belongings: ['scuba tank','health insurance','gun'],
//         }
//     }
// }
// console.log(adventurer.companion.companion.belongings)

// const movies = [
//     {title: 'Bringing Down the House'},
//     {title: 'Donnie Darko'},
//     {title: 'The Breakfast Club'}
// ]
// console.log(movies[2].title)

// movies.forEach((movie) =>{
//     console.log(movie.title)
// })

// const foo = {
//     someArray:[1,2,3]
// };
// console.log(foo.someArray[0])

// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// };
// console.log(foo.someObject.someProperty)

// const foo = {
//     someMethod:()=>{
//         console.log('oh hai')
//     }
// };
// console.log(foo.someMethod())

const foo = [
    ["0,0","0,1","0,2"],
    ["1,0","1,1","1,2"],
    ["2,0","2,1","2,2"],
];
// for(let bar of foo)
//     for(let baz of bar)
//        console.log(baz);

for(let i=0; i<=2; i ++)
console.log(foo[i])