function unlock_wheel(clicked_id) {
    document.getElementById("pantalla_inicial").style.display = "none";

    var img = document.getElementById("rueda_imagen");

    img.classList.add("change_courses");

    var curso = 0;

    // alert("Hello! I am an alert box!!");
    

    // if(clicked_id.localeCompare("0_btn")){
    //     alert(clicked_id);
    // }


    // enviar hacia afuera
    if(clicked_id==="0_btn"){
        console.log("0");
        
    }else if(clicked_id==="1_btn"){
        //cursos de primero medio
        console.log("1");
        document.getElementById("curso_00").href = "#biologia1";
        document.getElementById("curso_01").href = "#evaluaciones1";
        document.getElementById("curso_02").href = "#fisica1";
        document.getElementById("curso_03").href = "#formacion1";
        document.getElementById("curso_04").href = "#historia1";
        document.getElementById("curso_05").href = "#ingles1";
        document.getElementById("curso_06").href = "#lenguaje1";
        document.getElementById("curso_07").href = "#matematica1";
        document.getElementById("curso_08").href = "#orientacion1";
        document.getElementById("curso_10").href = "#quimica1";
    }else if(clicked_id==="2_btn"){
        console.log("2");
        document.getElementById("curso_00").href = "#biologia2";
        document.getElementById("curso_01").href = "#evaluaciones2";
        document.getElementById("curso_02").href = "#fisica2";
        document.getElementById("curso_03").href = "#formacion2";
        document.getElementById("curso_04").href = "#historia2";
        document.getElementById("curso_05").style.display = "none";
        document.getElementById("curso_06").href = "#lenguaje2";
        document.getElementById("curso_07").href = "#matematica2";
        document.getElementById("curso_08").href = "#orientacion2";
        document.getElementById("curso_10").href = "#quimica2";
    }else if(clicked_id==="3_btn"){
        console.log("3");
        document.getElementById("curso_00").href = "#biologia3";
        document.getElementById("curso_01").href = "#evaluaciones3";
        document.getElementById("curso_02").href = "#fisica3";
        document.getElementById("curso_03").href = "#formacion3";
        document.getElementById("curso_04").href = "#historia3";
        document.getElementById("curso_05").href = "#ingles3";
        document.getElementById("curso_06").href = "#lenguaje3";
        document.getElementById("curso_07").href = "#matematica3";
        document.getElementById("curso_08").href = "#orientacion3";
        document.getElementById("curso_10").href = "#quimica3";
    }else if(clicked_id==="4_btn"){
        console.log("4");
        document.getElementById("curso_00").href = "#biologia4";
        document.getElementById("curso_01").href = "#evaluaciones4";
        document.getElementById("curso_02").href = "#fisica4";
        document.getElementById("curso_03").href = "#formacion4";
        document.getElementById("curso_04").href = "#historia4";
        document.getElementById("curso_05").href = "#ingles4";
        document.getElementById("curso_06").href = "#lenguaje4";
        document.getElementById("curso_07").href = "#matematica4";
        document.getElementById("curso_08").href = "#orientacion4";
        document.getElementById("curso_10").href = "#quimica4";
    }else if(clicked_id==="5_btn"){
        console.log("5");
    }

    setTimeout(function() {
        img.classList.remove("change_courses");
    }, 300);

}