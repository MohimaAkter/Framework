package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class Register {
	
WebDriver driver;
	public Register(WebDriver driver)
	{
		this.driver = driver;
		//This initElements method will create  all WebElements
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(name="firstName")
	WebElement firstNametxt;
	@FindBy(name="lastName")
	WebElement lastNametxt;
	@FindBy(name="phone")
	WebElement phonetxt;
	@FindBy(name="userName")
	WebElement userNametxt;
	@FindBy(name="address1")
	WebElement address1txt;
	@FindBy(name="address2")
	WebElement address2txt;
	@FindBy(name="city")
	WebElement citytxt;
	@FindBy (name="state")
	WebElement statetxt;
	@FindBy(name="postalCode")
	WebElement postalCodetxt;
	@FindBy(name="country")
	WebElement countrydrp;
	@FindBy(name="email")
	WebElement emailtxt;
	@FindBy(name="password")
	WebElement passwordtxt;
	@FindBy(name="confirmPassword")
	WebElement confirmPasswordtxt;
	@FindBy(name="register")
	WebElement registerbtn;
	@FindBy(linkText="REGISTER")
	WebElement registerlink;
	@FindBy(tagName="body")
	WebElement bodytag;
	
public void Create_User() throws InterruptedException
{
	firstNametxt.sendKeys("Mohima");
	lastNametxt.sendKeys("Akter");
	phonetxt.sendKeys("3454567245");
	userNametxt.sendKeys("demoemail@gmail.com");
	address1txt.sendKeys("90-45,215street");
	address2txt.sendKeys("90-45,215street");
	citytxt.sendKeys("Jamaica");
	statetxt.sendKeys("New York");
	postalCodetxt.sendKeys("11428");
	Select drpcountry = new Select(countrydrp);
	drpcountry.selectByVisibleText("UNITED STATES");
	emailtxt.sendKeys("demoemail@gmail.com");
	passwordtxt.sendKeys("123456789");
	confirmPasswordtxt.sendKeys("123456789");
	registerbtn.click();
	Thread.sleep(5000);			
}

public void Create_User_With_Only_3Fields(String uname,String pwd,String cpwd) throws InterruptedException
{
	emailtxt.sendKeys(uname);
	passwordtxt.sendKeys(pwd);
	confirmPasswordtxt.sendKeys(cpwd);
	registerbtn.click();
	Thread.sleep(5000);
}
public String getbodytext()
{
	//String  sActualValue=driver.findElement(By.tagName("Body")).getText();
	String sActualValue = bodytag.getText();
	return sActualValue;
}
	
	
	
}
