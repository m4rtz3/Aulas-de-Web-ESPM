#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int n;
    cout << "Digite um numero: ";
    cin >> n;

    int cont = 0;
    int aux = 1;

    while (n > 0) {
        int fatorial = 1;
        
        for (int i = 1; i <= aux; i++) {
            fatorial *= i;
        }
        
        aux++;

        if (fatorial > n) {
            fatorial /= aux - 2;
            aux = 1;
        }
        
        n -= fatorial;
        cont++;
    }

    cout << cont << endl;

    return 0;
}