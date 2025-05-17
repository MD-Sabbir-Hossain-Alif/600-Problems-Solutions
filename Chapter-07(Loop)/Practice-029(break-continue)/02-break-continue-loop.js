
//TODO: printing 1 to 40 except divisible with 7 using for loop
/* ------------------------------- Problem 02 ------------------------------- */
for (let i = 1; i <= 40; i++) {
    if(i % 7 == 0){
        continue;
    }
    console.log(i);
}

/* Output:

1
2
3
4
5
6
8
9
10
11
12
13
15
16
17
18
19
20
22
23
24
25
26
27
29
30
31
32
33
34
36
37
38
39
40

*/