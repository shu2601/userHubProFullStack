
import { Box, Typography, styled } from '@mui/material';
// import Youtube from '../Assets/Images/youtube.png';
// import InstaTele from '../Assets/Images/InstaTele.jpeg';
import CRUD from '../Assets/Images/CRUD (2).jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const CodeForInterview = () => {
    
    return (

        <>
        <div className='' style={{ height: "100%", overflow: "hidden",padding: "0px" }}>
    <img src={CRUD} alt="" style={{ width: "100%", objectFit: "cover" }} />
</div>

        </>
    )
}

export default CodeForInterview;