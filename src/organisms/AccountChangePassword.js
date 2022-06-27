
// @mui
import { Box, Grid, Card, Stack} from '@mui/material';
import TextField from '@mui/material/TextField';
import { LoadingButton } from '@mui/lab';


// ----------------------------------------------------------------------

export default function AccountChangePassword() {
 


  return (
    <Card sx={{ p: 3 }}>
      <form>
        <Stack spacing={3}>

        <Box
              sx={{
                display: 'grid',
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
         
            <Grid >
                  <TextField type="password" placeholder="Old Password" label="Old Password" variant="filled"  fullWidth required autoComplete='off'/>
            </Grid>

            <Grid >
                  <TextField type="password" placeholder="New Password" label="New Password" variant="filled" fullWidth  required autoComplete='off'/>
            </Grid>
           
           </Box>
           
            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              

              <LoadingButton type="submit" variant="contained">
                Save Changes
              </LoadingButton>
            </Stack>
        </Stack>
      </form>
    </Card>
  );
}
