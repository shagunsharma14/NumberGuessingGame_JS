//1.generate an random num(between 1-100) and store it in a variable
//2.take input from user
//3.check input and tell correct, greater or lesser
//4.program terminate once the number of guesses exceeds 
//5.the score = 100-number of guesses

//to generate random number between 1-100
const random_num = () => {
  return Math.floor(Math.random() * 101) + 1
}

//to check user input
const check_user_input = (user_num, pc_num) => {
  if (user_num > pc_num) {
    return `correct number is lesser then ${user_num}`
  }
  else if (user_num < pc_num) {
    return `correct number is greater then ${user_num}`
  }
  else {
    return `you're correct`
  }
}

no_of_guesses = 10

//computer generation random number 
pc_num = random_num()
console.log("correct number is : "+pc_num)


while (no_of_guesses > 0) {
  user_num = Number.parseInt(prompt("Enter your number(1-100): "))
  //number of guesses counter
  no_of_guesses -= 1
  if (no_of_guesses == 0) {
    console.log("you ran out of guesses!!!")
  }

  //checking the input and if correct printing score else print the greater or lesser the correct number

  correction = check_user_input(user_num, pc_num)
  if (correction == "you're correct") {
    score = 100 - (10 - no_of_guesses)
    console.log(`${correction} your score is : ${score}`)
    break
  }
  else {
    console.log(correction)
  }
}


