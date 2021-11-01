# CPNT 262 Assignment 4 - Node command line app

### Author: Byung Uk An

### Links to:
- **Github Repo:** https://github.com/byung1211/cpnt262-a4

### What it is
- Tip Calculator
  This calculator shows the Tip Amound and Total Bill Amound as a result after calculating with your Bill Amound and Tip Percentage.

### How to use
- You can run the Tip Calculator with the command below. 
```
node app.js

or

npm run tip-calculator
```
- Firstly, you enter your bill amount on the message below.
```
Enter Bill Amount: *[Your Bill Amount]*
```
- Secondly, you enter your Tip Percentage on the message below.
 ```
Enter Tip Percentage(%): *[Your Tip Percentage(%)]*
```
- With your inputs, the Tip Calculator shows the outcome, both the Tip Amount and the Total Bill Amount.

- See the example of the usage below.

```
This is a simple tip calculator.

Enter Bill Amount: 120

Your bill amount is $120.00

Enter Tip Percentage(%): 12

Your tip percentage is 12%

========== Result ==========

Your Tip: $14.40

Your Total: $134.4

==========  Done  ==========
```
- 

  
### Attributions

- **readline-sync** package https://www.npmjs.com/package/readline-sync

### Comment
	
- For better user experience, I have chosen to use a third party library that is readline-sync module to get user inputs synchronously in the event driven readline logic.
