export default textsViews = {
    navbars:{
                content:'Contenidos',
                tests:  'Pruebas',
                answer: 'Resultados',
                bill:   'Cuenta'
            },
    login: { 
                title:         'inicia sesión',
                inputUser:     'Nombre de usuario',   
                inputPassword: 'Contraseña',
                button:        'Iniciar sesión',
                textOne:       '¿No tienes una cuenta?',
                textTwo:       'Regístrate',
                textThree:     '¿Olvidaste la contraseña?'
            },
    register:{ 
                title:        'Crea tu cuenta',
                inputEmail:    'Correo electrónico',
                inputCell:     'Celular',
                inputUser:     'Nombre de usuario',
                inputPassword: 'Contraseña',
                button:        'Regístrate',
                textOne:       '¿Ya tienes una cuenta?',
                textTwo:       'Inicia sesión.'
            },
    content:{
            engineSearch:         '¿Qué quieres aprender hoy?',
            animalSeries: [
                    {
                        title:            'Animales domésticos',
                        paragraph:        'Los animales domésticos han hecho parte fundamental de la historia de la civilización de la civilización. Conoce más sobre ellos y su rol para la humanidad.',
                        textFile:         'Descargas archivos',
                        series: [ 
                            {
                                title:            'E1: El perro, la compañia perfecta',
                                followVideo:       'Seguir video',
                                keepWatchingVideo: 'Ver video'
                            },
                            {
                                title:            'E2: Gatos, desde la antiguedad',
                                followVideo:       'Seguir video',
                                keepWatchingVideo: 'Ver video'
                            }
                        ],
                    },
                    {
                        title:            'Clases bajo',
                        paragraph:        'Aprende a tocar el bajo en distintos géneros musicales, desde principiante a experto.',
                        textFile:         'Descargas archivos',
                        series: [ 
                            {
                                title:            'Basico: conoce el bajo',
                                followVideo:       'Seguir video',
                                keepWatchingVideo: 'Ver video'
                            },
                            {
                                title:            'Intermedio: bajo para principiantes',
                                followVideo:       'Seguir video',
                                keepWatchingVideo: 'Ver video'
                            }
                        ],
                    },
                            ]
            },
    tests:{
        title:      'Pruebas',
        paragraph:  'Aqui podras ver las pruebas disponibles de los cursos a los que estás inscrito',
        tests:[
            {   
                title:'Animales domésticos',
                time:  '45 mínutos',
                size:  '25 preguntas',
                state:false,//false indica si la prueba esta terminada button:responder, true lo contrario button:Ver resultados
                testSimulator:{
                                title: 'Cuestionario: Animales domésticos',
                                temporizador:{
                                                title:      'Tiempo restante',
                                                textButton: 'Enviar respuestas',
                                            },
                                tests:[
                                        {
                                            title:'Pregunta 1/10',
                                            text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                            answer:[
                                                {text:'Camello dromedario'},
                                                {text:'Elefante asiático'},
                                                {text:'Zorro rojo'},
                                                {text:'Buffalo de agua'},
                                            ]
                                        },
                                        {
                                            title:'Pregunta 2/10',
                                            text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                            answer:[
                                                {text:'Camello dromedario'},
                                                {text:'Elefante asiático'},
                                                {text:'Zorro rojo'},
                                                {text:'Buffalo de agua'},
                                            ]
                                        },
                                        {
                                            title:'Pregunta 3/10',
                                            text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                            answer:[
                                                {text:'Camello dromedario'},
                                                {text:'Elefante asiático'},
                                                {text:'Zorro rojo'},
                                                {text:'Buffalo de agua'},
                                            ]
                                        },
                                        {
                                            title:'Pregunta 4/10',
                                            text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                            answer:[
                                                {text:'Camello dromedario'},
                                                {text:'Elefante asiático'},
                                                {text:'Zorro rojo'},
                                                {text:'Buffalo de agua'},
                                            ]
                                        },
                                        {
                                            title:'Pregunta 5/10',
                                            text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                            answer:[
                                                {text:'Camello dromedario'},
                                                {text:'Elefante asiático'},
                                                {text:'Zorro rojo'},
                                                {text:'Buffalo de agua'},
                                            ]
                                        },
                                        {
                                            title:'Pregunta 6/10',
                                            text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                            answer:[
                                                {text:'Camello dromedario'},
                                                {text:'Elefante asiático'},
                                                {text:'Zorro rojo'},
                                                {text:'Buffalo de agua'},
                                            ]
                                        },
                                        {
                                            title:'Pregunta 7/10',
                                            text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                            answer:[
                                                {text:'Camello dromedario'},
                                                {text:'Elefante asiático'},
                                                {text:'Zorro rojo'},
                                                {text:'Buffalo de agua'},
                                            ]
                                        },
                                        {
                                            title:'Pregunta 8/10',
                                            text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                            answer:[
                                                {text:'Camello dromedario'},
                                                {text:'Elefante asiático'},
                                                {text:'Zorro rojo'},
                                                {text:'Buffalo de agua'},
                                            ]
                                        },
                                        {
                                            title:'Pregunta 9/10',
                                            text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                            answer:[
                                                {text:'Camello dromedario'},
                                                {text:'Elefante asiático'},
                                                {text:'Zorro rojo'},
                                                {text:'Buffalo de agua'},
                                            ]
                                        },
                                        {
                                            title:'Pregunta 10/10',
                                            text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                            answer:[
                                                {text:'Camello dromedario'},
                                                {text:'Elefante asiático'},
                                                {text:'Zorro rojo'},
                                                {text:'Buffalo de agua'},
                                            ]
                                        },
                                      ],
                                        
                                        },
            },
            {   
                title:'Clases de bajo',
                time:  '2 horas',
                size:  '40 preguntas',
                state:false,//false indica si la prueba esta terminada button:responder, true lo contrario button:Ver resultados
                testSimulator:{
                    title: 'Cuestionario: Animales domésticos',
                    temporizador:{
                                    title:      'Tiempo restante',
                                    textButton: 'Enviar respuestas',
                                },
                    tests:[
                            {
                                title:'Pregunta 1/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 2/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 3/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 4/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 5/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 6/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 7/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 8/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 9/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 10/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                          ],
                            
                            },
            },
            {   
                title:'Diseño de vestuario',
                time:  '2 horas',
                size:  '40 preguntas',
                state:false,//false indica si la prueba esta terminada button:responder, true lo contrario button:Ver resultados
                testSimulator:{
                    title: 'Cuestionario: Animales domésticos',
                    temporizador:{
                                    title:      'Tiempo restante',
                                    textButton: 'Enviar respuestas',
                                },
                    tests:[
                            {
                                title:'Pregunta 1/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 2/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 3/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 4/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 5/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 6/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 7/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 8/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 9/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                            {
                                title:'Pregunta 10/10',
                                text: '¿Cuál de los siguientes animales No ha sido domesticado?',
                                answer:[
                                    {text:'Camello dromedario'},
                                    {text:'Elefante asiático'},
                                    {text:'Zorro rojo'},
                                    {text:'Buffalo de agua'},
                                ]
                            },
                          ],
                            
                            },
            },
        ],
        },
    answers:{
            title:     'Resultados',
            paragraph: 'Aquí puedes consultar los resultados de las pruebas que has realizado.',
            answers:[
                {
                    title:'Animales domésticos',
                    date: 'Fecha de envio: 1/25/2022',
                    time: '4:41pm',
                    note: 'Nota',
                    value:'4.2'
                },
                {
                    title:'Clases de bajo',
                    date: 'Fecha de envio: 1/25/2022',
                    time: '4:41pm',
                    note: 'Nota',
                    value:'2.5'
                },
                {
                    title:'Diseño de vestuario',
                    date: 'Fecha de envio: 1/25/2022',
                    time: '4:41pm',
                    note: 'Nota',
                    value:'3.3'
                }
            ] 
    },
    bill: {
        title:    'Cuenta',
        name:     'Daniel Ospina',
        email:    'emai@email.com',
        telephon: '333 333 33 33',
        buttonOne: 'Ver resultados',
        buttonTwo: 'Cerrar sesión'
    }

}