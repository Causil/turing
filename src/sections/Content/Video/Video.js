import {useContext,lazy,Suspense} from 'react';
import {
    Container,
    Video as Vi
} from './VideoElements'
import {RingLoader}  from 'react-spinners';
import VideoContext from '../../../contexts/video/VideoContext';

const Video = ({setNavbutton}) =>  {
    const {url} = useContext(VideoContext)
    setNavbutton(true);
    return(
    <Container>
        <Suspense fallback = {< RingLoader />}>
            <Vi 
                src={url}
                loading
                webkitallowfullscreen 
                mozallowfullscreen 
                allowfullscreen
            > 
            
            Navegador No carga
            </Vi>
        </Suspense>
    </Container>
    )
}

export default Video