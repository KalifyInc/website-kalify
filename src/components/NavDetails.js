import styled from 'styled-components'

const AppDetails = styled.div`
        margin: 20px 0 0 0px;
        display: flex;
        transition: visibility .6s,opacity .6s;
        width: 100%;
        height: 56px;
        top: 40px;
        padding: 0 48px;
        z-index: 82;
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
            border: 2px solid #915095;
            color: #915095;
            font-weight: bold;
            text-transform: uppercase;
            cursor: pointer;

            :hover {
                color: #fff;
                transition: 1s;
                background: #915095;
            }
        }
`

export default AppDetails