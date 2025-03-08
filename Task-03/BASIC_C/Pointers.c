#include<stdio.h>
int main() {
    int a = 20;
    int *value = &a;    
// here we are printing the current value
    printf("the value of a = %d\n",*value);

// we are changing the value
    *value = 30;

// printing the changed value
    printf("the value of a after changing is = %d\n",*value);
    return 0;
}

#include<stdio.h>
int main() {
    int a = 10;
    float f = 100.2;
    char c = "d";
    // here we declare pointers and initialise them 
    int *abc_one = &a;
    float *abc_two = &f;
    char *abc_three = &c;
    // here we will print the values 

    printf("the value of integer is = %d\n",*abc_one);
    printf("the value of float is = %f\n",*abc_two);
    printf("the value of character is = %c\n",*abc_three);

    // printing the size of the pointer variables 

    printf("the size of the integer pointer = %lu\n",sizeof(abc_one));
    printf("the size of the float pointer = %lu\n",sizeof(abc_two));
    printf("the value of chharacter pointer = %lu\n",sizeof(abc_three));

}

#include<stdio.h>
int main() {
    int a = 300;
    float f = 23.6;

    // printf("the value of a = %d\n",a);
    // printf("the adress of a = %p\n",&a);
    printf("Value = %d Adress = %p",a,&a);
    printf("Value = %f Adress = %p",f,&f);

    return 0;
}
#include<stdio.h>
int main() {
    int a;
    printf("the value of a = ");
    scanf("%d",&a);
    return 0;
}

#include<stdio.h>
#include<sys/types.h>
#include<unistd.h>

int main () {
    fork();
    fork();
    fork();
    printf("hello!\n PID = %d\n",getpid());

    return 0;
}