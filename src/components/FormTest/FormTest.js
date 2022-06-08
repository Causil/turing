import {useState} from 'react';
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
    const [info, setInfo] = useState([]);
      const handleChange = (e) => {
        setInfo([
          ...info,{
          'answer':  e.target.value,
          'question':e.target.name,
          }
          //[e.target.name]: e.target.value || e.target.checked
        ]);
        console.log('info',info)
      };


    let id   = parseInt(localStorage.getItem("id"));
    let data = JSON.parse(localStorage.getItem("Data"));
    data.forEach((serie) => serie.quiz.questions.forEach((question) => question.incorrect_answers.push(question.correct_answer) ));
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
                    {   
                        question.incorrect_answers.map( (answer,z) => {
                        <WraperAnswers key={`answer${z}`}>
                             <Check type='radio' name={`${question.id}`} value={`${answer.id}`} />
                             <AnswerEnuciate> {answer.answer_description} </AnswerEnuciate>
                        </WraperAnswers>
                        }
                    )
                    }
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


{/* <WraperAnswers > */}
    {/* <Check type='checkbox'  name={`${question.id}`} value={`${question[j].correct_answer.id}`}/> */}
    {/* <AnswerEnuciate> {question.correct_answer.answer_description} </AnswerEnuciate> */}
{/* </WraperAnswers> */}