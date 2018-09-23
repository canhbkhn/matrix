//Kiem tra so doi xung

#include<iostream>

using namespace std;

int main()
{
	int n, temp, remp;
	int reverse = 0;
	
	cin >> n;
	temp = n;
	while(temp != 0)
	{
		remp = temp%10;
		reverse = reverse*10 + remp;
		temp = temp / 10;
	}
	if(reverse == n)
		cout << "Day la so doi xung " << endl;
	cout << "Day khong la so doi xung" << endl;
	return 0;
}