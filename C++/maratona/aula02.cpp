#include <iostream>
#include <cmath>
using namespace std;

int main () {
    int capacidade, nmrAlunos;

    cout << "Digite a capacidade maxima da cabine" << endl;
    cin >> capacidade;

    cout << "Digite o numero de alunos" << endl;
    cin >> nmrAlunos;

    if ((capacidade < 1) || (capacidade > 100)) {
        cout << "Valor invalido";
        return 1;
    }

    if ((nmrAlunos < 1) || (nmrAlunos > 1000)) {
        cout << "Valor inválido";
        return 1;
    }

    int nmrViagens = ceil(static_cast<double>(nmrAlunos) / (capacidade - 1));
    cout << "Numero minimo é de " << nmrViagens << endl;

    return 0;
}