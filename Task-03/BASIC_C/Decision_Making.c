// Using if statements

#include <stdio.h>
int main () {
    int a;

    a = 12;
    printf("the value of a is : %d\n",a);

    if(a<20) {
        printf("a is less than 20\n");
    }
   
    return 0;
}

// Using if-else statements 

#include <stdio.h>
int main() {
    int amount = 30;
    float discount;
    printf("Amount : %d\n",amount);

    if (amount > 100) {
       discount = amount*10/100;
       printf("discount : %f\n",discount);
    }
    else
       printf("Discount not applicable\n");
    return 0;

} 

// pre , post - increment and decrement operators

#include<stdio.h>
int main() {
    int a = 5,b = 5,c = 5,d = 5;

    a++;
    ++b;
    --c;
    c--;

    printf("A : %d");

}

// using switch case 

#include<stdio.h>
int main() {
    char ch;
    printf("time code : %c\n",ch);
    scanf("%c",&ch);

    ch="a";

    switch (ch) {
        case 'a':
        printf("good afternoon");
        break;
        case 'e':
        printf("good evening");
        break;
        case 'm':
        printf("good morning");

    }
    return 0;
}