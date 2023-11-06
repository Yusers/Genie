import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Địa chỉ giao hàng
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='Họ và Tên'
            fullWidth
            autoComplete='given-name'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='address1'
            name='address1'
            label='Địa chỉ hiện tại'
            fullWidth
            autoComplete='shipping address-line1'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='address2'
            name='address2'
            label='Địa chỉ thay thế'
            fullWidth
            autoComplete='shipping address-line2'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='city'
            name='city'
            label='Thành Phố'
            fullWidth
            autoComplete='shipping address-level2'
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='district'
            name='district'
            label='Quận huyện'
            fullWidth
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='zip'
            name='zip'
            label='Phường xã'
            fullWidth
            variant='standard'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='zip'
            name='zip'
            label='Zip / Postal code'
            fullWidth
            variant='standard'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='note'
            name='note'
            label='Ghi chú'
            fullWidth
            variant='standard'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color='secondary' name='saveAddress' value='yes' />}
            label='Sử dụng địa chỉ này để giao hàng'
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
