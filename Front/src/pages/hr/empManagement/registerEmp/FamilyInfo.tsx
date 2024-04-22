import { Grid, InputLabel, TextField, Button, Stack } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import React, { useRef } from 'react';

function FamilyInfo(){

  const DateRef = useRef<HTMLInputElement>(null);
    const onClickHandler = () => {}

    return(
        <Grid item sm={6} md={8}>
        <SubCard title="가족관계">
          <Grid container spacing={gridSpacing}>
            <Grid item md={6} xs={12}>
              <InputLabel>가족이름</InputLabel>
              <TextField id="outlined-basic1"  fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>관계</InputLabel>
              <TextField id="outlined-basic1"  fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>가족생일</InputLabel>
              <TextField id="outlined-basic14" inputRef={DateRef} fullWidth type="date" style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>동거여부</InputLabel>
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
export default FamilyInfo;