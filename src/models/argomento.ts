export interface Argomento {
    id_arg: number,
    name: string,
    stato: Stato,
    completamento: number,
    extra2: string,
}

enum Stato {
    stato0 = 0,
    stato1 = 1,
    stato2 = 2,
    stato3 = 3,
    stato4 = 4
}