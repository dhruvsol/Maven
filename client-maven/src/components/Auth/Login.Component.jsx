import React from 'react'
import './Login.Style.scss'
import styled from 'styled-components'
export const Login = () => {
    return (
        <Container className='Login'>
            <div className='Login-card'>
                <div className='Login-heading'>
                    <span className='Login-welcome'>Welcome to<strong> MAVEN</strong></span>
                    <span><p>No Account ?</p><a href="/signup">Signup</a></span>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
background: url("/images/bg.png");
`