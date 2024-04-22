import { Grid, InputLabel, TextField, Button, Stack } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import React, { useRef } from 'react';

interface WorkExperSetters{
  setPlaceOfEmployment : React.Dispatch<React.SetStateAction<string | undefined>>;
  setEmploymentPeriod : React.Dispatch<React.SetStateAction<string | undefined>>;
  setWorkedPosition : React.Dispatch<React.SetStateAction<string | undefined>>;
  setJobDuties :React.Dispatch<React.SetStateAction<string | undefined>>;
  setWorkAddress : React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface WorkExperProps{
  workExperSetters : WorkExperSetters;
}

const WorkExper: React.FC<WorkExperProps>= ({workExperSetters}) => {

  const placeOfEmploymentRef = useRef<HTMLInputElement>(null);
  const employmentPeriodRef = useRef<HTMLInputElement>(null);
  const workedPositionRef = useRef<HTMLInputElement>(null);
  const jobDutiesRef = useRef<HTMLInputElement>(null);
  const workAddressRef = useRef<HTMLInputElement>(null);

    const onSaveHandler = () => {
      const placeOfEmploymentref = placeOfEmploymentRef.current?.value;
      const employmentPeriodref = employmentPeriodRef.current?.value;
      const workedPositionref = workedPositionRef.current?.value;
      const jobDutiesref = jobDutiesRef.current?.value;
      const workAddressref = workAddressRef.current?.value;

      
      if (placeOfEmploymentref?.trim().length === 0 || placeOfEmploymentref === null) {
        alert('근무처를 입력해 주세요.');
        return;
      } else if (employmentPeriodref?.trim().length === 0 || employmentPeriodref === null) {
        alert('근무기간을 입력해주세요.');
        return;
      } else if (workedPositionref?.trim().length === 0 || workedPositionref === null) {
        alert('직위를 입력해주세요.');
        return;
      } else if (jobDutiesref?.trim().length === 0 || jobDutiesref === null) {
        alert('직무를 입력해주세요.');
        return;
      } else if (workAddressref?.trim().length === 0 || workAddressref === null) {
        alert('소재지를 입력해주세요.');
        return;
      }

      workExperSetters.setPlaceOfEmployment(placeOfEmploymentRef.current?.value);
      workExperSetters.setEmploymentPeriod(employmentPeriodRef.current?.value);
      workExperSetters.setWorkedPosition(workedPositionRef.current?.value);
      workExperSetters.setJobDuties(jobDutiesRef.current?.value);
      workExperSetters.setWorkAddress(workAddressRef.current?.value);

    }


    return(
        <Grid item sm={6} md={5.5}>
        <SubCard title="경력사항">
          <Grid container spacing={gridSpacing}>
            <Grid item md={6} xs={12}>
              <InputLabel>근무처</InputLabel>
              <TextField id="outlined-basic1" inputRef={placeOfEmploymentRef} fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>근무기간</InputLabel>
              <TextField id="outlined-basic1" inputRef={employmentPeriodRef} fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>직위</InputLabel>
              <TextField id="outlined-basic1" inputRef={workedPositionRef} fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>직무</InputLabel>
              <TextField id="outlined-basic1" inputRef={jobDutiesRef} fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={4} xs={12}>
              <InputLabel>소재지</InputLabel>
              <TextField id="outlined-basic1" inputRef={workAddressRef} fullWidth style={{width: '200px'}} />
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
export default WorkExper;