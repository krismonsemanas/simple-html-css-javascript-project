const download = document.getElementById("download");
const qrcode = document.getElementById("qrcode");
const generate = document.getElementById("generate");
const text = document.getElementById("text");

const generateQrCode = () => {
  if (text.value === "") {
    alert("input can't empty");
    text.focus();
    return;
  }

  new QRCode(qrcode, {
    text: text.value,
    width: 128,
    height: 128,
    darkColor: "#000",
    ligthColor: "#FFF",
    correctLevel: QRCode.CorrectLevel.H,
  });
  download.style.display = "block";
};

const clearQrCode = () => {
  qrcode.querySelector("canvas").remove();
  qrcode.querySelector("img").remove();
  download.style.display = "block";
};

text.addEventListener("input", () => clearQrCode());

generate.addEventListener("click", () => generateQrCode());

download.addEventListener("click", () => {
  const source = qrcode.querySelector("canvas");
  const link = document.createElement("a");
  link.href = source.toDataURL();
  link.download = "generate-qr-code.png";
  link.click();
  link.remove();
  clearQrCode();
});
