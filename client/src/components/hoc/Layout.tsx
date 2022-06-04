import styled from 'styled-components';
import { IParent } from '../../interfaces/common/base';
import { TopNavFullHeight } from '../navigation/NavigationComponents';
import TopNavigation from '../navigation/TopNavigation';

const LayoutContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
`;

const PageContainer = styled.div`
    height: calc(100% - ${TopNavFullHeight}px);
    margin-top: ${TopNavFullHeight}px;
`;

const Layout = ({ children }: IParent) => {
    return (
        <LayoutContainer>
            <TopNavigation />
            <PageContainer>
                {children}
            </PageContainer>
        </LayoutContainer>
    )
}

export default Layout;