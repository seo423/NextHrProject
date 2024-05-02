import React, { useEffect, useState, useRef } from 'react';

import { gridSpacing } from 'store/constant';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { empCardAction } from 'pages/hr/empManagement/slices/empCardReducer';
import { ModifyEmpInfoEntity } from '../types/empManagementTypes';
import { RootState } from 'store/reducer';

// 코드가 긴 관계로 각각의 입력값에 따른 유효성 검사 로직은 작성하지 않았습니다.
//
export default function EmpModifyModal(props: { toggle: () => void; emp: ModifyEmpInfoEntity[] }) {
  // 부모페이지에서 사원을 선택하고 인사기록카드 버튼을 누르면 이 현재 페이지를 그리는데 이때 부모로 부터 받아오는 props에는
  // 부모페이지에서 선택된 사원의 정보가 리스트로서 저장되어있음. 그래서 이 밑에서 객체 비구조화를 통해 값들을 받아온다.
  // console.log('props.emp[0] : ', props.emp[0]);

  const empNameRef = useRef<HTMLInputElement>(null);
  const birthDateRef = useRef<HTMLInputElement>(null);
  const hobongRef = useRef<HTMLInputElement>(null);
  const mobileNumberRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const detailAddressRef = useRef<HTMLInputElement>(null);
  const postNumberRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const lastSchoolRef = useRef<HTMLInputElement>(null);
  //학력사항
  const highschool_nameRef = useRef<HTMLInputElement>(null);
  const majorRef = useRef<HTMLInputElement>(null);
  const college_nameRef = useRef<HTMLInputElement>(null);
  const graduate_school_nameRef = useRef<HTMLInputElement>(null);
  //가족관계
  const family_nameRef = useRef<HTMLInputElement>(null);
  const relationRef = useRef<HTMLInputElement>(null);
  const family_birthdateRef = useRef<HTMLInputElement>(null);
  const live_togetherRef = useRef<HTMLInputElement>(null);
  //경력사항
  const place_of_employmentRef = useRef<HTMLInputElement>(null);
  const employment_periodRef = useRef<HTMLInputElement>(null);
  const positionRef = useRef<HTMLInputElement>(null);
  const job_dutiesRef = useRef<HTMLInputElement>(null);
  const work_addressRef = useRef<HTMLInputElement>(null);
  //어학능력
  const test_subjectRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const scoreRef = useRef<HTMLInputElement>(null);
  const certificationsRef = useRef<HTMLInputElement>(null);
  const acquisition_dateRef = useRef<HTMLInputElement>(null);
  const expiration_dateRef = useRef<HTMLInputElement>(null);
  //work_info 테이블
  const occupationRef = useRef<HTMLInputElement>(null);
  const hiredateRef = useRef<HTMLInputElement>(null);
  const employmentTypeRef = useRef<HTMLInputElement>(null);

  //사원의 상세 정보 속성들
  const [certificationsName, setCertificationsName] = useState<string | undefined | null>('');
  const [acquisitionDate, setAcquisitionDate] = useState<string | undefined | null>('');
  const [expirationDate, setExpirationDate] = useState<string | undefined | null>('');
  const [testSubject, setTestSubject] = useState<string | undefined | null>('');
  const [subject, setSubject] = useState<string | undefined | null>('');
  const [score, setScore] = useState<string | undefined | null>('');
  const [highSchoolName, setHighSchoolName] = useState<string | undefined | null>('');
  const [collegeName, setCollegeName] = useState<string | undefined | null>('');
  const [graduateSchoolName, setGraduateSchoolName] = useState<string | undefined | null>('');
  const [major, setMajor] = useState<string | undefined | null>('');
  const [familyName, setFamilyName] = useState<string | undefined | null>('');
  const [relation, setRelation] = useState<string | undefined | null>('');
  const [familyBirthdate, setFamilyBirthdate] = useState<string | undefined | null>('');
  const [liveTogether, setLiveTogether] = useState<string | undefined | null>('');
  const [placeOfEmployment, setPlaceOfEmployment] = useState<string | undefined | null>('');
  const [employmentPeriod, setEmploymentPeriod] = useState<string | undefined | null>('');
  const [employmentPosition, setEmploymentPosition] = useState<string | undefined | null>('');
  const [jobDuties, setJobDuties] = useState<string | undefined | null>('');
  const [workAddress, setWorkAddress] = useState<string | undefined | null>('');
  const [occupation, setOccupation] = useState<string | undefined | null>('');
  const [hiredate, setHiredate] = useState<string | undefined | null>('');
  const [employmentType, setEmploymentType] = useState<string | undefined | null>('');

  const dispatch = useDispatch();
  const theme = useTheme();
  // 모달은 항상 열려있음
  // ---> 부모 컴포넌트의 state를 통해서 보여주거나, 보여주지 않게 할수 있음
  const [open, setOpen] = React.useState(true);

  const empCard = useSelector((state: RootState) => (state.empcardReducer.empCard !== undefined ? state.empcardReducer.empCard : []));

  const { empCode, empName, birthdate, gender, mobileNumber, address, detailAddress, postNumber, email, lastSchool } = props.emp[0];

  // 이거는 화면을 처음 그릴 때 즉, 마운트 할 때 dispatch를 해서 사원에 대한 정보를 인사기록카드에 기재해주기 위함이다.
  //그니까 사용자가 사원을 선택하고 인사기록카드버튼을 누르면 이 화면이 뜨는데 화면에 바로 그 사원에 대한 상세 정보가 인사기록카드에 보이게 됨.
  useEffect(() => {
    console.log('dispatch호출됨');
    dispatch(empCardAction.EMP_CARD_REQUESTED(empCode));
  }, []);

  // const {
  //   // imgExtend,
  //   certificationsName,
  //   acquisitionDate,
  //   expirationDate,
  //   testSubject,
  //   subject,
  //   score,
  //   highSchoolName,
  //   collegeName,
  //   graduateSchoolName,
  //   major,
  //   familyName,
  //   relation,
  //   familyBirthdate,
  //   liveTogether,
  //   placeOfEmployment,
  //   employmentPeriod,
  //   employmentPosition,
  //   jobDuties,
  //   workAddress,
  //   occupation,
  //   hiredate,
  //   employmentType
  // } = empCard

  useEffect(() => {
    console.log('empCard 상태 바뀜', empCard);
    console.log('empCard 상태 바뀜', empCard.certificationsName);
    // console.log('empCard 상태 바뀜', empCard[0]?.certificationsName);
    // console.log('empCard 상태 바뀜22', empCard);
    setCertificationsName(empCard.certificationsName);
    setAcquisitionDate(empCard.acquisitionDate);
    setExpirationDate(empCard.expirationDate);
    setTestSubject(empCard.testSubject);
    setSubject(empCard.subject);
    setScore(empCard.score);
    setHighSchoolName(empCard.highSchoolName);
    setCollegeName(empCard.collegeName);
    setGraduateSchoolName(empCard.graduateSchoolName);
    setMajor(empCard.major);
    setFamilyName(empCard.familyName);
    setRelation(empCard.relation);
    setFamilyBirthdate(empCard.familyBirthdate);
    setLiveTogether(empCard.liveTogether);
    setPlaceOfEmployment(empCard.placeOfEmployment);
    setEmploymentPeriod(empCard.employmentPeriod);
    setEmploymentPosition(empCard.employmentPosition);
    setJobDuties(empCard.jobDuties);
    setWorkAddress(empCard.workAddress);
    setOccupation(empCard.occupation);
    setHiredate(empCard.hiredate);
    setEmploymentType(empCard.employmentType);
  }, [empCard]);

  useEffect(() => {
    if (props.emp.length < 2) {
      console.log('this is valid value', empCard);
      // console.log(props.emp[0]);
    } else {
      console.log('this is not valid value');
    }
  }, [props]);

  const handleSave = () => {
    console.log('handleSave : ', handleSave);

    const empNameref = empNameRef.current?.value;
    const birthDateref = birthDateRef.current?.value;
    const hobongref = hobongRef.current?.value;
    const mobileNumberref = mobileNumberRef.current?.value;
    const addressref = addressRef.current?.value;
    const detailAddressref = detailAddressRef.current?.value;
    const postNumberref = postNumberRef.current?.value;
    const emailref = emailRef.current?.value;
    const lastSchoolref = lastSchoolRef.current?.value;
    //학력사항
    const highschool_nameref = highschool_nameRef.current?.value;
    const majorref = majorRef.current?.value;
    const college_nameref = college_nameRef.current?.value;
    const graduate_school_nameref = graduate_school_nameRef.current?.value;
    //가족관계
    const family_nameref = family_nameRef.current?.value;
    const relationref = relationRef.current?.value;
    const family_birthdateref = family_birthdateRef.current?.value;
    const live_togetherref = live_togetherRef.current?.value;
    //경력사항
    const place_of_employmentref = place_of_employmentRef.current?.value;
    const employment_periodref = employment_periodRef.current?.value;
    const positionref = positionRef.current?.value;
    const job_dutiesref = job_dutiesRef.current?.value;
    const work_addressref = work_addressRef.current?.value;
    //어학능력
    const test_subjectref = test_subjectRef.current?.value;
    const subjectref = subjectRef.current?.value;
    const scoreref = scoreRef.current?.value;
    const certificationsref = certificationsRef.current?.value;
    const acquisition_dateref = acquisition_dateRef.current?.value;
    const expiration_dateref = expiration_dateRef.current?.value;
    //work_info테이블
    const occupationref = occupationRef.current?.value;
    const hiredateref = hiredateRef.current?.value;
    const employmentTyperef = employmentTypeRef.current?.value;

    //empCode, gender는 넘어온 값을 그대로 사용한다.
    const data = {
      empCode: empCode,
      empName: empNameref,
      hobong: hobongref,
      birthdate: birthDateref,
      gender: gender,
      mobileNumber: mobileNumberref,
      address: addressref,
      detailAddress: detailAddressref,
      postNumber: postNumberref,
      email: emailref,
      lastSchool: lastSchoolref,
      //학령사항
      highschool_name: highschool_nameref,
      major: majorref,
      college_name: college_nameref,
      graduate_school_name: graduate_school_nameref,
      //가족관계
      family_name: family_nameref,
      relation: relationref,
      family_birthdate: family_birthdateref,
      live_together: live_togetherref,
      //경력사항
      place_of_employment: place_of_employmentref,
      employment_period: employment_periodref,
      position: positionref,
      job_duties: job_dutiesref,
      work_address: work_addressref,
      //어학능력
      test_subject: test_subjectref,
      subject: subjectref,
      score: scoreref,
      certifications: certificationsref,
      acquisition_date: acquisition_dateref,
      expiration_date: expiration_dateref,
      //work_info 테이블
      occupation: occupationref,
      hiredate: hiredateref,
      employmentType: employmentTyperef,
      status: 'update'
    };
    console.log('data is :', data);
    // 여기서 reducer로 dispatch
    // 여기에서의 dispatch는 수정을 했을 때 불러야 하는 것이다.
    // 즉, EMP_CARD_ MODIFY_REQUESTED 를 불러야 함 아래는 잘못됨
    // dispatch(empCardAction.EMP_CARD_REQUESTED(data));

    //dispatch를 하고나서 모달이 보이지 않게한다
    props.toggle();
  };

  const handleClose = () => {
    props.toggle();
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={'lg'}
        sx={{ border: '5px solid black', marginBottom: '20px', margin: 'auto' }}
        scroll={'paper'}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {open && (
          <>
            <Box>
              <DialogTitle id="form-dialog-title">인사기록카드</DialogTitle>
              <DialogContent>
                <Grid container spacing="auto" item xs>
                  <Grid container spacing={gridSpacing}>
                    <Grid item md={6} xs={12}>
                      <InputLabel>사원명</InputLabel>
                      <TextField value={empName} id="outlined-basic1" inputRef={empNameRef} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>호봉</InputLabel>
                      <TextField id="outlined-basic5" inputRef={hobongRef} fullWidth value="" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>취직날짜</InputLabel>
                      <TextField id="outlined-basic5" inputRef={hiredateRef} fullWidth value={hiredate} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>직종</InputLabel>
                      <TextField id="outlined-basic5" inputRef={occupationRef} fullWidth value={occupation} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>취업타입</InputLabel>
                      <TextField id="outlined-basic5" inputRef={employmentTypeRef} fullWidth value={employmentType} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>생일</InputLabel>
                      <TextField id="outlined-basic14" inputRef={birthDateRef} fullWidth value={birthdate} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InputLabel>성별</InputLabel>
                      <TextField value={gender} aria-readonly={true} id="outlined-basic1" fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>휴대폰 번호</InputLabel>
                      <TextField id="outlined-basic5" inputRef={mobileNumberRef} fullWidth value={mobileNumber} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>주소</InputLabel>
                      <TextField id="outlined-basic6" inputRef={addressRef} value={address} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>세부주소</InputLabel>
                      <TextField id="outlined-basic7" inputRef={detailAddressRef} value={detailAddress} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>우편번호</InputLabel>
                      <TextField id="outlined-basic8" inputRef={postNumberRef} value={postNumber} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>이메일</InputLabel>
                      <TextField id="outlined-basic9" inputRef={emailRef} fullWidth value={email} type="email" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>최종학력</InputLabel>
                      <TextField id="outlined-basic8" inputRef={lastSchoolRef} value={lastSchool} fullWidth />
                    </Grid>
                    {/* 학력사항 */}

                    <Grid item md={6} xs={12}>
                      <InputLabel>고등학교이름</InputLabel>
                      <TextField id="outlined-basic10" inputRef={highschool_nameRef} value={highSchoolName} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>대학교이름</InputLabel>
                      <TextField id="outlined-basic11" inputRef={college_nameRef} value={collegeName} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>전공</InputLabel>
                      <TextField id="outlined-basic12" inputRef={majorRef} value={major} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>대학원이름</InputLabel>
                      <TextField id="outlined-basic13" inputRef={graduate_school_nameRef} value={graduateSchoolName} fullWidth />
                    </Grid>
                    {/* 가족관계 */}
                    <Grid item md={6} xs={12}>
                      <InputLabel>가족이름</InputLabel>
                      <TextField id="outlined-basic14" inputRef={family_nameRef} value={familyName} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>관계</InputLabel>
                      <TextField id="outlined-basic15" inputRef={relationRef} value={relation} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>가족생일</InputLabel>
                      <TextField id="outlined-basic16" inputRef={family_birthdateRef} value={familyBirthdate} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>동거여부</InputLabel>
                      <TextField id="outlined-basic17" inputRef={live_togetherRef} value={liveTogether} fullWidth />
                    </Grid>
                    {/* 경력사항 */}
                    <Grid item md={6} xs={12}>
                      <InputLabel>근무처</InputLabel>
                      <TextField id="outlined-basic18" inputRef={place_of_employmentRef} value={placeOfEmployment} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>근무경력</InputLabel>
                      <TextField id="outlined-basic19" inputRef={employment_periodRef} value={employmentPeriod} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>직위</InputLabel>
                      <TextField id="outlined-basic20" inputRef={positionRef} value={employmentPosition} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>직무</InputLabel>
                      <TextField id="outlined-basic21" inputRef={job_dutiesRef} value={jobDuties} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>직장주소</InputLabel>
                      <TextField id="outlined-basic22" inputRef={work_addressRef} value={workAddress} fullWidth />
                    </Grid>
                    {/* 어학능력 */}
                    <Grid item md={6} xs={12}>
                      <InputLabel>시험과목</InputLabel>
                      <TextField id="outlined-basic23" inputRef={test_subjectRef} value={testSubject} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>외국어명</InputLabel>
                      <TextField id="outlined-basic24" inputRef={subjectRef} value={subject} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>점수</InputLabel>
                      <TextField id="outlined-basic25" inputRef={scoreRef} value={score} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>자격증</InputLabel>
                      <TextField id="outlined-basic26" inputRef={certificationsRef} value={certificationsName} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>취득일</InputLabel>
                      <TextField id="outlined-basic27" inputRef={acquisition_dateRef} value={acquisitionDate} fullWidth />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <InputLabel>만료일</InputLabel>
                      <TextField id="outlined-basic28" inputRef={expiration_dateRef} value={expirationDate} fullWidth />
                    </Grid>
                  </Grid>
                </Grid>
                {/* </Grid> */}
              </DialogContent>
              <DialogActions sx={{ pr: 2.5, transform: 'translateX(-80px)' }}>
                <Button sx={{ color: theme.palette.error.dark }} onClick={handleClose} color="secondary">
                  취소
                </Button>
                <Button variant="contained" size="small" onClick={handleSave}>
                  수정
                </Button>
              </DialogActions>
            </Box>
          </>
        )}
      </Dialog>
    </div>
  );
}
