package Pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Home {

	WebDriver driver;
	
	@FindBy(linkText="REGISTER")
	WebElement registerlink;
	
	@FindBy(linkText="Flights")
	WebElement flightslink;
	@FindBy(name = "findFlights")
	WebElement CONTINUE;
	
//WebElement registerlink = By.linkText("REGISTER");	
//WebElement flightslink = By.linkText("Flights");
	
//CONSTRACTOR
public Home(WebDriver driver)
{
	this.driver = driver;
	PageFactory.initElements(driver, this); //This initElements method will create  all WebElements
}
public void ClickOnRegisterlink()
{
	//driver.findElement(registerlink).click();
	registerlink.click();
}
public void ClickOnFlights()
{
	//driver.findElement(flightlink).click();
	flightslink.click();
}
public void Click_Continue_Button()
{
	CONTINUE.click();
}
	
	
}
