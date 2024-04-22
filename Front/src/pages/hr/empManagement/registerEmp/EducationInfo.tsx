import { Grid, InputLabel, TextField, Button, Stack } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import React, { useRef } from 'react';

interface EducationInfoSetters{
  setSchoolName : React.Dispatch<React.SetStateAction<string | undefined>>;
  setMajor : React.Dispatch<React.SetStateAction<string | undefined>>;
  setEntranceDate : React.Dispatch<React.SetStateAction<string | undefined>>;
  setGraduateDate : React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface EducationInfoProps{
  educationInfoSetters : EducationInfoSetters;
}
const EducationInfo: React.FC<EducationInfoProps>= ({educationInfoSetters}) => {

  const schoolNameRef = useRef<HTMLInputElement>(null);
  const majorRef = useRef<HTMLInputElement>(null);
  const entranceDateRef = useRef<HTMLInputElement>(null);
  const graduateDateRef = useRef<HTMLInputElement>(null);

  

    const onSaveHandler = () => {
      const schoolNameref = schoolNameRef.current?.value;
      const majorref = majorRef.current?.value;
      const entranceDateref = entranceDateRef.current?.value;
      const graduateDateref = graduateDateRef.current?.value;

      if (schoolNameref?.trim().length === 0 || schoolNameref === null) {
        alert('학교명을 입력해 주세요.');
        return;
      } else if (majorref?.trim().length === 0 || majorref === null) {
        alert('전공을 입력해주세요.');
        return;
      } else if (entranceDateref?.trim().length === 0 || entranceDateref === null) {
        alert('입학일을 입력해주세요.');
        return;
      } else if (graduateDateref?.trim().length === 0 || graduateDateref === null) {
        alert('졸업일 입력해주세요.');
        return;
      }

      educationInfoSetters.setSchoolName(schoolNameRef.current?.value);
      educationInfoSetters.setMajor(majorRef.current?.value);
      educationInfoSetters.setEntranceDate(entranceDateRef.current?.value);
    }


    return(
        <Grid item sm={6} md={8}>
        <SubCard title="학력정보">
          <Grid container spacing={gridSpacing}>
            <Grid item md={6} xs={12}>
              <InputLabel>학교명</InputLabel>
              <TextField id="outlined-basic1" inputRef={schoolNameRef}  fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>전공</InputLabel>
              <TextField id="outlined-basic1" inputRef={majorRef}  fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>입학일</InputLabel>
              <TextField id="outlined-basic14" inputRef={entranceDateRef} fullWidth type="date" style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>졸업일</InputLabel>
              <TextField id="outlined-basic14" inputRef={graduateDateRef} fullWidth type="date" style={{width: '200px'}} />
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
export default EducationInfo;