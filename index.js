// let a = dogName
// let b = dogBreed

function wakeDog(dogName, dogBreed) {
   let output = `Wake ${dogName} the ${dogBreed}`;
   console.log(output);
   return output;
}

function leashDog(dogName, dogBreed) {
   let output = `Leash ${dogName} the ${dogBreed}`;
   console.log(output);
   return output;
}

function walkToPark(dogName, dogBreed) {
   let output = `Walk to the park with ${dogName} the ${dogBreed}`;
   console.log(output);
   return output;
}

function throwFrisbee(dogName, dogBreed) {
   let output = `Throw the frisbee for ${dogName} the ${dogBreed}`;
   console.log(output);
   return output;
}

function walkHome(dogName, dogBreed) {
   let output = `Walk home with ${dogName} the ${dogBreed}`;
   console.log(output);
   return output;
}

function unleashDog(dogName, dogBreed) {
   let output = `Unleash ${dogName} the ${dogBreed}`;
   console.log(output);
   return output;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
   let successMessages = [];
   for (let i = 0; i < routine.length; i++) {
      successMessages.push(routine[i](dogName, dogBreed));
      // console.log(output);
   }
   return successMessages;
}

console.log(routine)
