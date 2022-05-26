const register = {
title: ['Crea tu cuenta'],
input: [
        {placeholder:'Correo electrónico',type:'text',logo:'/image/logoEmail.svg'},
        {placeholder:'Celular',type:'text',logo:'/image/logoCell.svg'},
        {placeholder:'Nombre de usuario',type:'text',logo:'/image/logoUser.svg'},
        {placeholder:'Contraseña',type:'password',logo:'/image/logoPassword.svg'},
       ],   
button:[{text:'Regístrate',type:'submit'}],
text:  [
        {text:'¿Ya tienes una cuenta?',bf:false,break:false}, //[contenido, negrita o no, salto de renglo o no]
        {text:'Inicia sesión.',bf:true,break:false},
        ]
};




export default register;