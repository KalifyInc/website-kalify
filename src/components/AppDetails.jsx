import styled from 'styled-components'

const AppDetails = styled.div`
    .header {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100vh;
        min-height: 630px;
        width: 100%;

        video {
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: -1;
            filter: brightness(0.4);
        }
    }

    .title {
        color: #e5e5e5;
        display: flex;
        align-items: left;
        flex-direction: column;
        font-size: 50px;
        margin: 50px 0 0 300px;

        .buttonSignUp {
            width: 250px;
            padding: 20px;
            margin-top: 1rem;
            background: transparent;
            border: 2px solid #915095;
            color: #915095;
            font-size: 0.9rem;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;
            cursor: pointer;

            :hover {
                color: #fff;
                transition: 1s;
                background: #915095;
            }

            @media (max-width: 768px) {
                margin-left: 1.2rem;
            }
        }

        h2 {
            font-weight: 400;
            font-size: 60px;
            width: 800px;
            line-height: 80px;
        }
        
        h4 {
            font-weight: 200;
            margin-top: 20px;
            font-size: 30px;
            width: 800px;
        }
    }

    /* HEADER - TITLE */

    @media (min-width: 1920px) {
        .title {
            margin: 200px 0 0 300px;
        }
    }

    @media (max-width: 1024px) {
        .title {
            margin: 200px 0 0 100px;
        }
    }

    @media (max-width: 768px) {
        .header {
            width: 100px;
        }

        .title {
            margin: 200px 0 0 20px;

            h2 {
                font-size: 50px;
                width: 700px;
                margin-left: -20px;
            }

            h4 {
                width: 600px;
                margin-left: -20px;
            }
        }
    }

    @media (max-width: 600px) {
        .title {
            margin: 150px 0 0 50px;

            h2 {
                font-size: 40px;
                width: 600px;
            }

            h4 {
                width: 500px;
            }
        }
    }

    @media (max-width: 414px) {
        .title {
            margin: 125px 0 0 50px;

            h2 {
                font-size: 30px;
                width: 350px;
                line-height: 40px;
            }

            h4 {
                width: 300px;
                font-size: 20px;
            }
        }
    }

    @media (max-width: 375px) {
        .title {
            margin: 100px 0 0 50px;

            h2 {
                font-size: 30px;
                width: 300px;
                line-height: 40px;
            }

            h4 {
                width: 250px;
                font-size: 20px;
            }
        }
    }

    @media (max-width:320px) {
        .title {
            margin: 50px 0 0 30px;
        }
    }

    .socialmedia {
        color: #e5e5e5;
        display: flex;
        align-items: right;
        justify-content: right;
        margin: 50px 100px 0 0;

        i {
            margin-right: 20px;
            font-size: 20px;
        }

        a {
            color: #e5e5e5;
            text-decoration: none;
        }
    }

    /* SOCIAL MEDIA ICONS */

    @media (min-width: 1920px) {
        .socialmedia {
            margin: 50px 100px 0 0;

            i {
                font-size: 30px;
            }
        }
    }

    @media (max-width: 768px) {
        .socialmedia {
            i {
                margin-left: 0.5rem;
                font-size: 30px;
            }
        }
    }

    @media (max-width: 600px) {
        .socialmedia {
            margin: 100px 0 0 400px;
        }
    }

    @media (max-width: 414px) {
        .socialmedia {
            margin: 50px 0 0 320px;
        }
    }

    @media (max-width: 375px) {
        .socialmedia {
            margin: 50px 0 0 290px;
        }
    }

    @media (max-width: 320px) {
        .socialmedia {
            margin: 50px 0 0 260px;
        }
    }
`

export default AppDetails