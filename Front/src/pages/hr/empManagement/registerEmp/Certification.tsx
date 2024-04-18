import { Grid, InputLabel, TextField, Button, Stack } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import React, { useRef } from 'react';

function Certification(){

    const DateRef = useRef<HTMLInputElement>(null);    

    const onClickHandler = () => {}


    return(
        <Grid item sm={6} md={8}>
        <SubCard title="자격증">
          <Grid container spacing={gridSpacing}>
            <Grid item md={6} xs={12}>
              <InputLabel>자격증 이름</InputLabel>
              <TextField id="outlined-basic1"  fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>취득일</InputLabel>
              <TextField id="outlined-basic14" inputRef={DateRef} fullWidth type="date" style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>만료일</InputLabel>
              <TextField id="outlined-basic14" inputRef={DateRef} fullWidth type="date" style={{width: '200px'}} />
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
export default Certification;