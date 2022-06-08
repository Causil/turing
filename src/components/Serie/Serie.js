import React, { useContext } from 'react';
import {Container,
        WraperInfoFile,
        WraperInfo,
        H2,
        Paragraph,
        TextFile,
        Download,
        Img,
        WraperCarrusule,
        ContainerSerie,
        ImgSerie,
        WraperTextChapter,
        ButtonLink,
    } from './SerieElements';
import Carousel from 'styled-components-carousel';
import VideoContext from '../../contexts/video/VideoContext';
import useWindowDimensions from '../../hooks/useWindowDimensions'

const Serie = ({item,i}) => {
    const {mobile} = useWindowDimensions();
    const [numSlide,setNumSlide] = React.useState(mobile ? 1 : 2);
    let data  = JSON.parse(localStorage.getItem("Data"))
    React.useEffect( () => {
        let numberSlide = mobile ? 1 : 2;
        setNumSlide(numberSlide);
    }
    ,[mobile]);
    const {setUrl} = useContext(VideoContext);
    //console.log('iteracion' ,i,item.id,item.serie_name,item.serie_description,item.chapters[2].chapter_video.url)
return (
<Container> 
 <WraperInfoFile> 
     <WraperInfo> 
         <H2> {item.serie_name}</H2> 
         <Paragraph> {item.serie_description} </Paragraph> 
     </WraperInfo> 
     <Download href={data[2].support_files[0].url} target='_blanck' >  
         {/* <TextFile> {item.textFile} </TextFile>  */}
         <Img src='/image/download.svg' /> 
     </Download> 
 </WraperInfoFile> 
 <WraperCarrusule>
     <Carousel
        center
        infinite={true}
        showArrows={true}
        showIndicator={false}
        slidesToShow={numSlide}
        centerPadding={1}
     >
      {item.chapters.map((serie,i) =>   
     <ContainerSerie key={`serie${i}`} >    
        <ImgSerie src={serie.chapter_image.url} alt={item.chapters[2].chapter_image.name} />
        <WraperTextChapter>
            <H2> {serie.chapter_name} </H2>
            <ButtonLink
                to={'/video'}
                onClick={() => {setUrl(serie.chapter_video.url); alert('Hola mundo')} }
            > Seguir viendo
            
            </ButtonLink>  
        </WraperTextChapter>
      </ContainerSerie>  
       ) 
      }  
    </Carousel>  
 </WraperCarrusule>  
</Container>
)

}
export default Serie 