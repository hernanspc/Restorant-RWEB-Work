export function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizarCadenaLarga(value) {
    return value.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

export function milliFormat(num) {
    // Agregar miles
    let s;
    s = num.toString();
    // if (/[^0-9\.]/.test(s)) return "invalid value";
    s = s.replace(/^(\d*)$/, "$1.");
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    s = s.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(s)) {
        s = s.replace(re, "$1,$2");
    }
    s = s.replace(/,(\d\d)$/, ".$1");
    return s.replace(/^\./, "0.");
}

export const formatUSD = (value) => {
    "worklet";
    if (value === "") {
        const formattedValue = `$${value.toLocaleString(
            // const formattedValue = `$${latestCurrentPrice.value.toLocaleString(
            "en-US",
            { currency: "USD" }
        )}`;
        return formattedValue;
    }

    const formattedValue = `${parseFloat(value)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
    return formattedValue;
};

export function ISODateToFormated(value) {
    let date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
        dt = "0" + dt;
    }
    if (month < 10) {
        month = "0" + month;
    }

    return dt + "-" + month + "-" + year;
}


