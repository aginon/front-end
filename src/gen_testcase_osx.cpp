// LANG : C++
#include <fstream>  
#include <sstream>
#include <chrono>
#include <random>
#include <iomanip>

#include <cstdio>
#include <cstdlib>
#include <cstring>

#include <ctime>
#include <iostream>

#include <set>
#include <map>
#include <list>
#include <deque> /* have op [] */
#include <queue>
#include <stack>
#include <string>
#include <vector>
#include <utility>
#include <algorithm>

#define READ(f)  freopen(f, "r", stdin)
#define WRITE(f) freopen(f, "w", stdout)

#define ZERO(x) memset(x,0,sizeof(x))
#define D(a) cout << "[ " << #a << " : " << a << " ]" << endl;
#define TIME() cerr << "Time elapsed: " << 1.0 * clock() / CLOCKS_PER_SEC << " s." << endl;

#define FOR(i, a, b) for(int i(a);i<=b;++i)
#define REP(i, n) FOR(i,0,(n)-1)
#define FORD(i, a, b) for(int i(a);i>=b;--i)

#define MAX_I 2147483647
#define MAX_LL 9223372036854775807LL

#define VIT(T) vector<T>::iterator
#define MAXPQ(T) priority_queue<T>
#define MINPQ(T) priority_queue<T,vector<T>,greater<T> >

// template< class T > bool inside(T a, T b, T c) { return a<=b && b<=c; }
template< typename T > bool inside(T a, T b, T c) { return ( a<=b and b<=c ) ; }

// #define compress(x) {sort(ALL(x));(x).resize(distance((x).begin(), unique(ALL(x))));}

//int dx[]={ 0, 1, 0,-1, 1, 1,-1,-1 };
//int dy[]={ 1, 0,-1, 0,-1, 1, 1,-1 };
//template<typename T> T test( T &a ){ }
//[this](int a , int b ){ return } lamda
//for (const int Pi : P) // all int P 

using namespace std;

//typedef long long llint;
//typedef pair<int ,int > PII ;
//typedef pair<llint ,llint > PLL ;
//typedef pair<int ,PII > PIPII ;

const int inf = -1u/2 ; // 1023456789 
const int MOD = 1 ;

const int nCase = 10 ;
string taskName = "test";

vector<int>   n = { 0 , 
					1 , 10 , 20 , 25 ,  
					1000 , 2000 , 3000 , 40000 , 80000 , 100000 , 
					200 , 300 , 350 , 400 , 450 , 600 , 600 , 600, 600 , 600 } ;

vector<int> mod = { 0 , 
					101 , 101 , 101 , 101 ,
					20 , 1223 , 500000 , 100 , 31 , 500000 , 
					4001 , 5001 , 6001 , 7001 , 21 , 8001 , 8001 , 9001 , 10001 , 10001 } ;

vector<int> extCase = {1} ; 

vector<int> seq;

unsigned seed = chrono::system_clock::now().time_since_epoch().count(); // obtain a seed from the system clock:
minstd_rand0 rnd (seed);  // minstd_rand0 is a standard linear_congruential_engine
/*// obtain a seed from the user: 
 	string str; getline(cin,str); // get seed form user 
  	seed_seq seed (str.begin(),str.end());*/

void extra_gen(){
	cerr << "EXTRA GEN " << endl;
	for(int tCase : extCase ){
		cerr << "case : " << setfill(' ') << setw(2) << tCase << " : " ;
		stringstream fn ; fn << tCase << ".in" ; 
		ofstream testCase ( fn.str() ) ;
		//---------- start ----------  
		seq.clear() ; 
		testCase << n[tCase] << endl ; // remember endl = \n + flush buffer 
		FOR( i , 1 , 200 ){
			FOR( j , 1 , 200 ) {
				testCase <<((i+j)%6)+1 ;
 
			}
			testCase << endl ;

		}
		
		//---------- end ------------
		testCase << endl;
		testCase.close(); 
		cerr << "COMPLETE" << endl;
	}
}

void solution_gen(){
	cerr << "SOLUTION GEN " << endl ;
	cerr << "compile " << taskName << " : " ;
	stringstream comp ;
	comp << "g++ -std=c++11 " <<taskName << ".cpp -o " <<taskName ; 
    system( comp.str().c_str() ) ;
    cerr << "COMPLETE" << endl;
    FOR( tCase , 1 , 11 ){
        cerr << "case : " << setfill(' ') << setw(2) << tCase << " : " ; 
        stringstream cmd ;
        cmd << "./"<<  taskName << " <" << tCase << ".in >" << tCase << ".sol" ;
        system( cmd.str().c_str() ) ;
        cerr << "COMPLETE" << endl;
    }
}
 //./a.out <1.in> 1.sol
void input_gen(){
	cerr << "NORMAL GEN " << endl ;
	FOR( tCase , 10 , 10 ){
		cerr << "case : " << setfill(' ') << setw(2) << tCase << " : " ; 
		//string fn = to_string( tCase ) + ".in" ;
		stringstream fn ; fn << tCase << ".in" ; 
		ofstream testCase ( fn.str() ) ;
		/**///---------- start ----------
		int b = mod[tCase]/2;
		testCase << n[tCase] << ' ' << rnd()%mod[tCase] <<endl ; // remember endl = \n + flush buffer 
		
		FOR( i , 1 , n[tCase] ){
			testCase << b-(rnd()%mod[tCase])/2  << ' ' << b+(rnd()%mod[tCase])/2 << endl;
		}
		//---------- end ------------*/
		testCase << endl;
		testCase.close(); 
		cerr << "COMPLETE" << endl;
	}
}

int main(int argc, char const *argv[]){
	// stream<<setfill('0')<<setw(2)<<value; 02.in , stream << boost::format("%|02|")%value;
  	// input_gen();
  	extra_gen();
  	// solution_gen();
  	
	return 0 ;

}
