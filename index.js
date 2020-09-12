/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString) {
  let time = parseInt(timeString)
  if (time < 12) {
    return 'Good Morning';
  };

  if (time > 12 && < 5) {
    return 'Good Afternoon'
  };

  if (time > 5) {
    return 'Good Evening';
  };

}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
