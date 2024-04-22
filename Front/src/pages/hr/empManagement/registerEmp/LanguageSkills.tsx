import { Grid, InputLabel, TextField, Button, Stack } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import React, { useRef } from 'react';

interface LanguageSkillsSetters{
  setTestSubject : React.Dispatch<React.SetStateAction<string | undefined>>;
  setSubject : React.Dispatch<React.SetStateAction<string | undefined>>;
  setScore : React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface LanguageSkillsProps{
  languageSkillSetter : LanguageSkillsSetters;
}

const LanguageSkills: React.FC<LanguageSkillsProps>= ({languageSkillSetter}) => {

  const testSubjectRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const scoreRef = useRef<HTMLInputElement>(null);

    const onSaveHandler = () => {
      const testSubjectref = testSubjectRef.current?.value;
      const subjectref = subjectRef.current?.value;
      const scoreref = scoreRef.current?.value;

      if (testSubjectref?.trim().length === 0 || testSubjectref === null) {
        alert('시험과목명을 입력해 주세요.');
        return;
      } else if (subjectref?.trim().length === 0 || subjectref === null) {
        alert('외국어명을 입력해주세요.');
        return;
      } else if (scoreref?.trim().length === 0 || scoreref === null) {
        alert('공인점수를 입력해주세요.');
        return;
      }
    }


    return(
        <Grid item sm={6} md={8}>
        <SubCard title="어학능력">
          <Grid container spacing={gridSpacing}>
            <Grid item md={6} xs={12}>
              <InputLabel>시험과목명</InputLabel>
              <TextField id="outlined-basic1" inputRef={testSubjectRef} fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>외국어명</InputLabel>
              <TextField id="outlined-basic1" inputRef={subjectRef} fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>공인점수</InputLabel>
              <TextField id="outlined-basic1" inputRef={scoreRef} fullWidth style={{width: '200px'}} />
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
export default LanguageSkills;