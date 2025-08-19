function selectPillow(type) {
  let price = 0;
  let name = "";

  document.getElementById("tick-small").style.display = "none";
  document.getElementById("tick-big").style.display = "none";
  document.getElementById("tick-combo").style.display = "none";

  if (type === "small") {
    price = 699;
    name = "Small Pillow";
    document.getElementById("tick-small").style.display = "flex";
  } else if (type === "big") {
    price = 799;
    name = "Big Pillow";
    document.getElementById("tick-big").style.display = "flex";
  } else if (type === "combo") {
    price = 1399;
    name = "Combo (Small + Big)";
    document.getElementById("tick-combo").style.display = "flex";
  }

  document.getElementById("selected-item").innerText = "Selected: " + name;
  document.getElementById("total-price").innerText = "Total: ₹" + price;
}
