# CPC-TicTacToe

A tic-tac-toe game implementation with detailed logic explanations.

## Game Logic Overview

This project implements classic tic-tac-toe game logic with clear state management and win detection algorithms.

## Game State Representation

The game state is represented by a **board** stored as an array of nine elements. Each element can hold one of three values:
- `"X"` - Player X has marked this square
- `"O"` - Player O has marked this square  
- `null` - The square is empty

In TypeScript, this is typically typed as `Array<string | null>`.

**Example board representation:**
```typescript
const board: Array<string | null> = [
  "X", "O", "X",
  null, "O", null,
  "X", null, "O"
];
```

This represents the board layout:
```
X | O | X
---------
  | O |  
---------
X |   | O
```

## Game State Cycle

The game cycles through **four possible states**:

1. **X wins** - Player X has completed a winning line
2. **O wins** - Player O has completed a winning line
3. **Draw** - The board is full with no winner
4. **In Progress** - The game continues, waiting for the next move

The game state must be re-evaluated after every move by checking the board contents.

## Win Detection

To detect a win, the program checks **all eight possible winning lines** in tic-tac-toe:

### Winning Lines

Each winning line consists of three board positions (indices) that must all contain the same player's symbol:

```typescript
const WINNING_LINES = [
  [0, 1, 2],  // Top row
  [3, 4, 5],  // Middle row
  [6, 7, 8],  // Bottom row
  [0, 3, 6],  // Left column
  [1, 4, 7],  // Center column
  [2, 5, 8],  // Right column
  [0, 4, 8],  // Diagonal (top-left to bottom-right)
  [2, 4, 6]   // Diagonal (top-right to bottom-left)
];
```

### Win Detection Algorithm

The logic loops through each winning line and compares the board's values at the given indices:

1. For each winning line, extract the three board values
2. Check if all three values are equal AND not null
3. If all three match `"X"`, then X has won
4. If all three match `"O"`, then O has won
5. Store the result as a string indicating the winner or `null` if no winner exists

**Pseudocode:**
```typescript
function checkWinner(board: Array<string | null>): string | null {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    
    if (board[a] && 
        board[a] === board[b] && 
        board[a] === board[c]) {
      return board[a]; // Returns "X" or "O"
    }
  }
  
  return null; // No winner found
}
```

The checks use simple **equality comparisons on string values** to determine if a winning line is complete.

## Draw Detection

A **draw** occurs when:
1. There is no winner (no winning line completed)
2. The board contains no `null` values (all squares are filled)

### Draw Detection Algorithm

This is detected by checking whether every square contains either `"X"` or `"O"`:

```typescript
function checkDraw(board: Array<string | null>, winner: string | null): boolean {
  return winner === null && board.every(square => square !== null);
}
```

The `.every()` array method checks that all board positions are non-null. If the board is full and no winning condition was triggered, the game state is updated to `"draw"`.

The draw state can be tracked with:
- A string value: `"draw"`
- An enum: `GameState.DRAW`
- A boolean flag: `isDraw`

The formality of typing depends on project requirements.

## Game In Progress

If there is **no winner** and **at least one null square remains**, the game continues.

### Continuing Game Logic

This state means the players should keep taking turns. The program identifies this condition by:

1. Confirming no win condition is met (`winner === null`)
2. Verifying the board still includes `null` values (`board.includes(null)`)

```typescript
function isGameInProgress(board: Array<string | null>, winner: string | null): boolean {
  return winner === null && board.includes(null);
}
```

## Turn Management

The current player is tracked with a piece of state holding either `"X"` or `"O"`:

```typescript
let currentPlayer: "X" | "O" = "X"; // X always starts
```

The turn switches after each valid move:

```typescript
function makeMove(board: Array<string | null>, position: number, player: "X" | "O"): void {
  if (board[position] === null) {
    board[position] = player;
    currentPlayer = player === "X" ? "O" : "X"; // Switch turns
  }
}
```

## Complete Game State Check

After every move, the complete game state is evaluated:

```typescript
function getGameState(board: Array<string | null>): {
  status: "X_WINS" | "O_WINS" | "DRAW" | "IN_PROGRESS";
  winner: string | null;
} {
  const winner = checkWinner(board);
  
  if (winner === "X") {
    return { status: "X_WINS", winner: "X" };
  }
  
  if (winner === "O") {
    return { status: "O_WINS", winner: "O" };
  }
  
  if (board.every(square => square !== null)) {
    return { status: "DRAW", winner: null };
  }
  
  return { status: "IN_PROGRESS", winner: null };
}
```

## Summary

The tic-tac-toe game logic follows these key principles:

1. **State Representation**: 9-element array with `"X"`, `"O"`, or `null`
2. **Win Detection**: Check 8 winning lines using index triples and equality comparisons
3. **Draw Detection**: No winner + full board (no nulls)
4. **Game Continuation**: No winner + empty squares exist
5. **Turn Management**: Alternate between `"X"` and `"O"` after valid moves

This systematic approach ensures accurate game state tracking and reliable win/draw detection throughout gameplay.

## License

MIT
