import styled from 'styled-components';
import Theme from '../../theme/theme';

export const TopNavHeight = 68;
export const TopNavVeticalPadding = 13;
export const TopNavFullHeight = TopNavHeight + (TopNavVeticalPadding * 2);

const TopNav = styled.nav`
	top: 0;
	left: 0;
	right: 0;
	z-index: 5;
	display: flex;
	flex-flow: row nowrap;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 21%);
	padding: ${TopNavVeticalPadding + 'px 27px'};
	height:  ${TopNavHeight + 'px'};
	align-items: center;
	background: ${Theme.palette.primary.light};
`;

const navigation = {
	TopNav
};

export default navigation;