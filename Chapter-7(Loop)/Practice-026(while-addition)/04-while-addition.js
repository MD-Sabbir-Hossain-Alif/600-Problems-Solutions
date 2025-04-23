//TODO: printing 21 to 50 and sum using while loop
/* ------------------------------- Problem 04 ------------------------------- */
let num = 21;
let sum = 0;
while (num <= 50) {
    sum = sum + num;
    console.log(sum);
    num++;
}
console.log('sum: ',sum);

/* Output:

21
43
66
90
115
141
168
196
225
255
286
318
351
385
420
456
493
531
570
610
651
693
736
780
825
871
918
966
1015
1065
sum:  1065

*/