/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the favNum function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



var first = function(arr, callback) {
  return callback(arr[0]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});


/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




var last = function(arr, callback) {
  return callback(arr[arr.length - 1]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






var multiply = function(num1, num2, callback) {
  callback = num1 * num2;
  return callback;
}


multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





var contains = function(arr, str, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return callback(true);
    }
  }
  return callback(false);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



var uniq = function(arr, callback) {
  var uniqObj = {};
  var uniqArray = [];
  for (var i = 0; i < arr.length; i++) {
      uniqObj[arr[i]] = arr[i];
    }
  for (var key in uniqObj) {
    uniqArray.push(key);
  }
  callback(uniqArray);
  }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




var each = function(arr, callback) {
  for (
  }
  callback(item, index);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, index){
  console.log('The item in the ' + index + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





var getUserById = function(arr, id, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (id === arr[i].id) {
    callback(arr[i]);
    }
  }
}
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
