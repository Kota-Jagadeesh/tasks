#include <stdio.h> 
#include <stdlib.h>  // used for exit() 
#include <string.h>  // for string operations strcmp() , strtok()
#include <unistd.h>  // for chdir() , getcwd() , fork , execvp
#include <sys/types.h> 
#include <sys/wait.h>  
 
#define MAX_INPUT 1024  
#define MAX_ARGS 100  

void read_input(char *input) {
    char cwd[1024]; 

    getcwd(cwd, sizeof(cwd));

    printf("%s> ", cwd);

    fgets(input, MAX_INPUT, stdin);

    input[strcspn(input, "\n")] = '\0';
}
// parsing the user input 
void parse_input(char *input, char **args) {
    int i = 0;
    char *token = strtok(input, " ");  // split the input by spaces using strtok
    // stores input in an array for execution 
	while (token) {
        args[i++] = token; // this stores each token as an argument
        token = strtok(NULL, " ");
    }
    args[i] = NULL; // 
	
}
// here we  handle the built in functions 
int execute_builtin(char **args) {
	// returns 1 for the built in functions , so they dont run in execute_command()
    if (!args[0]) return 1; // ignores the empty input
    if (strcmp(args[0], "exit") == 0) exit(0); // exits the shell
    if (strcmp(args[0], "cd") == 0) return chdir(args[1] ? args[1] : getenv("HOME")), 1; // used for changing the directory
    if (strcmp(args[0], "pwd") == 0) { // this prints the current directory
        char cwd[1024];
        if (getcwd(cwd, sizeof(cwd))) {
            printf("%s\n", cwd);
            fflush(stdout); // ensures immediate output
        } else {
            perror("mysh"); // prints error if "getcwd()" falis
        }
        return 1;
    }
    return 0; // if not a built in command then this returns zero
}

void execute_command(char **args) {
    if (fork() == 0) {  // creates a child process
        execvp(args[0], args); // replaces the child process with new programme
        perror("mysh"); // if execvp() fails , this prints an error msg
        exit(EXIT_FAILURE); // exits the child process if command fails
    } else {
        wait(NULL); // parent waits for child to finish
    }
}
// running the shell
int main() {
    char input[MAX_INPUT], *args[MAX_ARGS];
    while (1) { // infinite loop for continous shell operation
        read_input(input); //reads user command
        parse_input(input, args); // parses into commmand and arguments
        if (!execute_builtin(args)) execute_command(args); // run command
    }
    return 0;
}

// sys/wait.h - provides functions like wait()  this allow parent process to wait for its child process to finish