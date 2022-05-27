import { useState, useEffect, Suspense, lazy } from 'react';
import { Container } from './ContentElements';
import content       from '../../data/content'
import axiosClient   from '../../config/axios';
import {RingLoader}  from 'react-spinners';

const  Serie   =  lazy( () => import('../../components/Serie/Serie'));
const  Search  =  lazy( () => import('../../components/Search/Search'));

const Content = ({setNavbutton}) => {
    setNavbutton(true);
    const [aPIs,setAPIs] = useState(false)
    useEffect( () => {
        let api = async (rut) => {
            const res = await axiosClient(rut);
            const data = res.data
            setAPIs(data)
            console.log(data)
        };
        api('/series');
    },[])
    return (
    <Container>

        <Search text={content.engineSearch} />
        <Suspense fallback = {< RingLoader />}>
        {
        aPIs !== false && aPIs.map((serie,i) => {
            if (serie.id != 4){
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