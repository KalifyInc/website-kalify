import styled from 'styled-components'

const SubPageDetails = styled.div`
    .content {
        padding: 4rem 0 2rem 4rem;
        width: 93rem;

        @media (max-width: 1366px) {
            width: 80rem;
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

        .BgPizza {
            margin-left: 18rem;

            @media (max-width: 1366px) {
                margin-left: -2rem;
            }
        }
    }
`

export default SubPageDetails