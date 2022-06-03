import { useState, useEffect, Suspense, lazy, useContext } from 'react';
import Cookies from 'js-cookie';
import { Container } from './ContentElements';
import content       from '../../data/content'
import axiosClient   from '../../config/axios';
import {RingLoader}  from 'react-spinners';
import VideoContext from '../../contexts/video/VideoContext';
const  Serie   =  lazy( () => import('../../components/Serie/Serie'));
const  Search  =  lazy( () => import('../../components/Search/Search'));

const Content = ({setNavbutton}) => {
    const {setData} = useContext(VideoContext);
    setNavbutton(true);
    const [aPIs,setAPIs] = useState(false);
    useEffect( () => {
        let api = async (rut) => {
            let res = await axiosClient(rut);
            let data = res.data;
            setAPIs(data);
            localStorage.setItem("Data",JSON.stringify(data));
            setData(data);

        };
        api('/series');
    },[])
    return (
    <Container>
        <Search text={content.engineSearch} />
        <Suspense fallback = {< RingLoader />}>
        {
        aPIs !== false && aPIs.map((serie,i) => {
            if (serie.id !== 4){
             return <Serie key={`Content${i}`} item={serie}  i={i} />   
            }
        }
           )
        }
        </Suspense>
    </Container>
    )
}

export default Content