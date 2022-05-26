const login = { 
title: ['Inicia sesión'],
input: [
        {placeholder:'Correo electronico',type:'email',logo:'/image/logoUser.svg'},
        {placeholder:'Contraseña',type:'password',logo:'/image/logoPassword.svg'}
       ],   
button:[{text:'Iniciar sesión',type:'submit'}],
text:  [
        {text:'¿No tienes una cuenta?',bf:false,break:false}, //[contenido, negrita o no, salto de renglo o no]
        {text:'Regístrate',bf:true,break:false},
        {text:'¿Olvidaste la contraseña?',bf:true,break:true},
        ]
};

export default login