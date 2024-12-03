import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Scanner;

// test

public class Application {


    EmployeeController employeeController = new EmployeeController();

    public Application(){
        LoadWellcomePage();
    }
    public static void main(String[] args) {

        //1
        new Application();

        //2
        //Application newApplication = new Application();
        //3
        //newApplication.LoadWellcomePage();
    }

    public void LoadWellcomePage(){
        System.out.println("*****************************************");
        System.out.println("********************   Wellcome   *********************");
        System.out.println("*****************************************");

        System.out.println("[1] - Add New Employee");
        System.out.println("[2] - View All Employee");
        System.out.println("[3] - Update Employee");
        System.out.println("[4] - Delete Employee");
        System.out.println("Select One Option and Enter Selected Option Number then press Enter..");
        Scanner newScanner = new Scanner(System.in);
        String selectOption = newScanner.nextLine();
        


        System.out.println("*****************************************");
        System.out.println("********************   End   *********************");
        System.out.println("*****************************************");

        switch (selectOption) {
            case "1":
                addNewEmployee();
                break;

                case "2":
                viewEmployee();
                break;

                case "3":
                updateEmployee();
                break;

                case "4":
                deleteEmployee();
                break;
        
            default:
            System.out.println("Please Enter Valid Number (1-4)..!");
                break;
        }

        
    }

    public void addNewEmployee(){

        System.out.println("*****************************************");
        System.out.println("********************   Add New Employee   *********************");
        System.out.println("*****************************************");

        Scanner newScanner = new Scanner(System.in);
        
        System.out.println("Enter Employee FullName");
        String fullname = newScanner.nextLine();

        System.out.println("Enter Employee Callingname");
        String callingname = newScanner.nextLine();

        System.out.println("Enter Employee Age");
        String age = newScanner.nextLine();

        System.out.println("Enter Employee Nic");
        String nic = newScanner.nextLine();

        System.out.println("Enter Employee Salary");
        String salary = newScanner.nextLine();

        System.out.println("Enter Employee Date of birth (YYYY-MM-DD)");
        String dob = newScanner.nextLine();

        Employee newEmployee = new Employee(null, fullname, callingname, Integer.parseInt(age), nic, BigDecimal.valueOf(Double.valueOf(salary)), LocalDate.parse(dob));

        System.out.println("Are you sure to submit above employee details..?");
        System.out.println("[Y] - Yes");
        System.out.println("[N] - No");
        String userResponse = newScanner.nextLine();
        if (userResponse.equals("Y")) {
           String serverResponse = employeeController.saveEmployee(newEmployee);
           if (serverResponse.equals("OK")) {
            System.out.println("Employee Save Successfully..!");
            LoadWellcomePage();
           } else {
            System.out.println("Employee Save not Successfully");
            System.out.println("Has some errors..!");
            System.out.println(serverResponse);
            

           }
        } else {
            LoadWellcomePage();
        }

        System.out.println("*****************************************");
        System.out.println("********************   End   *********************");
        System.out.println("*****************************************");
    }
    public void viewEmployee(){

        System.out.println("*****************************************");
        System.out.println("********************   View Employee   *********************");
        System.out.println("*****************************************");


        List<Employee> allEmployee = employeeController.findAll();

        System.out.println("-------------------------------------------------------------");
        System.out.println("--- Id --- FullName --- Callingname --- Age --- Nic ---");
        System.out.println("-------------------------------------------------------------");

        for (Employee employee : allEmployee) {
            System.out.println("---" + employee.getId() + "---" + employee.getFull_name() + "---" + employee.getCallingname()+ "---" + employee.getAge() + "---" + employee.getNic() + "---");
        }


        System.out.println("-------------------------------------------------------------");
        System.out.println("-------------------------------------------------------------");

        System.out.println("[1] - Update Employee");
        System.out.println("[2] - Delete Employee");
        System.out.println("Select One Option and Enter Selected Option Number then press Enter..");
        Scanner newScanner = new Scanner(System.in);
        String selectOption = newScanner.nextLine();

        switch (selectOption) {
            case "1":
                updateEmployee();
                break;

                case "2":
                deleteEmployee();
                break;
        
            default: 
            LoadWellcomePage();
             break;
        }

        System.out.println("*****************************************");
        System.out.println("********************   End   *********************");
        System.out.println("*****************************************");
    }
    public void updateEmployee(){

        System.out.println("*****************************************");
        System.out.println("********************   Update Employee   *********************");
        System.out.println("*****************************************");

        System.out.println("Press 1 for load Wellcome page");
        Scanner newScanner = new Scanner(System.in);

        System.out.println("*****************************************");
        System.out.println("********************   End   *********************");
        System.out.println("*****************************************");

        
        String selectOption = newScanner.nextLine();
        if (selectOption.equals("1")) {
            LoadWellcomePage();
        }
        
    }
    public void deleteEmployee(){

        System.out.println("*****************************************");
        System.out.println("********************   Delete Employee   *********************");
        System.out.println("*****************************************");

        Scanner newScanner = new Scanner(System.in);
        String selectOption = newScanner.nextLine();

        System.out.println("*****************************************");
        System.out.println("********************   End   *********************");
        System.out.println("*****************************************");
        System.out.println("Press 1 for load Wellcome page");
        
        if (selectOption.equals(1)) {
            LoadWellcomePage();
        }
        
    }
}