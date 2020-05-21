package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = { "json:cucumber.json","html:result/cucumber-html-reports","pretty" }, 
		features = { "Features" },
	    tags = { "~@ignore" },
		glue = { "stepDefinition"},
		monochrome=true)

public class Runner {

}
