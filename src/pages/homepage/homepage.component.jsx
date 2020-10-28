import React from 'react';
import './homepage.styles.scss'
import Directory from '../../components/directory/directory-component'

import { HomePageContainer } from './homepage.styles'

const HomePage = props => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
)
export default HomePage;