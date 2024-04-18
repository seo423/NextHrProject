import { Grid, InputLabel, TextField, Button, Stack } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import React, {  } from 'react';

function WorkExper(){

    const onClickHandler = () => {}


    return(
        <Grid item sm={6} md={5.5}>
        <SubCard title="경력사항">
          <Grid container spacing={gridSpacing}>
            <Grid item md={6} xs={12}>
              <InputLabel>근무처</InputLabel>
              <TextField id="outlined-basic1"  fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>근무기간</InputLabel>
              <TextField id="outlined-basic1"  fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>직위</InputLabel>
              <TextField id="outlined-basic1"  fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>직무</InputLabel>
              <TextField id="outlined-basic1"  fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={4} xs={12}>
              <InputLabel>소재지</InputLabel>
              <TextField id="outlined-basic1"  fullWidth style={{width: '200px'}} />
            </Grid>
            

            <Grid item xs={12}>
              <Stack direction="row">
                <AnimateButton>
                  <Button
                    sx={{ width: '100px' }}
                    onClick={() => {
                      onClickHandler();
                    }}
                    variant="contained"
                  >
                    등록
                  </Button>
                </AnimateButton>
              </Stack>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
);
}
export default WorkExper;