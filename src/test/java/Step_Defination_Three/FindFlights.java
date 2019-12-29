package Step_Defination_Three;

import org.openqa.selenium.WebDriver;

import Pages.Flights;
import Pages.Home;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FindFlights {
		
		 String url = "http://newtours.demoaut.com/";
		 public Home hm;
		 public Flights fl;
		 public WebDriver driver;
		 
		 		public FindFlights()
		 		{
		 			driver = Hooks.driver;
		 		}
/*@Given("^Open Mercury Flight Application$")
public void Luanch_Mercury_Flight_Application()
   {
	driver.get(url);
	}*/

@When("^Click On The Flights link$")
public void Click_On_The_Flights_link() throws InterruptedException
{
	System.out.println("ClickOnFlights");
		hm =  new Home(driver);
		hm.ClickOnFlights();
		Thread.sleep(5000);
}

@Then("^Flights Page Should Be Displayed$")
public void Flights_Page_Should_Be_Displayed()
{
	fl = new Flights(driver);
	
}

@And("^Click On tripType \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\" and \"(.*?)\"$")
public void Click_On_tripType(String value1,String value2,String value3,String value4,String value5,String value6,String value7,String value8,String value9,String value10)
{
	fl = new Flights(driver);
	fl.Click_tripType(value1);
	fl.drp_passanger(value2);
	fl.drp_Port(value3);
	fl.drp_Month(value4);
	fl.drp_Day(value5);
	fl.drp_toPort(value6);
	fl.drp_toMonth(value7);
	fl.drp_toDay(value8);
	fl.Radiobutton(value9);
	fl.Choose_airline(value10);
}
@Then("^Click On Continue Button$")
public void Click_On_Continue_Button() 
{
	fl = new Flights(driver);
	fl.Continue_Button();
}
/*@And("^Close The Browser$")
public void Close_The_Browser()
{
	driver.close();
	driver.quit();
}*/

}
