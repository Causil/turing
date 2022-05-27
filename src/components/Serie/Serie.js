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


const Serie = ({item,i}) => {
    console.log('iteracion' ,i,item.id,item.serie_name,item.serie_description,item.chapters[2].chapter_video.url)
return (
<Container> 
 <WraperInfoFile> 
     <WraperInfo> 
         <H2> {item.serie_name}</H2> 
         <Paragraph> {item.serie_description} </Paragraph> 
     </WraperInfo> 
     <Download href={`${item.chapters[2].chapter_video.url}`} >  
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
        slidesToShow={2}
        centerPadding={1}
        
     >
      {item.chapters.map((serie,i) =>   
     <ContainerSerie  >    
        <ImgSerie src={serie.chapter_image.url} alt={item.chapters[2].chapter_image.name} />
        <WraperTextChapter>
            <H2> {serie.chapter_name} </H2>  
            <ButtonLink to={serie.chapter_video.url}> Seguir viendo </ButtonLink>  
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