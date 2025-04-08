#include<stdio.h>
int max(int a , int b){
    int ans;
    if(a>b) {
        ans = a;
    }
    else
    ans = b;
    return ans;
}
int main(){

    // printf("enter 2 numbbers : ");
    // scanf(%d %d,&a,&b);

    printf("the greatest number is : %d",max(75,76));

}

#include<stdio.h>
int min(int num1 ,int num2);

int main() {
    int a = 100;
    int b = 200;
    int r;

    r = min(20,30);

    printf("the minimum value among the numbers is : %d\n",r);
    return 0;
}

int min(int num1,int num2){

    int answer;

    if (num1 > num2)

        answer = num2;

    else

    answer = num1;

    return answer;
}