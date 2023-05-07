import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Convertendo a temperatura!");

        Scanner temperatura_entrada = new Scanner(System.in);
        double temperatura;

        System.out.println("Digite a temperatura: ");
        temperatura = temperatura_entrada.nextInt();

        System.out.printf("Você digitou a temperatura " + temperatura + "\n");
        double temperatura_f;
        temperatura_f = (temperatura * 1.8) + 32;

        System.out.printf("A temperatura " + temperatura + " em graus Celsius em Fahrenheit é  " + temperatura_f + "\n");
    }
}