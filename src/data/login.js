const login = { 
title: ['Inicia sesión'],
input: [
        {placeholder:'Correo electrónico',type:'email',logo:'/image/logoUser.svg',name:'identifier'},
        {placeholder:'Contraseña',type:'password',logo:'/image/logoPassword.svg' ,name:'password'}
       ],   
button:[{text:'Iniciar sesión',type:'submit'}],
text:  [
        {text:'¿No tienes una cuenta?',bf:false,break:false}, //[contenido, negrita o no, salto de renglo o no]
        {text:'Regístrate',bf:true,break:false},
        {text:'¿Olvidaste la contraseña?',bf:true,break:true},
        ]
};

export default login