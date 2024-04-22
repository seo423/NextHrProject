import { Grid, InputLabel, TextField, Button, Stack, FormControl, Select, MenuItem } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import React, { useRef, useState } from 'react';

interface FamilyInfoSetters{
  setFamilyName : React.Dispatch<React.SetStateAction<string | undefined>>;
  setRelation : React.Dispatch<React.SetStateAction<string | undefined>>;
  setFamilyDate : React.Dispatch<React.SetStateAction<string | undefined>>;
  setLiveTogether : React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface FamilyInfoProps{
  familyInfoSetters : FamilyInfoSetters;
}

const FamilyInfo: React.FC<FamilyInfoProps>= ({familyInfoSetters}) => {

  const familyNameRef = useRef<HTMLInputElement>(null);
  const familyDateRef = useRef<HTMLInputElement>(null);
  const relationRef = useRef<HTMLInputElement>(null);
  


  const [liveTogether, setLiveTogether] = useState<number | string>(-1);
  
  const liveTogetherChangeHandler = (value: string) => {
    setLiveTogether(value);
    familyInfoSetters.setLiveTogether(value);
    console.log(value);
  }
    
  
  
  const onSaveHandler = () => {
      const familyNameref = familyNameRef.current?.value;
      const relationref = relationRef.current?.value;
      const familyDateref = familyDateRef.current?.value;
      

      if (familyNameref?.trim().length === 0 || familyNameref === null) {
        alert('가족이름을 입력해 주세요.');
        return;
      } else if (relationref?.trim().length === 0 || relationref === null) {
        alert('관계를 입력해주세요.');
        return;
      } else if (familyDateref?.trim().length === 0 || familyDateref === null) {
        alert('입학일을 입력해주세요.');
        return;
      } else if (Number(liveTogether) === -1) {
        alert('성별을 선택해 주세요.');
        return;
      }

      familyInfoSetters.setFamilyName(familyNameRef.current?.value);
      familyInfoSetters.setRelation(relationRef.current?.value);
      familyInfoSetters.setFamilyDate(familyDateRef.current?.value);
      
    }

    return(
        <Grid item sm={6} md={8}>
        <SubCard title="가족관계">
          <Grid container spacing={gridSpacing}>
            <Grid item md={6} xs={12}>
              <InputLabel>가족이름</InputLabel>
              <TextField id="outlined-basic1" inputRef={familyNameRef}  fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>관계</InputLabel>
              <TextField id="outlined-basic1" inputRef={relationRef}  fullWidth style={{width: '200px'}} />
            </Grid>
            <Grid item md={6} xs={12}>
              <InputLabel>가족생일</InputLabel>
              <TextField id="outlined-basic14" inputRef={familyDateRef} fullWidth type="date" style={{width: '200px'}} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>동거여부</InputLabel>
              <FormControl fullWidth style={{width: '200px'}}>
                <Select defaultValue="-1" onChange={(e) => liveTogetherChangeHandler(e.target.value)}>
                  <MenuItem value={'동거'}>동거</MenuItem>
                  <MenuItem value={'비동거'}>비동거</MenuItem>
                </Select>
              </FormControl>
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
export default FamilyInfo;