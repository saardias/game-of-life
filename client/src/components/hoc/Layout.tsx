import styled from 'styled-components';
import { IParent } from '../../interfaces/common/base';
import TopNavigation from '../navigation/TopNavigation';

const LayoutContainer = styled.div`
    width: 100%;
    overflow: scroll;
`;

const Layout = ({ children }: IParent) => {
    return (
        <LayoutContainer>
            <TopNavigation />
            {children}
        </LayoutContainer>
    )
}

export default Layout;