import { Gato } from "./model/gato";
import { Cachorro } from "./model/cachorro";



function main() {
    const gato = new Gato("Mingau", 10, true);
    const cachorro = new Cachorro("Bidú", 2, true);

    console.log(gato);
    console.log(cachorro);
    gato.comer("ração");
    cachorro.comer("bife");
}

main()