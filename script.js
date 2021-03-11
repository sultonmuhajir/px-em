const def = document.getElementById("default");
const px = document.getElementById("px");
const em = document.getElementById("em");
const edit = document.getElementById("edit");
const lock = document.getElementById("lock");

const result = (id, hsl) => {
   if (!isNaN(hsl)) {
      id.disabled = true;
      id.value = hsl;
   } else {
      id.disabled = false;
      id.value = null;
   }
}

const lockk = () => {
   def.disabled = true;
   px.disabled = false;
   em.disabled = false;
   lock.style.display = "none";
   edit.style.display = "initial";
}

def.addEventListener("keyup", function (e) {
   if (e.keyCode === 13) {
      lockk();
   }
});

lock.addEventListener("click", function () {
   lockk();
});

edit.addEventListener("click", function () {
   def.disabled = false;
   px.disabled = true;
   em.disabled = true;
   px.value = null;
   em.value = null;
   edit.style.display = "none";
   lock.style.display = "initial";
});

px.addEventListener("keyup", function () {
   const deff = parseFloat(def.value);
   const pxx = parseFloat(px.value);
   const hasil = pxx * (1 / deff);
   result(em, hasil);
});

em.addEventListener("keyup", function () {
   const deff = parseFloat(def.value);
   const emm = parseFloat(em.value);
   const hasil = emm * deff;
   result(px, hasil);
});