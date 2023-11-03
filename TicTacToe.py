def print_board(board):
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def check_winner(board, player):
    # Check rows, columns, and diagonals
    for i in range(3):
        if all(board[i][j] == player for j in range(3)) or all(board[j][i] == player for j in range(3)):
            return True
    if all(board[i][i] == player for i in range(3)) or all(board[i][2 - i] == player for i in range(3)):
        return True
    return False

def is_full(board):
    return all(board[i][j] != " " for i in range(3) for j in range(3))

def play_game():
    board = [[" " for _ in range(3)] for _ in range(3)]
    player = "X"
    winner = None

    while True:
        print_board(board)
        print(f"Player {player}'s turn")

        row, col = map(int, input("Enter row and column (0, 1, 2): ").split())
        if board[row][col] == " ":
            board[row][col] = player
        else:
            print("Invalid move. Try again.")
            continue

        if check_winner(board, player):
            winner = player
            break

        if is_full(board):
            break

        player = "O" if player == "X" else "X"

    print_board(board)

    if winner:
        print(f"Player {winner} wins!")
    else:
        print("It's a draw!")

if __name__ == "__main__":
    play_game()
