const bcrypt = require("bcrypt")
const saltRounds = 10
const password = "Admin@123"
const myPlaintextPassword= "dvfjdbvjbskvd"

//using the async method

//create a salt using bcrypt’s genSalt
bcrypt.genSalt(saltRounds)
.then( salt =>{
    console.log('salt:',salt)
    //hash the salt and password
    return bcrypt.hash(password,salt)
})
.then(
    hash=>{
        console.log('Hashed :',hash)
    }
)    
.catch(err => console.error(err.message))

/* Technique 2 (auto-gen a salt and hash):

bcrypt
  .hash(password, saltRounds)
  .then(hash => {
    console.log('Hash ', hash)
  })
  .catch(err => console.error(err.message))

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
}); */

//check a Password
// Load hash from your password DB.

//bcrypt.compareSync(myPlaintextPassword, hash); // true
//bcrypt.compareSync(someOtherPlaintextPassword, hash); // false

//validate the hash generated 



bcrypt
  .hash(password, saltRounds)
  .then(hash => {
          userHash = hash 
    console.log('Hasher ', hash)
    validateUser(hash)
  })
  .catch(err => console.error(err.message))


  const validateUser=(hash)=> {
    bcrypt
      .compare(password, hash)
      .then(res => {
        console.log(res) // return true
      })
      .catch(err => console.error(err.message))        

 
}
