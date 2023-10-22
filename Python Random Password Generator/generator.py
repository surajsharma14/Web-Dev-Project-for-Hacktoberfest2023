import random
import string

def generate_random_password(length):
    # Define characters to use in the password
    characters = string.ascii_letters + string.digits + string.punctuation

    # Ensure that the password contains at least one uppercase letter, one lowercase letter, one digit, and one special character
    while True:
        password = ''.join(random.choice(characters) for i in range(length))
        if (any(c.islower() for c in password) and
            any(c.isupper() for c in password) and
            any(c.isdigit() for c in password) and
            any(c in string.punctuation for c in password)):
            return password

# Generate and print a random password
length = int(input('Enter the length of the password: '))
password = generate_random_password(length)
print("Generated Password:", password)
