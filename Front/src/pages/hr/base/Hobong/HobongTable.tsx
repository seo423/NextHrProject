import React, { ReactElement, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { RootState } from 'store/reducer';
import { HobongTO } from '../types/types';
import { positionAction } from 'store/redux-saga/reducer/base/positionReducer';


function HobongTable() {
  const dispatch = useDispatch();

  const positionList = useSelector((state: RootState) => state.positionList.positionList);


  useEffect(() => {
    console.log('dispatch호출됨');
    dispatch(positionAction.POSITION_LIST_SEARCH_FETCH_REQUESTED(''));
  }, []);


  return (
    <Page title="호봉테이블">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <MainCard
              content={false}
              title="호봉테이블"
              >
              {/* 아래의 코드도 리펙터링을 하자 */}
              {/* table */}
              <TableContainer>
                <Table sx={{ width: 'auto'}} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{
                        borderTop: '1px solid black',
                        borderBottom: '3px solid black',
                        marginBottom: '3px',
                        backgroundColor: '#E8D9FF'
                      }}
                    >
                      <TableCell>호봉</TableCell>
                      <TableCell>기본급</TableCell>
                      <TableCell>합계</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {positionList.length !== 0 ? (
                    positionList.map((hobong: HobongTO) => (
                      <TableRow hover key={hobong.positionCode}>
                        <TableCell>{hobong.positionCode}</TableCell>
                        <TableCell>{hobong.position}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableCell colSpan={11} align="center">
                      <p>호봉 정보가 없습니다.</p>
                    </TableCell>
                  )}
                </TableBody>
                </Table>
              </TableContainer>
            </MainCard>
          </Grid>
        </Grid>
    </Page>
  );
}

HobongTable.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HobongTable;
