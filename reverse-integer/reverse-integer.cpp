class Solution {
public:
int reverse(int x) {      
        long long int num = 0;
        while(x != 0) {
            int r = x % 10;
            num = num * 10 + r;
            if(num > INT32_MAX || num < INT32_MIN)
                return 0;
            x /= 10;
        }
        return int(num);
    }
};