// sample code 

#include<stdio.h>

int main() {
    int a,b,c;

    a = 10;
    b = 5;
    c = a*b;

    printf("Total :%d",c);
    return 0;
}

// taking input as integers 

#include <stdio.h>
int main () {
    int price , quantity , total;

    printf("Enter price and quantity :");
    scanf("%d %d", &price ,&quantity);

    total = price*quantity;
    printf("The total Cost of items : %d",total);
}

// taking input as float 

#include<stdio.h>

int main() {
    float num;

    printf("Enter the value of float : %f");
    scanf("%f",&num);

    printf("The value you have entered is : %f",num);

}

// taking the input as both float and integer

#include<stdio.h>
int main() {
    int number;
    float number1;

    printf("Enter the value of number and number1 :");
    scanf("%d %f",&number,&number1);
    printf("The value of number : %d\n",number);
    printf("The value of number1 : %f\n",number1);
}

// Printing multiple characters 

#include<stdio.h>
int main() {
    char a;
    char b;

    printf("enter the value of characters a and b : %c\n");
    scanf("%c %c",&a,&b);
    
    printf("the value u have entered is : %c ,%c",a,b);

}


// Using getch method 

#include<stdio.h>
int main() {
    char a;

    printf("enter the value of the character : ");
    a = getchar();

    puts("You entered : ");
    putchar(a);

    printf("\n you have entered character : %c",a);
}

// Using characters 

#include<stdio.h>
int a = 10;  // Global declaration
int main() {
    char messages[] = "Hello ,World"; // Local Variable
    printf("%s",messages);
    return 0;
}

#include<stdio.h>
int main() {
    int a = "jagadeesh";
    printf("name:\tjagadeesh\tkota:\t99");
    printf("the length is : ",sizeof(a));
}
