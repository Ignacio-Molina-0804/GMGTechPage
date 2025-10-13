function enviarWhatsapp() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const servicio = document.getElementById("servicio").value;
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || servicio === "Selecciona un servicio") {
    alert(
      "Por favor, completá los campos obligatorios antes de enviar por WhatsApp."
    );
    return;
  }

  const texto = `👋 Hola, soy ${nombre}.
Quiero consultar por el *${servicio}*.

📧 Email: ${email}
📱 Teléfono: ${telefono || "No especificado"}
📝 Mensaje: ${mensaje || "(sin mensaje)"}`;

  const url = `https://wa.me/5492616406896?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}
