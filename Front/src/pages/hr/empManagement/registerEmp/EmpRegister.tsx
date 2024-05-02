import { Grid, InputLabel, TextField, FormControl, Select, MenuItem, Button, Stack, SelectChangeEvent } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import React, { useState, useRef, useEffect, ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dailyAttendAction } from 'store/redux-saga/reducer/attendance/DailyAttendReducer';
import { positionAction } from 'store/redux-saga/reducer/base/positionReducer';
import { RootState } from 'store/reducer';
import {empRegisterTO} from '../../base/types/types'

interface Props {
  empRegisterSetter: Dispatch<SetStateAction<empRegisterTO>>;
}

const EmpRegister: React.FC<Props> = ({ empRegisterSetter }) => {
    const dispatch = useDispatch();
    
    const [empRegisterBean, setEmpRegisterBean] = useState<empRegisterTO>({
      empName: '',
      birthDate: '',
      mobileNumber: '',
      address: '',
      detailAddress: '',
      employment: '',
      email: '',
      residentId: '',
      deptCode: '',
      gender: '',
      lastSchool: '',
      position: '',
      occupation: '',
      hireDate: '',
      hobong: '',
      postNumber: '',
      deptName:''
    });
    
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
    ));
    
    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      // input 필드에 대한 작업을 수행합니다.
      const insertedEmpRegisterBean = {
        ...empRegisterBean,
        [e.target.name]: e.target.value
      }
      setEmpRegisterBean(insertedEmpRegisterBean);
      empRegisterSetter(insertedEmpRegisterBean);
    };
    
    const handleSelectChange: (event: SelectChangeEvent<string>) => void = (e) => {
      // select 필드에 대한 작업을 수행합니다.
      const insertedEmpRegisterBean = {
        ...empRegisterBean,
        [e.target.name]: e.target.value
      }
      setEmpRegisterBean(insertedEmpRegisterBean);
      empRegisterSetter(insertedEmpRegisterBean);
    };

  const hobongMenuItems = hobongs.map((hobong) => (
    <MenuItem key={hobong} value={hobong}>
      {hobong}
    </MenuItem>
  ));

  const onSaveHandler = () => {

      if (empRegisterBean.empName === '') {
        alert('사원명을 입력해 주세요.');
        return;
      } else if (empRegisterBean.residentId === '') {
        alert('주민등록번호를 입력해주세요.');
        return;
      } else if (empRegisterBean.mobileNumber === '') {
        alert('전화번호를 입력해주세요.');
        return;
      } else if (empRegisterBean.hireDate === '') {
        alert('입사일을 입력해주세요.');
        return;
      } else if (empRegisterBean.deptCode === '') {
        alert('부서를 선택해 주세요.');
        return;
      } else if (empRegisterBean.gender === '') {
        alert('성별을 선택해 주세요.');
        return;
      } else if (empRegisterBean.lastSchool === '') {
        alert('최종학력을 선택해 주세요.');
        return;
      } else if (empRegisterBean.position === '') {
        alert('직급을 선택해 주세요.');
        return;
      } else if (empRegisterBean.email === '') {
        alert('올바른 이메일을 입력해 주세요.');
        return;
      } else if (empRegisterBean.hobong === '') {
        alert('호봉을 선택해 주세요.');
        return;
      } else if (empRegisterBean.employment === '') {
        alert('고용형태를 선택해 주세요.');
        return;
      } else if (empRegisterBean.occupation === '') {
        alert('직무를 선택해 주세요.');
        return;
      } 
      
  };


    return (
        <Grid item sm={6} md={5}>
                    <SubCard title="사원정보">
                      <Grid container spacing={gridSpacing}>
                        <Grid item md={6} xs={12}>
                          <InputLabel>사원명</InputLabel>
                          <TextField id="outlined-basic1" name="empName" onChange = {handleInputChange} fullWidth style={{width: '200px'}} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel>부서</InputLabel>
                          <FormControl fullWidth style={{width: '200px'}} >
                            <Select
                              name="deptCode"
                              defaultValue="-1"
                              onChange={handleSelectChange}
                            >
                              {deptLists}
                            </Select>
                          </FormControl>
                        </Grid>
                       
                        <Grid item md={6} xs={12}>
                          <InputLabel>생일</InputLabel>
                          <TextField id="outlined-basic14" name="birthDate" fullWidth type="date" onChange = {handleInputChange} style={{width: '200px'}} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>주민등록번호</InputLabel>
                          <TextField id="outlined-basic5" name="residentId" fullWidth placeholder="xxxxxx-xxxxxx" onChange = {handleInputChange} style={{width: '200px'}} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel>성별</InputLabel>
                          <FormControl fullWidth style={{width: '200px'}}>
                            <Select name="gender" defaultValue="-1" onChange={handleSelectChange}>
                              <MenuItem value={'남자'}>남</MenuItem>
                              <MenuItem value={'여자'}>여</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>휴대폰 번호</InputLabel>
                          <TextField id="outlined-basic5" name="mobileNumber" fullWidth placeholder="010-1234-1234" onChange = {handleInputChange} style={{width: '200px'}} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>주소</InputLabel>
                          <TextField id="outlined-basic6" name="address" onChange = {handleInputChange} fullWidth style={{width: '200px'}} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>세부주소</InputLabel>
                          <TextField id="outlined-basic7" name="detailAddress" onChange = {handleInputChange} fullWidth style={{width: '200px'}} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>우편번호</InputLabel>
                          <TextField id="outlined-basic8" name="postNumber" onChange = {handleInputChange} fullWidth style={{width: '200px'}} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>이메일</InputLabel>
                          <TextField id="outlined-basic9" name="email"  onChange = {handleInputChange} fullWidth placeholder="aaa@aaa.com" type="email" style={{width: '200px'}} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel>최종학력</InputLabel>
                          <FormControl fullWidth style={{width: '200px'}}>
                            <Select defaultValue="-1" name="lastSchool" onChange={handleSelectChange}>
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
                            <Select name="position" defaultValue="-1" onChange={handleSelectChange}>
                             {positionLists}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <InputLabel>입사일</InputLabel>
                          <TextField id="outlined-basic14" name="hireDate" onChange={handleInputChange} fullWidth type="date" style={{width: '200px'}} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel>호봉</InputLabel>
                          <FormControl fullWidth style={{width: '200px'}}>
                            <Select name="hobong" defaultValue="-1" onChange={handleSelectChange}>
                              {hobongMenuItems}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel>고용형태</InputLabel>
                          <FormControl fullWidth style={{width: '200px'}}>
                            <Select name="employment" defaultValue="-1"onChange={handleSelectChange}>
                              <MenuItem value='정규직'>정규직</MenuItem>
                              <MenuItem value='계약직'>계약직</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <InputLabel>직무</InputLabel>
                          <FormControl fullWidth style={{width: '200px'}}>
                            <Select name="occupation" defaultValue="-1" onChange={handleSelectChange}>
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

    console.log('hireDate', hireDate);

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
            <TextField id="outlined-basic1" inputRef={empNameRef} fullWidth style={{ width: '200px' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>부서</InputLabel>
            <FormControl fullWidth style={{ width: '200px' }}>
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
            <TextField id="outlined-basic14" fullWidth type="date" style={{ width: '200px' }} />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel>주민등록번호</InputLabel>
            <TextField id="outlined-basic5" inputRef={residentIdRef} fullWidth placeholder="xxxxxx-xxxxxx" style={{ width: '200px' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>성별</InputLabel>
            <FormControl fullWidth style={{ width: '200px' }}>
              <Select defaultValue="-1" onChange={(e) => genderChangeHandler(e.target.value)}>
                <MenuItem value={'남자'}>남</MenuItem>
                <MenuItem value={'여자'}>여</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel>휴대폰 번호</InputLabel>
            <TextField id="outlined-basic5" inputRef={mobileNumberRef} fullWidth placeholder="010-1234-1234" style={{ width: '200px' }} />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel>주소</InputLabel>
            <TextField id="outlined-basic6" inputRef={addressRef} fullWidth style={{ width: '200px' }} />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel>세부주소</InputLabel>
            <TextField id="outlined-basic7" inputRef={detailAddressRef} fullWidth style={{ width: '200px' }} />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel>우편번호</InputLabel>
            <TextField id="outlined-basic8" inputRef={postNumberRef} fullWidth style={{ width: '200px' }} />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel>이메일</InputLabel>
            <TextField
              id="outlined-basic9"
              inputRef={emailRef}
              fullWidth
              placeholder="aaa@aaa.com"
              type="email"
              style={{ width: '200px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>최종학력</InputLabel>
            <FormControl fullWidth style={{ width: '200px' }}>
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
            <FormControl fullWidth style={{ width: '200px' }}>
              <Select defaultValue="-1" onChange={(e) => positionChangeHandler(e.target.value)}>
                {positionLists}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <InputLabel>입사일</InputLabel>
            <TextField
              id="outlined-basic14"
              inputRef={hireDateRef}
              onChange={(e) => hireDateChangeHandler(e.target.value)}
              fullWidth
              type="date"
              style={{ width: '200px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>호봉</InputLabel>
            <FormControl fullWidth style={{ width: '200px' }}>
              <Select defaultValue="-1" onChange={(e) => salaryStepChangeHandler(e.target.value)}>
                {hobongMenuItems}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>고용형태</InputLabel>
            <FormControl fullWidth style={{ width: '200px' }}>
              <Select defaultValue="-1" onChange={(e) => employmentChangeHandler(e.target.value)}>
                <MenuItem value="정규직">정규직</MenuItem>
                <MenuItem value="계약직">계약직</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>직무</InputLabel>
            <FormControl fullWidth style={{ width: '200px' }}>
              <Select defaultValue="-1" onChange={(e) => occupationChangeHandler(e.target.value)}>
                <MenuItem value="사무직">사무직</MenuItem>
                <MenuItem value="생산직">생산직</MenuItem>
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
};

export default EmpRegister;
