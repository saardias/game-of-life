import React from 'react'
import { NavLink } from 'react-router-dom';

import Routes from '../../routes';
import { Typography } from '../ui/Typography';
import Nav from './NavigationComponents';

const TopNavigation = (props: any) => {

    return (
        <Nav.TopNav>
            <NavLink
                style={{ textDecoration: 'none' }}
                to={Routes.Game.home}>
                <Typography
                    color='primary'
                    varient='h3'>
                    Game Of Life
                </Typography>
            </NavLink>
        </Nav.TopNav>
    )
}

export default TopNavigation;
