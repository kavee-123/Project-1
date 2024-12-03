import java.util.List;

public interface EmployeeRepository<E> {
    

    //define function for get all Employee data (List)
    public List<E> findAll();

    //define function for save Employee
    public String saveEmployee(E e);

    //define function for update Employee
    public String updateEmployee(E e);

    //define function for delete Employee
    public String deleteEmployee(E e);
}
