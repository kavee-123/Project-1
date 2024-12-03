import java.math.BigDecimal;
import java.time.LocalDate;

public class Employee {
    
    private Integer id; //PK
    private String full_name;
    private String callingname;
    private Integer age;
    private String nic;
    private BigDecimal salary;
    private LocalDate dob;

    //define constructor function
    //default / Empty / noargument / no-parameters Constructor
    public Employee(){}
 
    //
    public Employee(Integer id,String full_name){

        this.id = id;
        this.full_name = full_name;
    }

    //All argument Constructor
    public Employee(Integer id,String full_name,String callingname,Integer age,String nic,BigDecimal salary,LocalDate dob){
        this.id = id;
        this.full_name = full_name;
        this.callingname = callingname;
        this.age = age;
        this.nic = nic;
        this.salary = salary;
        this.dob = dob;
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getFull_name() {
        return full_name;
    }
    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }
    public String getCallingname() {
        return callingname;
    }
    public void setCallingname(String callingname) {
        this.callingname = callingname;
    }
    public Integer getAge() {
        return age;
    }
    public void setAge(Integer age) {
        this.age = age;
    }
    public String getNic() {
        return nic;
    }
    public void setNic(String nic) {
        this.nic = nic;
    }
    public BigDecimal getSalary() {
        return salary;
    }
    public void setSalary(BigDecimal salary) {
        this.salary = salary;
    }
    public LocalDate getDob() {
        return dob;
    }
    public void setDob(LocalDate dob) {
        this.dob = dob;
    }


}
