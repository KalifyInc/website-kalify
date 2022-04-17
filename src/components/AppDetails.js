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
        margin: 100px 0 0 300px;

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

    .content {
        background: #181a1b;

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

        .disabled {
            filter: opacity(0.2);
        }

        .kalifycrew {
            margin-left: 300px;
            padding-top: 50px;
            color: #e5e5e5;

            h2 {
                text-transform: uppercase;
                font-size: 30px;
                margin-left: -80px;
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
                margin-left: -80px;
                margin-top: 10px;
            }

            .content-crew {
                margin-top: -160px;
                margin-left: 90px;

                p {
                    width: 750px;
                }
            }

            .spacing {
                margin-top: 80px;
            }
        }

        .banner {
            margin-left: -120px;
            width: 960px;
            margin-top: 20px;
        }

        .copyright {
            margin-left: 100px;
            padding-bottom: 20px;
        }
    }
`

export default AppDetails