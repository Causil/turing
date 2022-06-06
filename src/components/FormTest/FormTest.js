import React from 'react';
import {
    Container,
    WraperTitleTimeTest,
    WraperTitleTime,
    H3,
    WraperTime,
    Paragraph,
    H2,
    Button,
    WraperTest,
    WraperTestTitle,
    WraperAnswers,
    Check,
    AnswerEnuciate,
    Title,
    Enuciate,

} from './FormTestElements';
import { useNavigate } from 'react-router-dom';


const FormTest = () => {
    const  navigate = useNavigate();
    const  handledSubmit = () => {
        navigate('/test')
    }
    let id   = parseInt(localStorage.getItem("id"));
    console.log('id',id)
    let data = JSON.parse(localStorage.getItem("Data"));
    console.log(data[0].quiz,data[0].quiz.quiz_name,data[0].quiz.questions)
    return(
        <Container>
            <WraperTitleTimeTest  onSubmit={handledSubmit}>
                {data.map( (serie,i) => {
                    if (serie.id === id){
                return (
                 <>
                <WraperTitleTime key = {`formtest${i}`}>
                    <H3> Cuestionario: {serie.quiz.quiz_name} </H3>
                    <WraperTime>
                        <Paragraph>
                            Tiempo restante  
                        </Paragraph>
                        <H2>44:15</H2> 
                        <Button > 
                            Enviar respuestas
                        </Button>
                    </WraperTime>
                </WraperTitleTime>
                <WraperTest>
                    { serie.quiz.questions.map( (question,j) => 
                    <>
                    <WraperTestTitle key={`questio${j}`}> 
                        <Title>  </Title>
                        <Enuciate> {question.question_description} </Enuciate>
                    </WraperTestTitle>
                    { question.incorrect_answers.map( (answer,z) => 
                    <WraperAnswers key={`answer${z}`}>
                         <Check type='checkbox' />
                         <AnswerEnuciate> {answer.answer_description} </AnswerEnuciate>
                    </WraperAnswers>
                    )
                    }
                     <WraperAnswers >
                         <Check type='checkbox' />
                         <AnswerEnuciate> {question.correct_answer.answer_description} </AnswerEnuciate>
                    </WraperAnswers>
                    </>
                )}
                </WraperTest>
                </>
                )}
                }
                )
            }
            </WraperTitleTimeTest>
        </Container>

    )
}

export default FormTest;