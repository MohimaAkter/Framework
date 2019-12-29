package Step_Defination_Three;

import org.testng.annotations.Test;
import org.testng.Assert;
import org.openqa.selenium.WebDriver;

import Pages.Home;
import Pages.Register;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;





public class FlightRegistration {
	
 String url = "http://newtours.demoaut.com/";
 public Home hm;
 public Register rp;
 public WebDriver driver;
 
 		public FlightRegistration()
 		{
 			driver = Hooks.driver;
 		}
 	@Given("^Open Mercury Flight Application$")
 	  public void Luanch_Mercury_Flight_Application()
 	  {
 		driver.get(url);
 	  }
 	
 	@When("^Click On Register Link$")
 	public void Click_On_Register_Link() throws InterruptedException 
 	{
 		System.out.println("clickregisterlink");
 		hm =  new Home(driver);
 		hm.ClickOnRegisterlink();
 		Thread.sleep(5000);	
 	}
 	
 	@Then("^Register Page Should Displayed$")
 	public void Register_Page_should_Displayed()
 	{
 		String ExpectedValue = "Register: Mercury Tours";
 		String ActualValue = driver.getTitle();
 		System.out.println( "expected"+ExpectedValue);
 		System.out.println( "actual"+ActualValue);
 		Assert.assertEquals(ExpectedValue, ActualValue);
 	}
 	
 	@And("^Close The Browser$")
 	public void Close_The_Browser()
 	{
 		driver.close();
 		driver.quit();
 	}
 	
 	@And("^Enter \"(.*?)\" and \"(.*?)\" and \"(.*?)\"$")
 	public void EnterValues(String uname,String pwd,String cpwd) throws InterruptedException
 	{
 		 //	driver.findElement(By.name("email")).sendKeys(value1);
	 	 // driver.findElement(By.name("password")).sendKeys(value2);
	 	 // driver.findElement(By.name("confirmPassword")).sendKeys(value3);
		
 		rp = new Register(driver);
 		rp.Create_User_With_Only_3Fields(uname, pwd, cpwd);
 	}
 	
 	@Then("^verify the \"(.*?)\" Created Sucessfully$")
 	public void verify_the_username_Created_Sucessfully(String uname)
 	{
 	 // String  sActualValue=driver.findElement(By.tagName("Body")).getText();
 		rp = new Register(driver);
 		String sActualValue = rp.getbodytext();
 		System.out.println( "check the actual value: "+sActualValue);
 		String expected = "Your user name is "+uname;
 		Assert.assertTrue(sActualValue.contains(expected));
 	}
 	
 	
}
