// TODO: Define the WINNING_LINES constant
// Array of arrays, each containing 3 indices representing a winning line
// Example: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

// TODO: Initialize game state variables
// - board: Array of 9 elements (null for empty, "X" or "O" for filled)
// - currentPlayer: String ("X" or "O")
// - gameActive: Boolean (is the game still playable?)

// TODO: Implement checkWinner function
// Parameters: board array
// Returns: "X", "O", or null
// Logic: Loop through WINNING_LINES and check if all three positions have the same non-null value

// TODO: Implement checkDraw function
// Parameters: board array, winner
// Returns: boolean
// Logic: Return true if there's no winner and the board has no null values

// TODO: Implement getGameState function
// Parameters: board array
// Returns: object with status and winner
// Logic: Check for winner first, then draw, then in progress

// TODO: Implement handleSquareClick function
// Parameters: square element, index
// Logic:
// - Check if square is already filled or game is over
// - Update board array with current player
// - Update square display
// - Check game state (winner, draw, or continue)
// - Update status display
// - Switch current player if game continues

// TODO: Implement resetGame function
// Logic:
// - Reset board array to all nulls
// - Reset currentPlayer to "X"
// - Set gameActive to true
// - Clear all square displays
// - Update status display

// TODO: Implement updateStatusDisplay function
// Parameters: status message string
// Logic: Update the DOM element that shows game status

// TODO: Add event listeners
// - Add click listeners to all board squares
// - Add click listener to reset button

// TODO: Initialize the game on page load
// - Create initial board state
// - Set up event listeners
// - Display initial status
