function bigger() {
    alert("Making text bigger...");
    const entry = document.getElementById("textentry");
    entry.style.fontSize = "1.5rem";
}

function boring() {
    const entry = document.getElementById("textentry");
    const boring = document.getElementById("boring");
    if (boring.checked) {
        entry.style.fontWeight = "normal";
        entry.style.color = "black";
        entry.style.textDecoration = "none";
    }
}
function fancy() {
    const entry = document.getElementById("textentry");
    const fancy = document.getElementById("fancy");
    if (fancy.checked) {
        entry.style.fontWeight = "bold";
        entry.style.color = "blue";
        entry.style.textDecoration = "underline";
    }
}

function moo() {
    const entry = document.getElementById("textentry");
    let val = entry.value;
    val = val.toUpperCase();
    let parts = val.split(".");
    parts = parts.map((str) => {
        if (str.length == 0) return "";
        return str + "-Moo"
    });
    val = parts.join(".");
    entry.value = val;
}