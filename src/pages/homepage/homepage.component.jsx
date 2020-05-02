import React from 'react';
import './homepage.styles.scss';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component';
import {HomePageContainer} from './homepage.styles';

const HomePage = () => {
    return(
        <HomePageContainer>
            <DirectoryMenu/>
        </HomePageContainer>
    )

}

export default HomePage;