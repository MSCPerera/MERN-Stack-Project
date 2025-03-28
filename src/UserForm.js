import { Button, colors, Grid2 } from "@mui/material";

const UserForm = props => {
    return (
        <Grid2
            container
            spacinge={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}
        >

            <Grid2 item xs={12}>
                <Typography component={'h1'} sx={{ color: '#000000'}}></Typography>
            </Grid2>
            
            <Grid2 item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'}
                    htmlfor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    ID
                </Typography>
                <Input 
                    type="number"
                    id='id'
                    name="id"
                    sx={{width: '400px'}}
                    value={''}
                    onChange={e => {}}
                />
            </Grid2>

            <Grid2 item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'}
                    htmlfor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Name
                </Typography>
                <Input 
                    type="number"
                    id='name'
                    name="name"
                    sx={{width: '400px'}}
                    value={''}
                    onChange={e => {}}
                />
            </Grid2>

            <Button sx={{
                margin: 'auto',
                marginBottom: '20px',
                backgroundColor: '#00c6e6',
                color: '#000000',
                marginLeft: '15px',
                marginTop: '20px', '&:hover': {
                    opacity: '0.7',
                    backgroundColor: '#00c6e6',
                }
            }}>
                Add
            </Button>

        </Grid2>
    );
}

export default UserForm;