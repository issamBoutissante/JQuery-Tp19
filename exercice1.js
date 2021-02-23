$(function () {
  var unites = [
    "zero",
    "un",
    "deux",
    "trois",
    "quatre",
    "cinq",
    "six",
    "sept",
    "huit",
    "neuf",
    "dix",
    "onze",
    "douze",
    "treize",
    "quatorze",
    "quinze",
    "seize",
    "dix-sept",
    "dix-huit",
    "dix-neuf",
  ];
  var dizaines = [
    "",
    "",
    "vingt",
    "trente",
    "quarante",
    "cinquante",
    "soixante",
    "soixante",
    "quatre-vingts",
    "quatre-vingts",
  ];
  function NombreEntre_0_99(nombre) {
    //si "nombre" inferieur de 20
    if (parseInt(nombre) < 20) {
      return unites[parseInt(nombre)];
    }
    if (nombre[1] == 0) {
      if (nombre == "70") {
        return "soixante-dix";
      }
      if (nombre == "90") {
        return "quatre-vingts-dix";
      }
      return dizaines[nombre[0]];
    }
    //si "nombre" inferieur de 60
    if (parseInt(nombre) < 60) {
      return `${dizaines[parseInt(nombre[0])]}-et-${
        unites[parseInt(nombre[1])]
      }`;
    }
    //si "nombre" entre 60 et 99 et paire
    if (parseInt(nombre[0]) % 2 == 0) {
      return `${dizaines[parseInt(nombre[0])]}-et-${
        unites[parseInt(nombre[1])]
      }`;
    }
    //si "nombre" entre 60 et 99 et impaire
    return `${
      dizaines[parseInt(nombre[0])]
    }-${unites[parseInt("1" + nombre[1])]}`;
  }
  function NombreEntre_100_999(nombre) {
    if (nombre == "100") {
      return "cent";
    }
    return `${
      unites[parseInt(nombre[0])]
    } cent-${NombreEntre_0_99(`${nombre[1]}${nombre[2]}`)}`;
  }
  $("input:first").keyup(function (e) {
    var nombre = e.target.value;
    if (!nombre) return;
    if (nombre.length <= 2) {
      $("input:last").val(NombreEntre_0_99(nombre));
      return;
    }
    $("input:last").val(NombreEntre_100_999(nombre));
  });
});
