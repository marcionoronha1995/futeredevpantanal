import java.util.Scanner;

public class Main {
    public static void main(String[] args) {


        System.out.println(" Calcule a média !");

        System.out.println("Você de informar 3 números!");

        Scanner numeroum_entrada = new Scanner(System.in);
        double numeroum;

        System.out.println("Digite o primeiro numero: "+"\n");
        numeroum = numeroum_entrada.nextInt();

        Scanner numerodois_entrada = new Scanner(System.in);
        double numerodois;

        System.out.println("Digite o segundo numero: "+"\n");
        numerodois = numerodois_entrada.nextInt();

        Scanner numerotrez_entrada = new Scanner(System.in);
        double numerotrez;

        System.out.println("Digite o terceiro numero: "+"\n");
        numerotrez = numerotrez_entrada.nextInt();

        double media;

        media = (numeroum + numerodois + numerotrez);

        media = media / 3;
        System.out.println("O valor médio dos números : "+" "+numeroum+","+numerodois+" e "+numerotrez+" é "+media+"\n");





    }
}