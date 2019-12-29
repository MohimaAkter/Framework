package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class Flights {
WebDriver driver;

public Flights(WebDriver driver)
{
this.driver = driver;
PageFactory.initElements(driver, this);
}

@FindBy(xpath = "//input[@value='roundtrip']")
WebElement tripTypebtn;
@FindBy(name = "passCount")
WebElement passCountdrp;
@FindBy(name = "fromPort")
WebElement fromPortdrp;
@FindBy(name = "fromMonth")
WebElement fromMonthdrp;
@FindBy(name = "fromDay")
WebElement fromDaydrp;
@FindBy(name = "toPort")
WebElement toPortdrp;
@FindBy(name = "toMonth")
WebElement toMonthdrp;
@FindBy(name = "toDay")
WebElement toDaydrp;
@FindBy(xpath = "/html/body/div/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[9]/td[2]/font/font/input[1]")
WebElement radiobtn;
@FindBy(name = "airline")
WebElement airlinedrp;
@FindBy(name = "findFlights")
WebElement findFlightsbtn;

public void Selecting_The_Flights()
{
	tripTypebtn.click();
	Select drp = new Select(passCountdrp);
	drp.selectByVisibleText("1");
	Select drp1 = new Select(fromPortdrp);
	drp1.selectByVisibleText("New York");
	Select drp2 = new Select(fromMonthdrp);
	drp2.selectByVisibleText("July");
	Select drp3 = new Select(fromDaydrp);
	drp3.selectByVisibleText("5");
	Select drp4 = new Select(toPortdrp);
	drp4.selectByVisibleText("Zurich");
	Select drp5 = new Select(toMonthdrp);
	drp5.selectByVisibleText("August");
	Select drp6 = new Select(toDaydrp);
	drp6.selectByVisibleText("6");
	radiobtn.click();
	Select drp7 = new Select(airlinedrp);
	drp7.selectByVisibleText("Blue Skies Airlines");
	findFlightsbtn.click();
}


public void Click_tripType(String value1)
{
	tripTypebtn.click();
}
public void drp_passanger(String value2)
{
	passCountdrp.click();
}
public void drp_Port(String value3)
{
	fromPortdrp.click();
}
public void drp_Month(String value4)
{
	fromMonthdrp.click();
}
public void drp_Day(String value5)
{
	fromDaydrp.click();
}
public void drp_toPort(String value6)
{
	toPortdrp.click();
}
public void drp_toMonth(String value7)
{
	toMonthdrp.click();
}
public void drp_toDay(String value8)
{
	toDaydrp.click();
}
public void Radiobutton(String value9)
{
	radiobtn.click();
}
public void Choose_airline(String value10)
{
	airlinedrp.click();
}
public void Continue_Button()
{
	findFlightsbtn.click();
}

}
