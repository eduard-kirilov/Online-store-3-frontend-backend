import React from 'react'
import ReactSVG from 'react-svg'
import { Link } from 'react-router-dom'

import Search from '../../components/Search'
import LoginSrc from '../../assets/login.svg'
import ExitSrc from '../../assets/exit.svg'
import Logo from '../../assets/logo.svg'

import {
    Nav,
    Logos,
    Icons,
    IconText,
    LogosIcon,
    LogosDesc,
} from './Navbar.style'

const Navbar = ({
    data,
    desc,
    logout,
    showModal,
    authorized,
}) => {
    return (
        <Nav>
            <Link to="/">
                <Logos>
                    <LogosIcon src={Logo} alt="logotype" />
                    <LogosDesc>React</LogosDesc>
                </Logos>
            </Link>
            { !desc && <Search data={data}/> }
            {   
                !desc && (authorized
                    ?
                    (
                        !logout
                            ?
                            <Link to="/admin/products">
                                <Icons types="Login" >
                                    <ReactSVG src={LoginSrc}/>
                                    <IconText>Войти</IconText>
                                </Icons>
                            </Link>
                            :
                            <Icons onClick={logout} types="Logoff">
                                <ReactSVG src={ExitSrc} />
                                <IconText>Выйти</IconText>
                            </Icons>
                    )
                    :
                    <Icons onClick={showModal} types="Login" >
                        <ReactSVG src={LoginSrc} />
                        <IconText>Войти</IconText>
                    </Icons>)
            }
        </Nav>
    )
}

export default Navbar