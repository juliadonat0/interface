export interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    comer(tipoComida: string): void;
}
