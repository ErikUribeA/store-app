'use client'
import Link from "next/link";
import styled from "styled-components";
// import SelectLanguage from "../inputs/selectLanguege";
import { useTranslations } from "next-intl";
// import ShoppingCartModal from "../modals/modalOverlay";



const NavbarContainer = styled.nav`
  background: linear-gradient(90deg, #00c6ff, #0072ff);
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
`;

const UL = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 40%;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffdd00;
  }
`;

const MainNavBar: React.FC = () => {
    // const translate = useTranslations('');
    return (
        <NavbarContainer>
            <UL>
                <NavItem>
                    <StyledLink href="/">Home</StyledLink>
                </NavItem>
                <NavItem>
                    {/* <SelectLanguage /> */}
                </NavItem>
            </UL>
            <StyledLink  href="/login">Login</StyledLink>
            <StyledLink  href="/register">Register</StyledLink>
            {/* <ShoppingCartModal /> */}
        </NavbarContainer>
    );
};

export default MainNavBar;
