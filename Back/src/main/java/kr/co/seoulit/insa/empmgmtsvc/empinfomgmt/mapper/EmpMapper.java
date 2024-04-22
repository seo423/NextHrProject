package kr.co.seoulit.insa.empmgmtsvc.empinfomgmt.mapper;

import java.util.ArrayList;
import java.util.HashMap;

<<<<<<< HEAD
=======
import kr.co.seoulit.insa.empmgmtsvc.empinfomgmt.to.EmpCodeSearchTO;
import kr.co.seoulit.insa.empmgmtsvc.empinfomgmt.to.FamilyInfoTO;
>>>>>>> da321188eb75d1ec6b8fe452dcd8f4085659efd3
import org.apache.ibatis.annotations.Mapper;
import kr.co.seoulit.insa.empmgmtsvc.empinfomgmt.to.EmpTO;

@Mapper
public interface EmpMapper {


	public EmpTO selectEmp(String empName);
	public String selectLastEmpCode();
	public ArrayList<EmpTO> selectEmpList();

	public ArrayList<EmpTO> selectEmpListN(String deptCode);

	public String getEmpCode(String name);
	public EmpTO selectEmployee(String empCode);
	public void registEmployee(EmpTO emp);
	public void registEmpWorkInfo(HashMap<String, Object> map);

	public void updateEmployee(EmpTO emp);
	public void deleteEmployee(String empCode);
	public String selectEmpCode(String empName, String deptCode);

<<<<<<< HEAD
	EmpTO empDetailcard(String empCode);
=======
	public void insertEmpPic(HashMap<String, Object> map);
>>>>>>> da321188eb75d1ec6b8fe452dcd8f4085659efd3
}
