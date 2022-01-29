/* Let's build a deck of cards! 

Resources:
https://developer.mozilla.org/en-US/docs/Web/JavaScript
https://www.w3schools.com/js/

A deck of cards contains 4 suits, 'Hearts', 'Clubs', 'Diamonds', 'Spades' each containing the following ranks, 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'. Let's create an array that contains all 52 cards! */
// ------------------------------------------------------

// Create a function called 'createDeck'.

  // In this function, create an array that contains the 4 suits of cards and name it 'suits'.
  // Example: Hearts, Clubs, Diamonds and Spades.
  
  // Create an array that contains each number card and picture card and name it 'ranks'.
  // Example: Ace, 2 - 10, Jack, Queen, King.
  
  // Create an empty array named 'deck'.
 
  // Create a 'for loop' that cycles through the 4 suits of cards.
  
    // In the 'for loop', create another 'for loop' to cycle through the 'ranks' array.
    
      // Log the ranks and suits your loops create within this 'for loop'.
      // Example: 6 of Clubs
      //console.log(ranks[rankCounter] + ' of ' + suits[suitCounter]);
      // Also, push each result to the deck array.
      
    

  

  // Return the 'deck' array
  







/* Let's shuffle that deck of cards! */
// ------------------------------------------------------



  // In this function, create a 'for loop' that cycles through all 52 cards of the 'deck' array.
  
    // Create a temporary variable using the 'deck' array and the counter from the 'for loop' and name it 'tempCard'.
    // Example: deck[i]
    
    // Create a temporary variable using a random number from the 'deck' array length and name it 'randomIndex'.
    
    // Replace the 'deck' array element using the counter from the 'for loop' with a 'deck' array element using the 'randomIndex'.
    
    // Replace the 'deck' array element using the 'randomIndex' with the 'tempCard' variable we stored before.
    
  

// Create a variable that when called, runs the 'createDeck' function and name it 'testDeck'.

// Pass the 'testDeck' variable as the parameter in our newly created 'shuffleDeck' function.

// Log 'testDeck'
//console.log(testDeck);






/* Let's draw 5 cards! */
// ------------------------------------------------------

// Create an empty array and name it 'myHand'.


// Create a function and name it 'drawFive'.

  // Create a 'for loop' that cycles through 5 cards.

    // Push the 'testDeck' array element using the counter from the 'for loop'to the 'myHand' array.
    
  
  // Log 'myHand' after the 'for loop' finishes but before closing the 'drawFive' function.
  


// Run the 'drawFive' function.
