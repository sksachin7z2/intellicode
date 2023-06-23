
//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution
{
    public:
    //Function to check if brackets are balanced or not.
    bool ispar(string x)
    {
        // Your code here
        
        stack<char>s;
        for(int i=0;i<x.length();i++){
            if(s.empty())
            {
                s.push(x[i]);
            }
            else if(x[i]==']' &&s.top()=='[' || x[i]=='}' &&s.top()=='{'  ||x[i]==')' &&s.top()=='('){
                s.pop();
            }
            else{
                s.push(x[i]);
            }
        }
        return s.empty();
    }

};
//{ Driver Code Starts.

int main()
{
   int t=10;
   string temp="[{()}]";
   string a;
//    cin>>t;
   while(t--)
   {
    //    cin>>a;
    for(int i=0;i<rand()%7;i++){
        a+=temp[i];
    }
    cout<<a<<endl;
       Solution obj;
       if(obj.ispar(a))
        cout<<"balanced"<<endl;
       else
        cout<<"not balanced"<<endl;
   }
}
// } Driver Code Ends