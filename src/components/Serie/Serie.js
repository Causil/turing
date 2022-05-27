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
        Video
    } from './SerieElements';



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
     {/* {item.chapters.map((serie,i) =>   */}
     <ContainerSerie  >    
        <Video src={`${item.chapters[0].chapter_video.url}`} controls>      
        </Video>  
        <H2> {item.chapters[0].chapter_name} </H2>  
        <Paragraph> Seguir viendo </Paragraph>  
      </ContainerSerie>  
    {/* //   ) 
    //   }  */}
 </WraperCarrusule>  
</Container>
)

}
export default Serie 