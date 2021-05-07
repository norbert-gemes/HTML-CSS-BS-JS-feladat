function hsz_kalkulal() {
  var a_oldal = parseFloat(document.getElementById("a").value);
  var b_oldal = parseFloat(document.getElementById("b").value);
  var c_oldal = parseFloat(document.getElementById("c").value);
  var magasság = parseFloat(document.getElementById("m").value);
  if (a_oldal <= 0) {
    window.alert("Az a oldal értéke nem lehet 0 vagy annál kisebb szám!");
    return NaN;
  }
  if (b_oldal <= 0) {
    window.alert("A b oldal értéke nem lehet 0 vagy annál kisebb szám!");
    return NaN;
  }
  if (c_oldal <= 0) {
    window.alert("A c oldal értéke nem lehet 0 vagy annál kisebb szám!");
    return NaN;
  }
  if (magasság <= 0) {
    window.alert("A magasság értéke nem lehet 0 vagy annál kisebb szám!");
    return NaN;
  }
  var hkerület = a_oldal + b_oldal + c_oldal;
  var hterület = (a_oldal * magasság) / 2;
  document.getElementById("hkeredmeny").value =
    hkerület.toLocaleString() + "cm";
  document.getElementById("hteredmeny").value =
    hterület.toLocaleString() + "cm^2";
}

function TR_kalkulal() {
  var a_oldal = parseFloat(document.getElementById("aTR").value);
  var b_oldal = parseFloat(document.getElementById("bTR").value);
  var c_oldal = parseFloat(document.getElementById("cTR").value);
  var d_oldal = parseFloat(document.getElementById("d").value);
  var magasság = parseFloat(document.getElementById("mTR").value);
  if (a_oldal <= 0) {
    window.alert("Az a oldal értéke nem lehet 0 vagy annál kisebb szám!");
    return NaN;
  }
  if (b_oldal <= 0) {
    window.alert("A b oldal értéke nem lehet 0 vagy annál kisebb szám!");
    return NaN;
  }
  if (c_oldal <= 0) {
    window.alert("A c oldal értéke nem lehet 0 vagy annál kisebb szám!");
    return NaN;
  }
  if (d_oldal <= 0) {
    window.alert("A d oldal nem lehet 0 vagy annál kisebb szám!");
    return NaN;
  }
  if (magasság <= 0) {
    window.alert("A magasság értéke nem lehet 0 vagy annál kisebb szám!");
    return NaN;
  }
  var TR = a_oldal + c_oldal;
  var TRkerület = a_oldal + b_oldal + c_oldal + d_oldal;
  var TRterület = (TR / 2) * magasság;
  document.getElementById("TRkeredmeny").value =
    TRkerület.toLocaleString() + "cm";
  document.getElementById("TRteredmeny").value =
    TRterület.toLocaleString() + "cm^2";
}

function téglatest_kalkulal() {
  var a_oldal = parseFloat(document.getElementById("aT").value);
  var b_oldal = parseFloat(document.getElementById("bT").value);
  var c_oldal = parseFloat(document.getElementById("cT").value);
  if (a_oldal <= 0) {
    window.alert("Az a oldal értéke nem lehet 0 vagy annál kisebb szám!");
    return NaN;
  }
  if (b_oldal <= 0) {
    window.alert("A b oldal értéke nem lehet 0 vagy annál kisebb szám!");
    return NaN;
  }
  if (c_oldal <= 0) {
    window.alert("A c oldal értéke nem lehet 0 vagy annál kisebb szám!");
    return NaN;
  }
  var Tferedmeny =
    2 * (a_oldal * b_oldal + a_oldal * c_oldal + b_oldal * c_oldal);
  var Tteredmeny = a_oldal * b_oldal * c_oldal;
  document.getElementById("Tferedmeny").value =
    Tferedmeny.toLocaleString() + " cm^2";
  document.getElementById("Tteredmeny").value =
    Tteredmeny.toLocaleString() + " cm^3";
}

function kocka_kalkulal() {
  var a_oldal = parseFloat(document.getElementById("aK").value);
  if (a_oldal <= 0) {
    window.alert("Az a oldal értéke nem lehet 0 vagy annál kisebb szám!");
    return NaN;
  }
  var Kteredmeny = Math.pow(a_oldal, 3);
  var Kferedmeny = 6 * Math.pow(a_oldal, 2);
  document.getElementById("Kteredmeny").value =
    Kteredmeny.toLocaleString() + "cm^3";
  document.getElementById("Kferedmeny").value =
    Kferedmeny.toLocaleString() + "cm^2";
}
