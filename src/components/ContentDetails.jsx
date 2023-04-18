import styled from 'styled-components'

const ContentDetails = styled.div`

    .content {
        background: #181a1b;

        .circle-centralized {
            margin-left: -250px;
        }

        .circleKalify {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            margin-top: 40px;
            margin-bottom: 80px;
            margin-right: auto;
            margin-left: auto;
            box-shadow: 0 0 20px #fff,
            -20px 0 80px #f0f,
            20px 0 80px #0ff,
            inset 0 0 50px #fff,
            inset 50px 0 80px #f0f,
            inset -50px 0 80px #0ff,
            inset 50px 0 300px #f0f,
            inset -50px 0 300px #0ff;
            animation: pulsate 8s linear infinite;
        }
        
        @keyframes pulsate {
            50% {
            box-shadow:
                0 0 20px #fff,
                20px 0 80px #f0f,
                -20px 0 80px #0ff,
                inset 0 0 50px #fff,
                inset -50px 0 80px #f0f,
                inset 50px 0 80px #0ff,
                inset -50px 0 300px #f0f,
                inset 50px 0 300px #0ff;
            }
        }

        .kalifytech {
            margin-left: 300px;
            padding-top: 50px;
            color: #e5e5e5;

            h2 {
                text-transform: uppercase;
                font-size: 30px;
            }

            p {
                width: 800px;
                margin-top: 20px;
            }

            img {
                margin-left: -100px;
                margin-top: 20px;
            }
        }

        .banner {
            margin-left: -100px;
            width: 960px;
            margin-top: 20px;
        }

        .copyright {
            margin-left: 100px;
            padding-bottom: 20px;
        }

        /* CONTENT RESPONSIVITY */

        @media screen and (min-width: 1920px) {
            .circle-centralized {
                margin-left: -500px;
            }

            .kalifytech {
                margin-left: 560px;
            }
        }

        @media screen and (max-width: 1024px) {
            overflow-x: hidden;

            .circle-centralized {
                margin-left: -100px;
            }

            .kalifytech {
                margin-left: 100px;

                img {
                    margin-left: -80px;
                }
            }
        }

        @media screen and (max-width: 768px) {
            
            .kalifytech {
                margin-left: 50px;

                p {
                    width: 650px;
                }

                img {
                    width: 650px;
                    margin-left: -10px;
                }
            }
        }

        @media screen and (max-width: 600px) {
            .circle-centralized {
                margin-left: -50px;
            }

            .kalifytech {
                p {
                    width: 500px;
                }

                img {
                    width: 500px;
                }
            }
        }

        @media screen and (max-width: 414px) {
            .kalifytech {
                margin-left: 25px;

                p {
                    width: 325px;
                }

                img {
                    width: 360px;
                }
            }
        }

        @media screen and (max-width: 375px) {
            .circle-centralized {
                .circleKalify {
                    width: 250px;
                    height: 250px;
                }
            }

            .kalifytech {
                margin-left: 30px;

                p {
                    width: 300px;
                }

                img {
                    width: 320px;
                }
            }
        }

        @media screen and (max-width: 320px){
            .kalifytech {
                p {
                    width: 250px;
                }

                img {
                    width: 270px;
                }
            }
        }
    }

    /* BOX CONTENT RESPONSIVITY */

    @media screen and (max-width: 1024px) {
        .content {
            margin-top: -70px;
        }
    }

    @media screen and (max-width: 768px) {
        .content {
            margin-top: -70px;
        }
    }

    .kalifycrew {
        margin-left: 350px;
        padding-top: 50px;
        color: #e5e5e5;

        @media (max-width: 1366px) {
            margin-left: 150px;
        }

        h2 {
            text-transform: uppercase;
            font-size: 30px;
            margin-left: 25px;
        }

        strong {
            text-transform: uppercase;
        }

        i {
            font-size: 16px;
        }

        p {
            width: 800px;
            margin-top: 20px;
        }

        .img-crew img {
            width: 150px;
            margin-left: 20px;
            border-radius: 50%;
        }

        .content-crew {
            margin-top: -180px;
            margin-left: 200px;

            p {
                width: 750px;
                margin-left: 0px;
            }
        }

        .spacing {
            margin-top: 80px;
        }

        @media (max-width: 1024px) {
            margin-left: 70px;

            .content-crew {
                strong, p {
                    width: 625px;
                }
            }
        }

        @media (max-width: 820px) {
            margin-left: 0;

            .content-crew {
                strong, p {
                    width: 565px;
                }
            }
        }

        @media (max-width: 768px) {
            margin-left: 0;

            .content-crew {
                margin-top: 0;
                margin-left: 0;

                strong, p {
                    width: 655px;
                }
            }
        }

        @media (max-width: 414px) {
            .content-crew {
                strong, p {
                    width: 305px;
                }
            }
        }
        
        @media (max-width: 375px) {
            .content-crew {
                strong, p {
                    width: 300px;
                }
            }
        }

        @media (max-width: 320px) {
            .content-crew {
                strong, p {
                    width: 290px;
                }
            }
        }
    }

    .disabled {
        filter: opacity(0.2);
        filter: grayscale(100);
    }
`

export default ContentDetails