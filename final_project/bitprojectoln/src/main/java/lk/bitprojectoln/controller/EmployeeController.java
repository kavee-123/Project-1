package lk.bitprojectoln.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class EmployeeController {

    // request maping for load employee ui [URL --> /employee]
    @RequestMapping(value = "/employee")
    public ModelAndView loadEmployeeUi() {
        ModelAndView employeeUI = new ModelAndView();
        employeeUI.setViewName("employee.html");

        return employeeUI;
    }
}
