package dio.bootcamp.santander.q1;

import java.io.IOException;
import java.util.Scanner;

public class Idades {

	public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int cont = 0;
        int soma = 0;
        int n = leitor.nextInt();
        
//TODO: Complete os espa�os em branco com uma poss�vel solu��o para o desafio
        
        while (n >= 1){
            if (n >= 0) {
                soma += n;
                cont++;
            }
            n = leitor.nextInt();
        }
        double media = (double)soma/cont;
        System.out.println(String.format("%.2f", media));
    }

}
