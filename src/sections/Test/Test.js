import React,{lazy,Suspense,useContext} from 'react';
import {ScaleLoader}  from 'react-spinners';
import { 
    Container,
    Paragraph,
    H3,
    ContainerTestCard
} from './TestElements';
import VideoContext from '../../contexts/video/VideoContext';

const FormTest = lazy(()=> import('../../components/FormTest/FormTest'));
const TagTest = lazy(()=> import('../../components/TagTest/TagTest'));
const Test = ({setNavbutton}) => {
    //const { data } =useContext(VideoContext);
    let data  = JSON.parse(localStorage.getItem("Data"));
    setNavbutton(true);
    return(
        <Suspense fallback={ <ScaleLoader /> }>
            <Container>
                <H3>Pruebas</H3>
                <Paragraph>Aquí podrás ver las pruebas disponibles de los cursos a los que estás inscrito.</Paragraph>
                <ContainerTestCard>
                {
                data.map( (serie,i) => {
                    if (serie.id !== 4){
                        return(
                            <Suspense fallback={ <ScaleLoader /> }>
                                <TagTest serie={serie} i={i} /> 
                            </Suspense>
                        )
                    }
                }
                    )
                }
                </ContainerTestCard>
            </Container>
        </Suspense>
    )
}

export default Test;