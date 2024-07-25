import { Box, Container, Grid, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'

export default function Footer() {

    const styles = {
        container: {
            flexGrow: 1,
            paddingTop: '15px',
            paddingBottom: '35px'
        },
        logoTxt: {
            fontSize: '25px',
            fontWeight: 600,
            color: '#5b5b5b'
        },
        text: {
            fontSize: '12px',
            color: '#5b5b5b',
            marginTop: '10px',
            cursor: 'pointer',
        },
        socialContainer: {
            display: 'flex',
            gap: '15px',
            marginTop: '20px'
        },
        socialIcon: {
            color: '#5b5b5b',
            cursor: 'pointer'
        }
    }

    return (
        <Box sx={{borderTop: '1px solid var(--secondary)'}}>
            <Container sx={{ ...styles.container }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ ...styles.logoTxt }}>
                            Gens Chouette Corp
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box>
                            <Typography sx={{ ...styles.text }} className="primary-font">返品と苦情</Typography>
                            <Typography sx={{ ...styles.text }} className="primary-font">配送とお支払い</Typography>
                            <Typography sx={{ ...styles.text }} className="primary-font">FAQ</Typography>
                            <Typography sx={{ ...styles.text }} className="primary-font">連絡先</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Box>
                            <Typography sx={{ ...styles.text }} className="primary-font">フォローする</Typography>
                            <Box sx={{ ...styles.socialContainer }}>
                                <InstagramIcon sx={{ ...styles.socialIcon }} />
                                <FacebookIcon sx={{ ...styles.socialIcon }} />
                                <TwitterIcon sx={{ ...styles.socialIcon }} />
                                <LinkedInIcon sx={{ ...styles.socialIcon }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
