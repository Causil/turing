import {useState} from 'react'
import {
    Container,
    Img,
    WraperInfoButton,
    WraperInfo,
    H3,
    Paragraph,
    Button
} from './TagTestElements';
import { useNavigate } from 'react-router-dom';
import { AiOutlineRight } from "react-icons/ai";

const TagTest = ({serie,i}) => {
//console.log(serie.chapters[0].chapter_image.formats.small.url,
//    'name',serie.quiz.quiz_name,
//    'name',serie.quiz.questions.length
//    )
//console.log('serie',i,serie)
//const [id,setId] = useState(null);
const navigate = useNavigate();
const handledClick = () => {
      navigate('/scenery');
      //setId(serie.id);
      localStorage.setItem("id",JSON.stringify(serie.id));
}
return(
    <Container>
        <Img src={serie.chapters[1].chapter_image.formats.small.url} alt='imagen del test'/>
        <WraperInfoButton>
            <H3> {serie.quiz.quiz_name} </H3>
            <WraperInfo>    
                <Paragraph> 45 minutos </Paragraph>
                <Paragraph> {serie.quiz.questions.length} preguntas </Paragraph>
            </WraperInfo>
            <Button onClick={handledClick} > Responder<AiOutlineRight /> </Button>
        </WraperInfoButton>
    </Container>
)
}

export default TagTest;