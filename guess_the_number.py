import random

def guess_the_number():
    # Set the range for the random number
    low = 1
    high = 100
    secret_number = random.randint(low, high)
    attempts = 0

    print("Welcome to the Number Guessing Game!")
    print(f"I'm thinking of a number between {low} and {high}.")

    while True:
        try:
            # Get the player's guess
            guess = int(input("Take a guess: "))
            attempts += 1

            # Check if the guess is correct
            if guess < secret_number:
                print("Too low! Try a higher number.")
            elif guess > secret_number:
                print("Too high! Try a lower number.")
            else:
                print(f"Congratulations! You guessed the number {secret_number} in {attempts} attempts.")
                break
        except ValueError:
            print("Please enter a valid number.")

if __name__ == "__main__":
    guess_the_number()
