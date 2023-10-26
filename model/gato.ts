import { IAnimal } from "./IAnimal";

export class Gato implements IAnimal {
    public nome: string;
    public idade: number;
    public estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    comer(tipoComida: string): void {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}.`);
    }
}