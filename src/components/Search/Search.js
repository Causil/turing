import React from 'react';
import {
Container,
Input,
Img,
WraperSearch,
} from './SearchElements';
import content  from '../../data/content';
const Search = () => {

    return (
            <Container> 
                <WraperSearch>
                    <Input placeholder={content.engineSearch[0]} />
                    <Img  src={content.engineSearch[1]} alt='logoBuscar' />
                </WraperSearch>
            </Container>
    )
}

export default Search