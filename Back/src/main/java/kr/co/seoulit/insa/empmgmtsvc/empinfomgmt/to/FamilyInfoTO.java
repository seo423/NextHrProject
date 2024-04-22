package kr.co.seoulit.insa.empmgmtsvc.empinfomgmt.to;

import kr.co.seoulit.insa.commsvc.systemmgmt.to.BaseTO;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public class FamilyInfoTO extends BaseTO{
	
<<<<<<< HEAD
	private String empCode,familyCode,familyName,relation,familybirthdate,liveTogether;

	public String getEmpCode() {
		return empCode;
	}

	public void setEmpCode(String empCode) {
		this.empCode = empCode;
	}

	public String getFamilyCode() {
		return familyCode;
	}

	public void setFamilyCode(String familyCode) {
		this.familyCode = familyCode;
	}

	public String getFamilyName() {
		return familyName;
	}

	public void setFamilyName(String familyName) {
		this.familyName = familyName;
	}

	public String getRelation() {
		return relation;
	}

	public void setRelation(String relation) {
		this.relation = relation;
	}

	public String getBirthdate() {
		return familybirthdate;
	}

	public void setBirthdate(String birthdate) {
		this.familybirthdate = familybirthdate;
	}

	public String getLiveTogether() {
		return liveTogether;
	}

	public void setLiveTogether(String liveTogether) {
		this.liveTogether = liveTogether;
	}
=======
	private String empCode,familyCode,familyName,relation,famailyBirthDate,liveTogether;
>>>>>>> da321188eb75d1ec6b8fe452dcd8f4085659efd3

}
