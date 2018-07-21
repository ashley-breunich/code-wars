# Replace All Dots

### Instructions
The code provided is supposed to replace all the dots . in the specified String str with dashes -

But it's not working properly.

####### Task
Fix the bug so we can all go home early.

###### Notes
String str will never be null.

[Link to Kata](https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript) 

### Solving Process
1. The first thing I did was test the current non-working code to see what errors it threw.
2. Then I researched what the str.replace function did and tried a few different options but it still wasn't working - it was only switching out the first period. 
3. Finally, I researched how to change out all periods in a string to another punctuation mark and found out that you need to add on a "g" at the end in order to make the change globally. Then the tests passed!  