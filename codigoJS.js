function nombre_completo(){
    var p_nombre = document.getElementById("p_nombre").value;
    var s_nombre = document.getElementById("s_nombre").value;
    var p_apellido = document.getElementById("p_apellido").value;
    var s_apellido = document.getElementById("s_apellido").value;
    var nombre_completo = `${p_nombre} ${s_nombre} ${p_apellido} ${s_apellido}`.trim();
    document.getElementById("nombre_completo").value = nombre_completo;
}

function ultimo_digit(){
    var dni_original;
    dni_original = document.getElementById("dni_original").value;
    var ultimo_digito_dni;
    ultimo_digito_dni = dni_original % 10;
    document.getElementById("ultimo_digit").value = ultimo_digito_dni;
}
