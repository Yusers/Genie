import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Name must have at least 3 characters').required('Name is required'),
  age: Yup.number().required('Age is required').positive().integer(),
  gender: Yup.string().required('Gender is required'),
  zodiac: Yup.string().required('Zodiac is required'),
});

const WeeklyOutfit = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      gender: '',
      zodiac: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const inputStyle = { marginBottom: '16px', padding: '8px' }; // Added padding

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <div style={inputStyle}>
          <TextField
            label='Name'
            variant='outlined'
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            fullWidth
            style={{ padding: '8px' }} // Added padding
          />
        </div>
        <div style={inputStyle}>
          <TextField
            label='Age'
            variant='outlined'
            name='age'
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
            fullWidth
            style={{ padding: '8px' }} // Added padding
          />
        </div>
        <div style={inputStyle}>
          <TextField
            label='Gender'
            variant='outlined'
            name='gender'
            value={formik.values.gender}
            onChange={formik.handleChange}
            error={formik.touched.gender && Boolean(formik.errors.gender)}
            helperText={formik.touched.gender && formik.errors.gender}
            fullWidth
            style={{ padding: '8px' }} // Added padding
          />
        </div>
        <div style={inputStyle}>
          <TextField
            label='Zodiac'
            variant='outlined'
            name='zodiac'
            value={formik.values.zodiac}
            onChange={formik.handleChange}
            error={formik.touched.zodiac && Boolean(formik.errors.zodiac)}
            helperText={formik.touched.zodiac && formik.errors.zodiac}
            fullWidth
            style={{ padding: '8px' }} // Added padding
          />
        </div>
        <div style={{textAlign: 'end'}}>
          <Button style={{ padding: '8px', marginRight: '14px' }} variant='contained' color='primary' type='submit'>
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default WeeklyOutfit;
