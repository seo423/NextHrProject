import { Grid, InputLabel, TextField, FormControl, Select, MenuItem, Button, Stack } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dailyAttendAction } from 'store/redux-saga/reducer/attendance/DailyAttendReducer';
import { positionAction } from 'store/redux-saga/reducer/base/positionReducer';
import { RootState } from 'store/reducer';

interface StateSetters {
  setEmpName: React.Dispatch<React.SetStateAction<string | undefined>>;
  setBirthDate: React.Dispatch<React.SetStateAction<string | undefined>>;
  setMobileNumber: React.Dispatch<React.SetStateAction<string | undefined>>;
  setAddress: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDetailAddress: React.Dispatch<React.SetStateAction<string | undefined>>;
  setPostNumber: React.Dispatch<React.SetStateAction<string | undefined>>;
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
  setResidentId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDept: React.Dispatch<React.SetStateAction<string | undefined>>;
  setGender: React.Dispatch<React.SetStateAction<string | undefined>>;
  setLastSchool: React.Dispatch<React.SetStateAction<string | undefined>>;
  setPosition: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSalaryStep: React.Dispatch<React.SetStateAction<string | undefined>>;
  setEmployment: React.Dispatch<React.SetStateAction<string | undefined>>;
  setOccupation: React.Dispatch<React.SetStateAction<string | undefined>>;
  setHireDate: React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface EmpRegisterProps {
  stateSetters: StateSetters;
}

const EmpRegister: React.FC<EmpRegisterProps> = ({ stateSetters }) => {
    const dispatch = useDispatch();

    const empNameRef = useRef<HTMLInputElement>(null);
    const birthDateRef = useRef<HTMLInputElement>(null);
    const hireDateRef = useRef<HTMLInputElement>(null);
    const mobileNumberRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const detailAddressRef = useRef<HTMLInputElement>(null);
    const postNumberRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const residentIdRef = useRef<HTMLInputElement>(null);
    
    const [dept, setDept] = useState<number | string>(-1);
    const [gender, setGender] = useState<number | string>(-1);
    const [lastSchool, setLastSchool] = useState<number | string>(-1);
    const [position, setPosition] = useState<number | string>(-1);
    const [salaryStep, setSalaryStep] = useState<number | string>(-1);
    const [employment, setEmployment] = useState<number | string>(-1);
    const [occupation, setOccupation] = useState<number | string>(-1);
    const [hireDate, setHireDate] = useState<number | string>('');


    const deptList = useSelector((state: RootState) => (state.dailyAttend.deptlist !== undefined ? state.dailyAttend.deptlist : []));
    const positionList = useSelector((state: RootState) => (state.positionList.positionList !== undefined ? state.positionList.positionList : []));

    useEffect(() => {
      console.log('dispatch호출됨');
      dispatch(dailyAttendAction.DEPT_LIST_SEARCH_FETCH_REQUESTED(''));
      dispatch(positionAction.POSITION_LIST_SEARCH_FETCH_REQUESTED(''));
    }, []);

    //화면에 보일 부서 선택 리스트 생성
    const deptLists = deptList.map((item: any) => {
      return (
        <MenuItem value={item.deptCode} key={item.deptCode}>
          {item.deptName}
        </MenuItem>
      );
  });

  
    //화면에 보일 직급 선택 리스트 생성
    const positionLists = positionList.map((item: any) => {
      return (
        <MenuItem value={item.positionCode} key={item.positionCode}>
          {item.position}
        </MenuItem>
      );
  });
    
    //화면에 보일 호봉 선택 리스트 생성
    const hobongs = Array.from({ length: 10 }, (_, index) => `${index + 1}호봉`);

    const hobongMenuItems = hobongs.map((hobong) => (
      <MenuItem key={hobong} value={hobong}>
        {hobong}
      </MenuItem>
    ));
    
    const deptChangeHandler = (value: string) => {
        setDept(value);
        stateSetters.setDept(value);
        console.log(value);
      };
    
      const genderChangeHandler = (value: string) => {
        setGender(value);
        stateSetters.setGender(value);
        console.log(value);
      };
    
      const lastSchoolChangeHandler = (value: string) => {
        setLastSchool(value);
        stateSetters.setLastSchool(value);
        console.log(value);
      };
    
      const positionChangeHandler = (value: string) => {
        setPosition(value);
        stateSetters.setPosition(value);
        console.log(value);
      };
    
      const salaryStepChangeHandler = (value: string) => {
        setSalaryStep(value);
        stateSetters.setSalaryStep(value);
        console.log(value);
      };
    
      const employmentChangeHandler = (value: string) => {
        setEmployment(value);
        stateSetters.setEmployment(value);
        console.log(value);
      };

      const occupationChangeHandler = (value: string) => {
        setOccupation(value);
        stateSetters.setOccupation(value);
        console.log(value);
      };

      const hireDateChangeHandler = (value: string) => {
        setHireDate(value);
        stateSetters.setHireDate(value);
        console.log(value);
      };


  const onSaveHandler = () => {
 
      const empNameref = empNameRef.current?.value;
      const birthDateref = birthDateRef.current?.value;
      const residentId = residentIdRef.current?.value;
      const mobileNumberref = mobileNumberRef.current?.value;
      const addressref = addressRef.current?.value;
      const detailAddressref = detailAddressRef.current?.value;
      const postNumberref = postNumberRef.current?.value;
      const emailref = emailRef.current?.value;
      
      console.log("hireDate", hireDate);

      if (empNameref?.trim().length === 0 || empNameref === null) {
        alert('사원명을 입력해 주세요.');
        return;
      } else if (residentId?.trim().length === 0 || residentIdRef === null) {
        alert('주민등록번호를 입력해주세요.');
        return;
      } else if (mobileNumberref?.trim().length === 0 || mobileNumberref === null) {
        alert('전화번호를 입력해주세요.');
        return;
      } else if (hireDate === '') {
        alert('입사일을 입력해주세요.');
        return;
      } else if (Number(dept) === -1) {
        alert('부서를 선택해 주세요.');
        return;
      } else if (Number(gender) === -1) {
        alert('성별을 선택해 주세요.');
        return;
      } else if (Number(lastSchool) === -1) {
        alert('최종학력을 선택해 주세요.');
        return;
      } else if (Number(position) === -1) {
        alert('직급을 선택해 주세요.');
        return;
      } else if (emailref?.trim().length === 0 || !emailref?.includes('@') || emailref === null) {
        alert('올바른 이메일을 입력해 주세요.');
        return;
      } else if (Number(salaryStep) === -1) {
        alert('호봉을 선택해 주세요.');
        return;
      } else if (Number(employment) === -1) {
        alert('고용형태를 선택해 주세요.');
        return;
      } else if (Number(occupation) === -1) {
        alert('직무를 선택해 주세요.');
        return;
      } 

      // 여기서 select에서 선택된 값에 따라 state에 값을 할당
      // ---> 여기서 할당된 값을 아래에서 호출하는 함수에 넘겨준다.
    
      console.log(empNameref, birthDateRef, hireDateRef, mobileNumberref, addressref, detailAddressref, postNumberref, emailref);
      console.log(dept, gender, lastSchool, position, salaryStep, employment);

      stateSetters.setEmail(emailRef.current?.value);
      stateSetters.setEmpName(empNameRef.current?.value);
      stateSetters.setBirthDate(birthDateRef.current?.value);
      stateSetters.setMobileNumber(mobileNumberRef.current?.value);
      stateSetters.setDetailAddress(detailAddressRef.current?.value);
      stateSetters.setPostNumber(postNumberRef.current?.value);
      stateSetters.setAddress(addressRef.current?.value);
      stateSetters.setResidentId(residentIdRef.current?.value);
      
  };

    return (
        <Grid item sm={6} md={5}>
                    <SubCard title="사원정보">
                      <Grid container spacing={gridSpacing}>
                        <Grid item md={6} xs={12}>
                          <InputLabel>사원명</InputLabel>
                          <TextField id="outlined-basic1" inputRef={empNameRef} fullWidth style={{width: '200px'}} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel>부서</InputLabel>
                          <FormControl fullWidth style={{width: '200px'}}>
                            <Select
                              defaultValue="-1"
                              onChange={(e) => {
                                deptChangeHandler(e.target.value);
                              }}
                            >
                              {deptLists}
                            </Select>
                          </FormControl>
                        </Grid>
                       
                        <Grid item md={6} xs={12}>
                          <InputLabel>생일</InputLabel>
                          <TextField id="outlined-basic14"  fullWidth type="date" style={{width: '200px'}} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>주민등록번호</InputLabel>
                          <TextField id="outlined-basic5" inputRef={residentIdRef} fullWidth placeholder="xxxxxx-xxxxxx" style={{width: '200px'}} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel>성별</InputLabel>
                          <FormControl fullWidth style={{width: '200px'}}>
                            <Select defaultValue="-1" onChange={(e) => genderChangeHandler(e.target.value)}>
                              <MenuItem value={'남자'}>남</MenuItem>
                              <MenuItem value={'여자'}>여</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>휴대폰 번호</InputLabel>
                          <TextField id="outlined-basic5" inputRef={mobileNumberRef} fullWidth placeholder="010-1234-1234" style={{width: '200px'}} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>주소</InputLabel>
                          <TextField id="outlined-basic6" inputRef={addressRef} fullWidth style={{width: '200px'}} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>세부주소</InputLabel>
                          <TextField id="outlined-basic7" inputRef={detailAddressRef} fullWidth style={{width: '200px'}} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>우편번호</InputLabel>
                          <TextField id="outlined-basic8" inputRef={postNumberRef} fullWidth style={{width: '200px'}} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>이메일</InputLabel>
                          <TextField id="outlined-basic9" inputRef={emailRef} fullWidth placeholder="aaa@aaa.com" type="email" style={{width: '200px'}} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel>최종학력</InputLabel>
                          <FormControl fullWidth style={{width: '200px'}}>
                            <Select defaultValue="-1" onChange={(e) => lastSchoolChangeHandler(e.target.value)}>
                              <MenuItem value={'대학 미졸업'}>대학 미졸업</MenuItem>
                              <MenuItem value={'전문대'}>전문대</MenuItem>
                              <MenuItem value={'학사'}>학사</MenuItem>
                              <MenuItem value={'석사'}>석사</MenuItem>
                              <MenuItem value={'박사'}>박사</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <InputLabel>직급</InputLabel>
                          <FormControl fullWidth style={{width: '200px'}}>
                            <Select defaultValue="-1" onChange={(e) => positionChangeHandler(e.target.value)}>
                             {positionLists}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>입사일</InputLabel>
                          <TextField id="outlined-basic14" inputRef={hireDateRef} onChange={(e) => hireDateChangeHandler(e.target.value)} fullWidth type="date" style={{width: '200px'}} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel>호봉</InputLabel>
                          <FormControl fullWidth style={{width: '200px'}}>
                            <Select defaultValue="-1" onChange={(e) => salaryStepChangeHandler(e.target.value)}>
                              {hobongMenuItems}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel>고용형태</InputLabel>
                          <FormControl fullWidth style={{width: '200px'}}>
                            <Select defaultValue="-1" onChange={(e) => employmentChangeHandler(e.target.value)}>
                              <MenuItem value='정규직'>정규직</MenuItem>
                              <MenuItem value='계약직'>계약직</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel>직무</InputLabel>
                          <FormControl fullWidth style={{width: '200px'}}>
                            <Select defaultValue="-1" onChange={(e) => occupationChangeHandler(e.target.value)}>
                              <MenuItem value='사무직'>사무직</MenuItem>
                              <MenuItem value='생산직'>생산직</MenuItem>
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
    )
}

export default EmpRegister;