import re

# Sample input
arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170]
x = 110

# Convert the array to a string
arr_str = ','.join(str(i) for i in arr)

# Use regular expression to search for the element in the string
match = re.search(r'\b{}\b'.format(x), arr_str)

# Output
if match:
	# Calculate the index by counting the number of commas before the match
	result = arr_str[:match.start()].count(',')
	print(f"Element {x} is present at index {result}")
else:
	print(f"Element {x} is not present in the array")
