//Proyecto Freelander: Una calculadora para saber cuánto cobrar como freelancer.

////////////////////////////////////////////////////////////////////////////////
// alert
// Bienvienida.
alert(
  "Bienvenido a Freelo Calculator. Una herramienta simple para que sepas cuanto cobrar como freelancer."
);

////////////////////////////////////////////////////////////////////////////////
// let / prompt / while / switch
// Solicitud de ingreso de la moneda para hacer el cálculo.
let moneda = prompt(
  "Ingresa LA MONEDA con la que deseas hacer el cálculo."
).toLowerCase();

while (
  moneda !== "dólar" &&
  moneda !== "dólares" &&
  moneda !== "dolar" &&
  moneda !== "dolares" &&
  moneda !== "euro" &&
  moneda !== "euros"
) {
  switch (moneda) {
    case "peso":
    case "pesos":
    case "peso argentino":
    case "pesos argentinos":
      alert(
        "¿Pero estás loco?. ¿Cómo vas a calcular en PESOS jaja?. Esa moneda devalúa constantemente. Elige por favor una moneda estable de intercambio y ahorro a nivel mundial."
      );
      break;
    case "real":
    case "reales":
    case "peso uruguayo":
    case "pesos uruguayos":
    case "libra":
    case "libras":
      alert(
        "No te recomendamos hacer el cálculo con esa moneda ya que es de uso local. Elige por favor una moneda de intercambio y ahorro a nivel mundial."
      );
      break;
    default:
      alert(
        "No ingresaste una moneda válida o el sistema no puede hacer el cálculo con esa moneda."
      );
      break;
  }
  moneda = prompt(
    "Ingresa LA MONEDA con la que deseas hacer el cálculo."
  ).toLowerCase();
}

// if
// Cambio del string "dolar o "dólar" o "euro" de singular a plural para el caso
// en el que el usuario lo ingrese en singular. Para que quede bien en la redacción.

if (
  moneda === "dolar" ||
  moneda === "dólar" ||
  moneda === "dolares" ||
  moneda === "dólares"
) {
  moneda = "DÓLARES";
} else {
  moneda = "EUROS";
}

// console.log para registrar el ingreso
console.log("La moneda es: " + moneda);

////////////////////////////////////////////////////////////////////////////////
// Solicitud de ingreso del monto que pretende ganar por mes.
let ingresos = parseInt(
  prompt(
    "Calculemos TUS INGRESOS:\nIngresa EL MONTO en " +
      moneda +
      " de lo que pretendes ganar por Mes."
  ).toLowerCase()
);

while (isNaN(ingresos) || ingresos < 1) {
  if (ingresos < 1) {
    alert("Debes Ingresar un número mayor a 0.");
  } else {
    alert(
      "No ingresaste un número válido. Si escribiste el número con letras vuelve a intentarlo con números."
    );
  }
  ingresos = parseInt(
    prompt(
      "Ingresa EL MONTO en " + moneda + " de lo que pretendes ganar por Mes."
    ).toLowerCase()
  );
}

// console.log para registrar que los ingresos sean mayores que los gastos
console.log("Pretension de ingresos mensuales: " + ingresos + " " + moneda);
////////////////////////////////////////////////////////////////////////////////
// Solicitud de ingreso de los días que pretende trabajar por mes.
let dias = parseInt(
  prompt(
    "Ingresa La Cantidad de DÍAS que pretendes trabajar por Mes."
  ).toLowerCase()
);

while (isNaN(dias) || dias > 31 || dias < 1) {
  if (dias > 31 || dias < 1) {
    alert("Debes Ingresar un número entre 1 y 31.");
  } else {
    alert(
      "No ingresaste un número válido. Si escribiste el número con letras vuelve a intentarlo con números."
    );
  }
  dias = parseInt(
    prompt(
      "Ingresa La Cantidad de DÍAS que pretendes trabajar por Mes."
    ).toLowerCase()
  );
}

// console.log para registrar el ingreso
console.log("Cantidad de días laborables por mes: " + dias + " días.");
////////////////////////////////////////////////////////////////////////////////
// Solicitud de ingreso de las horas que pretende trabajar por día.
let horas = parseInt(
  prompt(
    "Ingresa La Cantidad de HORAS que pretendes trabajar por Día."
  ).toLowerCase()
);

while (isNaN(horas) || horas > 24 || horas < 1) {
  if (horas > 24 || horas < 1) {
    alert("Debes ingresar un número entre 1 y 24.");
  } else {
    alert(
      "No ingresaste un número válido. Si escribiste el número con letras vuelve a intentarlo con números."
    );
  }
  horas = parseInt(
    prompt(
      "Ingresa La Cantidad de Horas que pretendes trabajar por Día."
    ).toLowerCase()
  );
}

alert(
  "Pretendes ganar " +
    ingresos +
    " " +
    moneda +
    " mensuales trabajando " +
    horas +
    " horas por día durante " +
    dias +
    " días por mes.\nPara lograrlo y cotizar los trabajos correctamente debemos calcular el precio a cobrar por Hora Laborable. Vamos a calcularlo ..."
);

// console.log para registrar el ingreso
console.log("Cantidad de horas laborables por mes es: " + horas + " horas.");
////////////////////////////////////////////////////////////////////////////////
//Objetos
//Calcular la costosFijosTotales de Gastos Fijos en un objeto.

class GastosFijos {
  constructor(oficina, internet, software) {
    this.oficina = oficina;
    this.internet = internet;
    this.software = software;
  }
  resumen() {
    alert(
      "Tus Gastos Fijos mensuales son " +
        (this.oficina + this.internet + this.software) +
        " " +
        moneda.toUpperCase() +
        "."
    );
  }
}

let gastosOficina = parseInt(
  prompt(
    "Calculemos TUS GASTOS FIJOS mensuales:\nIngresa tus Gastos de OFICINA en " +
      moneda.toUpperCase() +
      " por Mes."
  ).toLowerCase()
);

while (isNaN(gastosOficina) || gastosOficina < 1) {
  if (gastosOficina < 1) {
    alert("Debes Ingresar un número mayor a 0.");
  } else {
    alert(
      "No ingresaste un número válido. Si escribiste el número con letras vuelve a intentarlo con números."
    );
  }
  gastosOficina = parseInt(
    prompt(
      "Ingresa tus Gastos de OFICINA en " + moneda.toUpperCase() + " por Mes."
    ).toLowerCase()
  );
}

let gastosInternet = parseInt(
  prompt(
    "Ingresa tus Gastos de INTERNET en " + moneda.toUpperCase() + " por Mes."
  ).toLowerCase()
);

while (isNaN(gastosInternet) || gastosInternet < 1) {
  if (gastosInternet < 1) {
    alert("Debes Ingresar un número mayor a 0.");
  } else {
    alert(
      "No ingresaste un número válido. Si escribiste el número con letras vuelve a intentarlo con números."
    );
  }
  gastosInternet = parseInt(
    prompt(
      "Ingresa tus Gastos de INTERNET en " + moneda.toUpperCase() + " por Mes."
    ).toLowerCase()
  );
}
let gastosSoftware = parseInt(
  prompt(
    "Ingresa tus Gastos de SOFTWARE en " + moneda.toUpperCase() + " por Mes."
  ).toLowerCase()
);

while (isNaN(gastosSoftware) || gastosSoftware < 1) {
  if (gastosSoftware < 1) {
    alert("Debes Ingresar un número mayor a 0.");
  } else {
    alert(
      "No ingresaste un número válido. Si escribiste el número con letras vuelve a intentarlo con números."
    );
  }
  gastosSoftware = parseInt(
    prompt(
      "Ingresa tus Gastos de SOFTWARE en " + moneda.toUpperCase() + " por Mes."
    ).toLowerCase()
  );
}

const persona1 = new GastosFijos(gastosOficina, gastosInternet, gastosSoftware);

persona1.resumen();

//Declaración de la variable gastosFijosTotales para  guardar la suma de los Gastos fijos. Para cuando haya que sacar el total
// de los gastos por hora reutilizando la arrow_function calcularPorHora.
let gastosFijosTotales = gastosOficina + gastosInternet + gastosSoftware;

// console.log para registrar el ingreso
console.log("Gastos fijos por mes es: " + gastosFijosTotales + " " + moneda);
////////////////////////////////////////////////////////////////////////////////
//Arrays
//Calcular la costosFijosTotales de Costos de Vida en un array

const costosDeVida = ["Tu Seguro de salud.", "Tus Impuestos.", "Otros Costos."];
const resultadoTotal = [];

for (let index = 0; index < costosDeVida.length; index++) {
  let resultado = parseInt(
    prompt(
      "Calculemos TUS COSTOS DE VIDA mensuales:\nIngresa el costo mensual en  " +
        moneda.toUpperCase() +
        " de " +
        costosDeVida[index]
    )
  );
  while (isNaN(resultado) || resultado < 1) {
    if (resultado < 1) {
      alert("Debes Ingresar un número mayor a 0.");
    } else {
      alert(
        "No ingresaste un número válido. Si escribiste el número con letras vuelve a intentarlo con números."
      );
    }
    resultado = parseInt(
      prompt(
        "Calculemos TUS COSTOS DE VIDA mensuales:\nIngresa el costo mensual en  " +
          moneda.toUpperCase() +
          " de " +
          costosDeVida[index]
      )
    );
  }
  //utilización del metodo push() del array.
  resultadoTotal.push(resultado);
}

let costosFijosTotales = 0;

//recorrido del array y uso de la propiedad length.
for (let i = 0; i < resultadoTotal.length; i++) {
  costosFijosTotales += resultadoTotal[i];
}

alert("Tus Costos de Vida mensuales son " + costosFijosTotales + " " + moneda) +
  ".";

// console.log para registrar el ingreso del array
console.log(resultadoTotal);

//Declaración de la variable gastosMasCostos. Para saber el total de gastos más costos.
let gastosMasCostos = gastosFijosTotales + costosFijosTotales;

// console.log para registrar el ingreso
console.log(
  "Costo de vida fijos por mes es: " + costosFijosTotales + " " + moneda
);

// console.log para registrar el ingreso
console.log(
  "El total de los Gastos mas el Costo de vida mensual es: " +
    gastosMasCostos +
    " " +
    moneda
);

////////////////////////////////////////////////////////////////////////////////
// arrow_function calcularPorHora para sacar el valor por hora con parámetros dinámicos // Abstracción para reutilizar en Ingresos pretendidos, Gastos fijos y Costos de vida mensuales.
const calcularPorHora = (totalIngresos, totalDias, totalHoras) => {
  return totalIngresos / (totalDias * totalHoras);
};

let precioPorHora = calcularPorHora(ingresos, dias, horas);
let gastosPorHora = calcularPorHora(gastosFijosTotales, dias, horas);
let costosPorHora = calcularPorHora(costosFijosTotales, dias, horas);

////////////////////////////////////////////////////////////////////////////////
let precioPorHoraLibreDeGastos = precioPorHora + gastosPorHora + costosPorHora;

if (precioPorHora < gastosPorHora + costosPorHora) {
  alert(
    "Tus pretensiones de Ingreso son mas bajas que tus gastos.Esperemos que no trabajes de programador.\nPresiona f5 y vuelve a intentarlo."
  );
} else {
  alert(
    "Según los datos que ingresaste el cálculo en Horas Laborables es:\n" +
      "\n" +
      "Dinero pretendido por Hora Laborable libre de gastos: " +
      // metodo toFixed() para devolver el precio por hora con dos decimales.
      precioPorHora.toFixed(2) +
      " " +
      moneda +
      ".\n" +
      "Gastos por Hora Laborable: " +
      gastosPorHora.toFixed(2) +
      " " +
      moneda +
      ".\n" +
      "Costo de Vida por Hora Laborable: " +
      costosPorHora.toFixed(2) +
      " " +
      moneda +
      ".\n" +
      "\n" +
      "Para ganar  " +
      ingresos +
      " " +
      moneda +
      " mensuales trabajando " +
      horas +
      " horas por día durante " +
      dias +
      " días por mes, debes cobrar " +
      precioPorHoraLibreDeGastos.toFixed(2) +
      " " +
      moneda +
      " por Hora Laborable."
  );
}

//función de orden superior para comparar si el ingreso pretendido supera el sueldo mensual
// promedio de un programador junior

const sueldoPromedioDeUnProgramadorJunior = 500;
const ingresosPretendidosMasGastos = ingresos + gastosMasCostos;

console.log(
  "Los ingresos pretendidos mas los gastos son " + ingresosPretendidosMasGastos
);

const chequearSueldoPromedio = (ingresoPretendido, sueldo) => {
  return ingresoPretendido >= sueldo
    ? "Tus ingresos pretendidos mas tus gastos son superiores a " +
        sueldoPromedioDeUnProgramadorJunior +
        " " +
        moneda +
        " que es el sueldo promedio de un programador Junior.Vas por buen camino. Mucha suerte!!"
    : "Tus ingresos pretendidos mas tus gastos son menores a " +
        sueldoPromedioDeUnProgramadorJunior +
        " " +
        moneda +
        " que es el sueldo promedio de un programador Junior. Valora tu trabajo.";
};
const testJunior = chequearSueldoPromedio(
  ingresosPretendidosMasGastos,
  sueldoPromedioDeUnProgramadorJunior
);
alert(testJunior);
