class Osoba{
    constructor(imie, nazwisko, rokUrodzenia, plec){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.rokUrodzenia = rokUrodzenia;
        this.plec = plec;
    }

    podajWiek(){
        const d = new Date();
        return d.getFullYear() - this.rokUrodzenia;
    }
}

class Nauczyciel extends Osoba{
    constructor(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy){
        super(imie,nazwisko,rokUrodzenia,plec);
        this.nauczanyPrzedmiot = nauczanyPrzedmiot;
        this.rokRozpoczeciaPracy = rokRozpoczeciaPracy;
    }
    podajIloscLatPracy(){
        const d = new Date();
        return d.getFullYear() - this.rokRozpoczeciaPracy;
    }
}

class Wychowawca extends Nauczyciel{
    constructor(imie, nazwisko, rokUrodzenia,plec, nauczanyPrzedmiot, rokRozpoczeciaPracy, przydzielonaKlasa){
        super(imie, nazwisko, rokUrodzenia,plec, nauczanyPrzedmiot, rokRozpoczeciaPracy);
        this.przydzielonaKlasa = przydzielonaKlasa;
    }
}

var x = new Wychowawca('a','b',1974,'mężczyzna', 'fizyka', 2000, 'Osoba');
console.log(x);
console.log(x.podajWiek());
console.log(x.podajIloscLatPracy());