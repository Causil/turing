export const validationsFormRegister = (form) => {
    let errors = {};
    //let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexCedula = /^.{1,10}$/;
    let regexPassword = /^.{6,15}$/;

    if(!form.email.trim()){
        errors.email = "El campo 'Email' es requerido";
    } else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo 'Email' es incorrecto";
    }

    if(!form.password.trim()){
        errors.password = "El campo 'Password' es requerido";
    } else if (!regexPassword.test(form.password.trim())){
        errors.password = "El campo 'Password' requiere minimo 6 caracteres";
    }

    if(!form.username.trim()){
        errors.username = "El campo 'Cédula' es requerido";
    } else if(!regexCedula.test(form.username.trim())){
        errors.username = "El campo 'Cédula' es incorrecto";
    }  else if(form.username < 0){
        errors.username = "El campo es incorrecto";
    }

    return errors
  };

  export const validationsFormLogin = (form) => {
    let errors = {};
    //let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    //let regexCedula = /^.{1,10}$/;
    let regexPassword = /^.{6,15}$/;

    if(!form.identifier.trim()){
        errors.identifier = "El campo 'Correo' es requerido";
    } else if(!regexEmail.test(form.identifier.trim())){
        errors.identifier = "El campo 'Correo' es incorrecto";
    }

    if(!form.password.trim()){
        errors.password = "El campo 'Password' es requerido";
    } else if (!regexPassword.test(form.password.trim())){
        errors.password = "El campo 'Password' requiere minimo 6 caracteres";
    }

    //if(!form.username.trim()){
    //    errors.username = "El campo 'Cédula' es requerido";
    //} else if(!regexCedula.test(form.username.trim())){
    //    errors.username = "El campo 'Cédula' es incorrecto";
    //}

    return errors
  };


  export const validationsFormCalculo = (form) => {
    let errors = {};
    //sexo
    //nacimiento
    //cotizacion
    //ultimoSalario
    //fechaActualizacion
    //let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    //let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    //let regexCedula = /^.{1,10}$/;
    //let regexPassword = /^.{6,15}$/;

    if(!form.cotizacion.trim()){
        errors.cotizacion = "El campo es requerido";
    } else if( form.cotizacion < 0){
        errors.cotizacion = "El campo es incorrecto";
    }

    if(!form.ultimoSalario.trim()){
        errors.ultimoSalario = "El campo 'Password' es requerido";
    } else if (form.ultimoSalario<0){
        errors.ultimoSalario = "El campo es incorrecto";
    }

    if(!form.numberOmision.trim()){
        errors.numberOmision = "El campo es requerido";
    } else if(form.numberOmision < 0){
        errors.numberOmision = "El campo es incorrecto";
    }

    return errors
  };