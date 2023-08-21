#include <iostream>
using namespace std;

int main () {

    //tipo nome;
    int vidas=0;
    //10, 25, 100 (numeros inteiros)

    char letra='B';
    //'b'

    //caracter com até 20 letras
    //char letrasVetor[20];

    double decimal=5.2;
    //5

    //float decimal2=5.2;
    //5,99

    bool vivo=true;
    //true ou false

    string nome="banana";
    //"banana"

    cout << "Digite o numero de vidas: ";
    cin >> vidas;

    cout << "\n " << vidas << "\n";
    cout << letra << "\n";
    cout << decimal << "\n";
    cout << vivo << "\n";
    cout << vidas << "\n";
    cout << nome << "\n";

    return 0;
}