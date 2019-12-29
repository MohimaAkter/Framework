package Step_Defination_Three;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		//features = "classpath:features",
		//features = "src/test/resources/features/FlightRegistration.feature",
		features = "src/test/resources/features/findFlights.feature",	
			
		plugin = {"pretty", "html:target/cucumber-html-report"},
	
		monochrome = true,
		glue="Step_Defination_Three",
		tags = {}
		)
public class TestRunner{
	
}

//@CucumberOptions( monochrome = true,plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json" })