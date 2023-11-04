import java.util.InputMismatchException;
import java.util.Scanner;

public class TicTacToeGame {
    public static void main(String[] args) {
        char[][] board = new char[3][3];
        for (int row = 0; row < board.length; row++) {
            for (int col = 0; col < board[row].length; col++) {
                board[row][col] = ' ';
            }
        }

        char player = 'X';
        boolean gameOver = false;
        Scanner scan = new Scanner(System.in);

        // Instructions for Players
        System.out.println("Enter the numbers of your desired place\nThis table is just to indicate the numbers to write.\nEnjoy :)");
        for (int row = 0; row < board.length; row++) {
            for (int col = 0; col < board[row].length; col++) {
                System.out.print(row + " " + col  + " | ");
            }
            System.out.println();
        }
        System.out.println();

        while (!gameOver) {

            printBoard(board);
            System.out.println("Player " + player + " enter: ");

            // In Try and Catch to avoid losing progress if invalid number is entered.
            try {
                int row = scan.nextInt();
                int col = scan.nextInt();

                if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] == ' ') {
                    board[row][col] = player;
                    gameOver = haveWon(board, player);

                    if (gameOver) {
                        System.out.println("Player " + player + " has won!");
                        printBoard(board);
                    } else {
                        player = (player == 'X') ? 'O' : 'X';
                    }
                } else {
                    System.out.println("Invalid move. Try again!");
                }
            } catch (InputMismatchException e) {
            }
        }
    }

    public static boolean haveWon(char[][] board, char player) {

        for (int a = 0; a < board.length; a++) {
            // Check for rows
            if (board[a][0] == player && board[a][1] == player && board[a][2] == player) {
                return true;
            }

            // Check for cols
            if (board[0][a] == player && board[1][a] == player && board[2][a] == player) {
                return true;
            }

            // Check for diagonal
            if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
                return true;
            }
            if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
                return true;
            }
        }

        return false;
    }

    public static void printBoard(char[][] board) {
        for (int row = 0; row < board.length; row++) {
            for (int col = 0; col < board[row].length; col++) {
                System.out.print(board[row][col] + " | ");
            }
            System.out.println();
        }
    }


}
