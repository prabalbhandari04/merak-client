
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Avatar, Divider, Typography } from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
// components
import Image from '../../components/Image';


// ----------------------------------------------------------------------

const OverlayStyle = styled('div')(({ theme }) => ({
  ...cssStyles().bgBlur({ blur: 2, color: theme.palette.primary.darker }),
  top: 0,
  zIndex: 8,
  content: "''",
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

// ----------------------------------------------------------------------


export default function TeamCard({team}) {


  return (
    <Card sx={{ textAlign: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        
        <Avatar
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: 'auto',
            position: 'absolute',
          }}
          style={{textTransform: 'capitalize', background: '#161C24', color: 'white'}}
        >{team.name.charAt(0)}</Avatar>
        <OverlayStyle />
        <Image src="https://assets.rawpixel.com/cover_400/Y29sbGVjdGlvbi9jb3Zlci80NzcyMzJlYTAxYWI3NTIzM2M2ZDI4ZWU2NzRhNzgwNF9jb3Zlci5qcGc.jpg?s=WUHG1DvAuMQmAKUUOZrxiTozvmiK53E7JDMES-P4css" alt="" ratio="16/9" />
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 6 }} style={{textTransform: 'capitalize'}}>
        {team.name}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{textTransform: 'capitalize'}}>
        {team.organization}
      </Typography>

    

      <Divider sx={{ borderStyle: 'dashed', mt: 0.9,}} />


      <Box sx={{ py: 2, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div>
          <Typography variant="caption" component="div" sx={{ mb: 0.75, color: 'text.disabled' }}>
            Team Leader
          </Typography>
          <Typography variant="body2" style={{textTransform: 'capitalize'}}>{team.team_leader}</Typography>
        </div>

      </Box>
    </Card>
  );
}
