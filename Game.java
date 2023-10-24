import java.util.*;
public class Game{
	public static void main(String[] args){
	Scanner sc = new Scanner(System.in);
	int guess = -1;
	int rand = 1000 + (int)(Math.random()*(9001));
	//int rand=4567;
	int a=rand;
	System.out.println("Enter your 4 digit guess");
	guess = sc.nextInt();
	int b=guess;
	int[] ar = new int[5];
	int[] br = new int[5];
	int i=0;
	int j=0;
	int count=0;
	int c=0;
	int d=rand;
	int z=guess;
	while(a!=0)
	{
		ar[i]=a%10;
		a=a/10;
		i++;
	}
	while(b!=0)
	{
		br[j]=b%10;
		b=b/10;
		j++;
	}
	for(i=0;i<4;i++)
	{
		for(j=0;j<4;j++)
		{
			if(br[i]==ar[j])
				count++;
		}
	}
	for(i=0;i<4;i++)
	{
		for(j=0;j<4;j++)
		{
			if(br[i]==ar[j]&& br[i+1]==ar[j+1])
				c++;
		}
	}
	int[] cr = new int[4];
	int[] dr = new int[4];
	int y=0,r=0,l=0;
	while(d!=0)
	{
		cr[r]=d%100;
		d=d/10;
		//System.out.print(cr[r]+"\t");
		r++;
	}
	while(z!=0)
	{
		dr[l]=z%100;
		z=z/10;
		//System.out.print(dr[l]+"\t");
		l++;
		
	}
	for(int k=0;k<3;k++)
	{
		for(int h=0;h<3;h++)
		{
			if(dr[k]==cr[h])
			y++;
		}
	}		
	System.out.println(rand);
	if(guess==rand)
		System.out.println("Congratulations....your award is $10,000");
	else if(count==4)
		System.out.println("Congratulations....your award is $3,000");
	else if(y!=0)
		System.out.println("Congratulations....your award is $2,000");
	else
	{
		if(c!=0)
			System.out.println("Congratulations....your award is $1,000");
		else
			System.out.println("Better Luck Next Time");
	}

	
	}
}
