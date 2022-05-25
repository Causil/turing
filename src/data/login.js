const login = { 
title: ['Inicia sesión'],
input: [
        {placeholder:'Nombre de usuario',type:'text',logo:'/image/logoUser.svg'},
        {placeholder:'Contraseña',type:'text',logo:'/image/logoPassword.svg'}
       ],   
button:[{text:'Iniciar sesión',type:'submit'}],
text:  [
        {text:'¿No tienes una cuenta?',bf:false,break:false}, //[contenido, negrita o no, salto de renglo o no]
        {text:'Regístrate',bf:true,break:false},
        {text:'¿Olvidaste la contraseña?',bf:true,break:true},
        ]
};

export default login