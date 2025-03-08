// // using while loop

#include<stdio.h>
int main() {
    int a = 1; // start

    while (a<100){ // stop
        printf("A : %d\n",a);
      
        a++; // step
    }

    return 0;
}

// infinite loops example :

#include<stdio.h>
int main () {
    for( ; ; ){
        printf("C language\n");
        break;
    }
}

