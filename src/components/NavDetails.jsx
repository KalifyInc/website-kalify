import styled from 'styled-components'

const AppDetails = styled.div`
    margin: 50px 0 0 0;
    display: flex;
    width: 100%;
    padding: 0 10rem;
    justify-content: space-between;
    display: flex;

    img {
        width: 80px;
        height: 80px;
    }

    .items {
        margin-top: 15px;
    }

    a {
        margin-right: 50px;
        color: #fff;
        text-decoration: none;
        font-size: 18px;
    }

    .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: #fff;
    }

    .hover-underline-animation:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #fff;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    button {
        margin-right: 30px;
        padding: 20px;
        background: transparent;
        border: 2px solid #8753ff;
        color: #8753ff;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
    }

    button:hover {
        color: #fff;
        transition: 1s;
        background: #8753ff;
    }

    @media screen and (max-width: 1024px) {
        opacity: 0 10px;
        width: 100%;

        .items {
            margin-top: 10px;
        }

        a {
            margin-right: 20px;
        }
    }

    @media screen and (max-width: 820px) {
        opacity: 0 10px;
        width: 100%;

        .items {
            margin-top: 10px;
        }

        a {
            font-size: 14px;
            margin-right: 10px;
        }
    }

    @media screen and (max-width: 768px) {
        img {
            margin-left: 0rem;
        }

        .items {
            display: none;
        }

        button {
            padding: 0px;
        }
    }
    
    @media screen and (max-width: 600px) {
        margin: 50px 0 0 200px;
    }

    @media screen and (max-width: 414px) {
        margin: 50px 0 0 120px;
    }

    @media screen and (max-width: 375px) {
        margin: 50px 0 0 100px;
    }

    @media screen and (max-width: 320px) {
        margin: 50px 0 0 70px;
    }
`

export default AppDetails