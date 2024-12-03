import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class EmployeeController implements EmployeeRepository<Employee> {

    List<Employee> allEmployee = new ArrayList<>();

    @Override
    public List<Employee> findAll() {

        if (allEmployee.size() == 0) {

            Employee kamalEmployee = new Employee(1, "Kamal Perera", "Kamal", 28, "970691925V",
                    BigDecimal.valueOf(Double.valueOf("580000.00")), LocalDate.of(1997, 6, 20));
            Employee sampathEmployee = new Employee(2, "Sampath Dileepa", "Sampath", 27, "960691925V",
                    BigDecimal.valueOf(Double.valueOf("650000.00")), LocalDate.of(1996, 5, 20));
            Employee naveenEmployee = new Employee(3, "Naveen Upeksha", "Naveen", 25, "990691925V",
                    BigDecimal.valueOf(Double.valueOf("550000.00")), LocalDate.of(1999, 5, 20));

            allEmployee.add(kamalEmployee);
            allEmployee.add(sampathEmployee);
            allEmployee.add(naveenEmployee);

        } 

        return allEmployee;
    }

    @Override
    public String saveEmployee(Employee employee) {
        try {
            employee.setId(allEmployee.size() + 1);
            allEmployee.add(employee);
            // save operator
            System.out.println("save");
            return "OK";
        } catch (Exception e) {
            return "Save Not Completed : " + e.getMessage();
        }
    }

    @Override
    public String updateEmployee(Employee employee) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateEmployee'");
    }

    @Override
    public String deleteEmployee(Employee employee) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteEmployee'");
    }

}
