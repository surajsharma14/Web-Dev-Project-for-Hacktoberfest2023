//This is a C++ Program to Permute All Letters Of An Input String.
#include <iostream>
#include <string>
#include <algorithm>
 
using namespace std;
void permute (string temp_str, int start, int end)
{
  int i;
  if (start == end){
    cout << temp_str << " ";
  }
  else{
    for (int i = start; i < temp_str.length (); ++i){
      swap (temp_str[start], temp_str[i]);
      permute (temp_str, start + 1, end);
      swap (temp_str[start], temp_str[i]);
    }
  }
}
int main()
{
  string input_str;
  bool flag = false;
  cout << "Enter String : ";
  cin >> input_str;
  for (int i = 0; i < input_str.length () - 1; ++i)
  {
    if (input_str[i] == input_str[i + 1])
    {
    flag = true;
    break;
    }
    else {
      flag = false;
      break;
    }
  }
  if (flag)
  {
    cout << "The permutation of " << input_str << " is : " << input_str << endl;
  }
  else 
  {
    cout << "The permutations of " << input_str << " are : " << endl;
    permute (input_str, 0, input_str.length () - 1);
  }
  cout << endl;
  return 0;
}
