package lk.bitprojectoln;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@SpringBootApplication
@RestController
public class BitprojectolnApplication {

	public static void main(String[] args) {
		SpringApplication.run(BitprojectolnApplication.class, args);

		System.out.println("Hello World");
	}

	// @RequestMapping(value = "/index")
	// public String index() {
	// 	return "<h1> Hello World </h1>";
	// }

	//maping for return index page url --> [/index or /]
	@RequestMapping(value = {"/index", "/"})
	public ModelAndView uiIndexPage(){
		ModelAndView indexPage = new ModelAndView();

		 indexPage.setViewName("index.html");
		return indexPage;
	}
	

}
