#include<iostream>
using namespace std;
void oddeven(int n){
	if(n==0){
		return ;
	}
	if(n%2==1){
		cout<<n<<"\n";
	}
	oddeven(n-1);
	if(n%2==0){
		cout<<n<<"\n";
	}
		


}
int main() {
	int n;
	cin>>n;
	oddeven(n);
	return 0;
}