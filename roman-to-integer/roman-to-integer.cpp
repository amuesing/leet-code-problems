class Solution {
public:
    int romanToInt(string s) {
        int result = 0;
        int i = 0;
        
        while (i < s.length()) {
            int temp = 0;
            if (s[i] == 'I') {
                if (s[i+1] == 'V') {
                    temp = 4;
                    i+=1; 
                }
                else if (s[i+1] == 'X') {
                    temp = 9;
                    i+=1;
                }
                else {
                    temp = 1;
                }
            }
            else if (s[i] == 'V') {
                temp = 5;
            }  
            else if (s[i] == 'X') {
                if (s[i+1] == 'L') {
                    temp = 40;
                    i+=1;
                }
                else if (s[i+1] == 'C') {
                    temp = 90;
                    i+=1;
                }
                else {
                    temp = 10;
                }
            }
            else if (s[i] == 'L') {
                temp = 50;
            }
            else if (s[i] == 'C') {
                if (s[i+1] == 'D') {
                    temp = 400;
                    i+=1;
                }
                else if (s[i+1] == 'M') {
                    temp = 900;
                    i+=1;
                }
                else {
                    temp = 100;
                }
            }
            else if (s[i] == 'D') {
                temp = 500;
            }
            else if (s[i] == 'M') {
                temp = 1000;
            }
            else {
                temp = 0;
            }
            i++;
            result += temp;
        }
        
        return result;
    }
};