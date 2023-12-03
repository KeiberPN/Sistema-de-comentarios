const contenedor = document.getElementById("contenedor");
const cambio_img = document.getElementsByClassName("user-photo")[0];
const enviar = document.getElementById('enviar');
const mensaje = document.getElementById("texto");
const nombre = document.getElementsByClassName("nombre_usuario");
const replies = document.getElementsByClassName("replies");
const msg_img = document.getElementById("msg_img");


var msg_container = document.createElement("div");
var msg = document.createElement("div");
var line = document.createElement("div");
var cambio_img_2 = document.createElement("div");
var img_perfil = document.createElement("img");
var mensaje_container = document.createElement("div");
var nombre_2 = document.createElement("input");
var texto_container = document.createElement("div");
var mensaje_2 = document.createElement("div");
var enviar_2 = document.createElement("button");
var simbolo = document.createElement("span");
var id_respuesta = 1;
var id_replies = 1;
var img_1 = "profile1.jpeg";
var img_2 = "profile2.jpeg";
var img_3 = "profile3.jpeg";

msg_container.style.display = "flex";
msg.classList.add("msg");
line.classList.add("line");
cambio_img_2.classList.add("user-photo");
img_perfil.src = "profile1.jpeg";
mensaje_container.classList.add("msj-container");
nombre_2.classList.add("nombre_usuario");
nombre_2.type = "text";
nombre_2.value = "keiber";
texto_container.classList.add("texto-container");
mensaje_2.classList.add("texto");
mensaje_2.setAttribute("contenteditable", "");
enviar_2.classList.add("enviar");
//enviar_2.setAttribute("id", "enviar_2");
enviar_2.setAttribute("onclick", "enviar_msg(`respuesta`)");
simbolo.classList.add("material-symbols-outlined");
simbolo.innerHTML = "send";

msg_container.appendChild(line);
msg_container.appendChild(msg);
msg.appendChild(cambio_img_2);
msg.appendChild(mensaje_container);
msg.appendChild(enviar_2);
cambio_img_2.appendChild(img_perfil);
mensaje_container.appendChild(nombre_2);
mensaje_container.appendChild(texto_container);
texto_container.appendChild(mensaje_2);
enviar_2.appendChild(simbolo);


enviar.addEventListener("click", () => {enviar_msg("mensaje");});
//enviar_2.addEventListener("click", () => {enviar_msg("respuesta");});
cambio_img.addEventListener("click", () => {img("mensaje");});
cambio_img_2.addEventListener("click", () => {img("respuesta");});


function enviar_msg(tipo) {
	
	if (mensaje.innerHTML != "" || mensaje_2.innerHTML != "") {

		let comentario = document.createElement("div");
		let caja = document.createElement("div");
		let comentario_2 = document.createElement("div");
		let envoltura = document.createElement("div");
		let contenido = document.createElement("div");
		let foto = document.createElement("div");
		let img = document.createElement("img");
		let comentario_info = document.createElement("div");
		let header = document.createElement("div");
		let usuario = document.createElement("span");
		let hora = document.createElement("span");
		let texto = document.createElement("div");
		let acciones = document.createElement("div");
		let boton_1 = document.createElement("button");
		let boton_2 = document.createElement("button");
		let boton_3 = document.createElement("button");
		let boton_4 = document.createElement("button");
		let boton_5 = document.createElement("button");
		let respuestas = document.createElement("div");
		let line_2 = document.createElement("div");
		line_2.classList.add("line");

		comentario.classList.add("comment");
		caja.classList.add("box");
		comentario_2.classList.add("comment");
		envoltura.classList.add("comment-wrapper");
		contenido.classList.add("content");
		foto.classList.add("user-photo");
		comentario_info.classList.add("comment-info");
		header.classList.add("header");
		usuario.classList.add("username");
		hora.classList.add("date");
		texto.classList.add("text");
		acciones.classList.add("actions");
		
		if (tipo=="mensaje") {
			respuestas.classList.add("replies");
			boton_2.setAttribute("onclick", `responder_msg(${id_respuesta})`);
			id_respuesta+=1;
		}
		

		let meidodia = " am";
		let momentoActual = new Date();
    	let hora_2 = momentoActual.getHours();
    	if (hora_2>12) {
    		hora_2 -= 12;
    		meidodia = " pm";
    	};
    	let minuto = momentoActual.getMinutes();
    	let horaImprimible = hora_2 + ":" + minuto + meidodia;

		
		if (tipo=="mensaje") {
			img.src = msg_img.getAttribute('src');
			texto.innerHTML = mensaje.innerHTML;
			usuario.innerHTML = "@" + nombre[0].value;
		}else{
			img.src = img_perfil.getAttribute('src');
			texto.innerHTML = mensaje_2.innerHTML;
			usuario.innerHTML = "@" + nombre_2.value;
		}
		
		
		hora.innerHTML = " " + horaImprimible
		boton_1.innerHTML = "Like";
		boton_2.innerHTML = "Reply";
		boton_3.innerHTML = "Share";
		boton_4.innerHTML = "Follow";
		boton_5.innerHTML = "Report";

		if (tipo=="mensaje") {
			comentario.appendChild(caja);
			caja.appendChild(comentario_2);	
			comentario_2.appendChild(envoltura);
		}else{
			comentario.appendChild(line_2);
			comentario.appendChild(envoltura);
		}
		
		envoltura.appendChild(contenido);
		envoltura.appendChild(respuestas);
		contenido.appendChild(foto);
		contenido.appendChild(comentario_info);
		foto.appendChild(img);
		comentario_info.appendChild(header);
		comentario_info.appendChild(texto);
		comentario_info.appendChild(acciones);
		header.appendChild(usuario);
		header.appendChild(hora);
		acciones.appendChild(boton_1);
		acciones.appendChild(boton_2);
		acciones.appendChild(boton_3);
		acciones.appendChild(boton_4);
		acciones.appendChild(boton_5);

		if (tipo=="mensaje") {
			contenedor.appendChild(comentario);
			mensaje.innerHTML = "";
		}else{
			replies[id_replies].appendChild(comentario);
			mensaje_2.innerHTML = "";
			replies[id_replies].removeChild(msg_container);
		}
		
		

	}
	

}

function responder_msg(self) {
	id_replies = self;
	replies[self].appendChild(msg_container);
}

function img(tipo){
	if (tipo=="mensaje") {
		let id_img = msg_img.getAttribute('src');
		if (id_img == img_1) {
			msg_img.src = img_2;
		}else {
			if (id_img == img_2) {
				msg_img.src = img_3;
			}else {
				msg_img.src = img_1;
			}
		}
	}else{
		let id_img = img_perfil.getAttribute('src');
		if (id_img == img_1) {
			img_perfil.src = img_2;
		}else {
			if (id_img == img_2) {
				img_perfil.src = img_3;
			}else {
				img_perfil.src = img_1;
			}
		}
	}
	
}