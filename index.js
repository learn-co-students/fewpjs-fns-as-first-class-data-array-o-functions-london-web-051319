function wakeDog(name, breed){
  const str = `Wake ${name} the ${breed}`
  console.log(str)
  return str
}

function leashDog(name, breed){
  const str = `Leash ${name} the ${breed}`
  console.log(str)
  return str
}

function walkToPark(name, breed){
  const str = `Walk to the park with ${name} the ${breed}`
  console.log(str)
  return str
}

function throwFrisbee(name, breed){
  const str = `Throw the frisbee for ${name} the ${breed}`
  console.log(str)
  return str
}

function walkHome(name, breed){
  const str = `Walk home with ${name} the ${breed}`
  console.log(str)
  return str
}

function unleashDog(name, breed){
  const str = `Unleash ${name} the ${breed}`
  console.log(str)
  return str
}


const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


function exerciseDog(dog, breed) {
  return routine.map(f => f(dog, breed))
}

// function exerciseDog(name, breed){
//   let arr2 = []
//   for(let i = 0; i<routine.length; i++){
//   let result = routine[i](name, breed)
//   arr2.push(result)
//   }
//   arr2
// }



// const routine =
