function Osoba(imie, nazwisko, rokUrodzenia, plec){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.rokUrodzenia = rokUrodzenia;
    this.plec = plec;
}

Osoba.prototype.podajWiek = function(){
  var d = new Date();
  return d.getFullYear() - this.rokUrodzenia;
};

function Nauczyciel(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy){
    Osoba.call(this,imie,nazwisko,rokUrodzenia,plec);
    this.nauczanyPrzedmiot = nauczanyPrzedmiot;
    this.rokRozpoczeciaPracy = rokRozpoczeciaPracy;
}

Nauczyciel.prototype = Object.create(Osoba.prototype);
Nauczyciel.prototype.constructor = Nauczyciel;
Nauczyciel.prototype.podajIloscLatPracy = function(){
  var d = new Date();
  return d.getFullYear() - this.rokRozpoczeciaPracy;
};

function Wychowawca(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy, przydzielonaKlasa){
    Nauczyciel.call(this,imie,nazwisko,rokUrodzenia,plec,nauczanyPrzedmiot, rokRozpoczeciaPracy);
    this.przydzielonaKlasa = przydzielonaKlasa;
}

Wychowawca.prototype = Object.create(Nauczyciel.prototype);
Wychowawca.prototype.constructor = Wychowawca;


var x = new Wychowawca('x', 'y', 1974, 'mężczyzna', 'fizyka', 2000, 'Osoba');
console.log(x);
console.log(x.podajWiek());
console.log(x.podajIloscLatPracy());