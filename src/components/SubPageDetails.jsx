import styled from 'styled-components'

const SubPageDetails = styled.div`
    background:#181a1b;

    .content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 2rem 0 2rem 4rem;
        width: 93rem;

        @media (max-width: 1366px) {
            width: 74rem;
        }

        img, h1, p, h3, i {
            margin-left: 28rem;

            @media (max-width: 1366px) {
                margin-left: 10rem;
            }
        }

        h1, p, h3, i {
            color: #e5e5e5;
        }

        img, p {
            margin-bottom: 1rem;
        }

        img {
            margin-top: 1.2rem;
        }

        .description {
            width: 40rem;
            font-style: italic;
        }

        .links {
            margin-top: -1rem;
            a {
                color: #00b3d5;
            }
        }

        li:first-child {
            margin-top: 1.2rem;
        }

        @media (max-width: 1024px) {
            width: 60rem;
            margin-right: 50px;

            img, h1, p, h3, i, .description {
                margin-left: 5rem;
            }

            hr {
                margin-left: 8rem;
            }
        }

        @media (max-width: 820px) {
            width: 50rem;
            margin-right: 50px;
            padding-left: 2rem;

            img, h1, p, h3, i, .description {
                margin-left: 0;
            }

            hr {
                margin-left: 4rem;
            }

            a {
                margin-right: 0;
            }
        }

        @media (max-width: 768px) {
            width: 45rem;

            img, h1, p, h3, i, .description {
                margin-left: 0rem;
                width: 43rem;
            }

            hr {
                width: 30rem;
                margin-left: 5rem;
            }
        }

        @media (max-width: 600px) {
            width: 30rem;

            img, h1, p, h3, i, .description {
                margin-left: 0rem;
                width: 25rem;
            }

            hr {
                width: 15rem;
                margin-left: 5rem;
            }
        }

        @media (max-width: 426px) {
            width: 25rem;

            img, h1, p, h3, i, .description {
                margin-left: 0rem;
                width: 23rem;
            }

            hr {
                width: 13rem;
                margin-left: 4rem;
            }
        }

        @media (max-width: 414px) {
            width: 23rem;
            padding-left: 2rem;
            padding-top: 1rem;

            img, h1, p, h3, i, .description {
                margin-left: 0rem;
                width: 21rem;
            }

            hr {
                width: 13rem;
                margin-left: 2rem;
            }
        }

        @media (max-width: 360px) {
            width: 21rem;
            padding-left: 1rem;

            img, h1, p, h3, i, .description {
                width: 20rem;
            }
        }
        @media (max-width: 320px) {
            width: 19rem;
            padding-left: 1rem;

            img, h1, p, h3, i, .description {
                width: 18rem;
            }
        }
    }
`

export default SubPageDetails