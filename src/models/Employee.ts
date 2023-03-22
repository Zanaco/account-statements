export interface EmployeeI {
    department: string
    employeeNumber: string
    fullName: string
    nrc: string
    dateJoined?: Date
    dob?: Date
    grade: string
    position: string
    employeeEmailAddress: string
    sex: string
    managerEmployeeNumber: string
    managerFullName: string
    managerEmailAddress: string
    get searchable(): string
  }
  
  export class Employee implements EmployeeI {
    department: string
    employeeNumber: string
    fullName: string
    nrc: string
    dateJoined?: Date
    dob?: Date
    grade: string
    position: string
    employeeEmailAddress: string
    sex: string
    managerEmployeeNumber: string
    managerFullName: string
    managerEmailAddress: string
  
    constructor({
      department,
      employeeNumber,
      fullName,
      nrc,
      dateJoined,
      dob,
      grade,
      position,
      employeeEmailAddress,
      sex,
      managerEmployeeNumber,
      managerFullName,
      managerEmailAddress,
    }: EmployeeI) {
      this.department = department
      this.employeeNumber = employeeNumber
      this.fullName = fullName
      this.nrc = nrc
      this.dateJoined = dateJoined
      this.dob = dob
      this.grade = grade
      this.position = position
      this.employeeEmailAddress = employeeEmailAddress
      this.sex = sex
      this.managerEmployeeNumber = managerEmployeeNumber
      this.managerFullName = managerFullName
      this.managerEmailAddress = managerEmailAddress
    }
  
    get searchable() {
      return `${this.employeeNumber}
    |${this.employeeEmailAddress}
    |${this.fullName}
    |${this.position}
    |${this.managerEmailAddress} 
    |${this.managerEmployeeNumber}
    |${this.managerFullName} 
    |${this.grade}`
    }
  }
  