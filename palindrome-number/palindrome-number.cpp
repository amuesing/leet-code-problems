class Solution {
public:
        bool isPalindrome(int p) {
			long int m_finalNum = 0;
			int x = p;
			if(x<0 ) return false;
			if( x<10 ) return true;
			while(x != 0 )
			{ 
				m_finalNum = m_finalNum *10 + x%10;
				x = x/10;
			}

			if(p ==m_finalNum)
				return true;
			return false;
}
};