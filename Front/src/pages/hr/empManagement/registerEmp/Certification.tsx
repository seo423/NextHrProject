import { Grid, InputLabel, TextField, Button, Stack } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import React, { useRef } from 'react';

interface CertificationSetters{
  setCertificationsName : React.Dispatch<React.SetStateAction<string | undefined>>;
  setAquisitionDate : React.Dispatch<React.SetStateAction<string | undefined>>;
  setExpirationDate : React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface CertificationProps{
  certificationSetters : CertificationSetters;
}

const Certification: React.FC<CertificationProps>= ({certificationSetters}) => {

    const certificationsNameRef = useRef<HTMLInputElement>(null);
    const acquisitionDateRef = useRef<HTMLInputElement>(null);
    const expirationDateRef = useRef<HTMLInputElement>(null);    

    const onSaveHandler = () => {
      const certificationsNameref = certificationsNameRef.current?.value;
      const acquisitionDateref = acquisitionDateRef.current?.value;
      const expirationDateref = expirationDateRef.current?.value;
      
      if (certificationsNameref?.trim().length === 0 || certificationsNameref === null) {
        alert('자격증 이름을 입력해 주세요.');
        return;
      } else if (acquisitionDateref?.trim().length === 0 || acquisitionDateref === null) {
        alert('취득일을 입력해주세요.');
        return;
      } else if (expirationDateref?.trim().length === 0 || expirationDateref === null) {
        alert('만료일을 입력해주세요.');
        return;
      }

    }


    return(
        <Grid item sm={6} md={8}>
        <SubCard title="자격증">
          <Grid container spacing={gridSpacing}>
            <Grid item md={6} xs={12}>
              <InputLabel>자격증 이름</InputLabel>
              <TextField id="outlined-basic1" inputRef={certificationsNameRef} fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>취득일</InputLabel>
              <TextField id="outlined-basic14" inputRef={acquisitionDateRef} fullWidth type="date" style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>만료일</InputLabel>
              <TextField id="outlined-basic14" inputRef={expirationDateRef} fullWidth type="date" style={{width: '200px'}} />
            </Grid>
            

            <Grid item xs={12}>
              <Stack direction="row">
                <AnimateButton>
                  <Button
                    sx={{ width: '100px' }}
                    onClick={() => {
                      onSaveHandler();
                    }}
                    variant="contained"
                  >
                    저장
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