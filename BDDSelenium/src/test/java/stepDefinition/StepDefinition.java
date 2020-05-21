package stepDefinition;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.junit.After;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import pages.LoginPage;

public class StepDefinition{
	private Scenario myScenario;
	WebDriver driver;
	HomePage home;
	LoginPage loginPage;

	static Logger logger = Logger.getLogger(StepDefinition.class);
	@Before() 
	public void definedScenario(Scenario scenario) {
		myScenario = scenario;
	}

	@Given(".*?open.*?\"(.*?)\".*?browser$")
	public void openApps(String url) throws InterruptedException{
		System.setProperty("webdriver.chrome.driver", "//Users//18055967//eclipse-workspace//BDDSelenium//Driver//chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get(url);
		Thread.sleep(5000);
		//		if ( driver.findElement(By.xpath("//*[@class='ab-close-button']")).isDisplayed() == true ) {
		//			driver.findElement(By.xpath("//*[@class='ab-close-button']")).click();
		//		}else {
		//			System.out.println("No Ads");
		//		}
	}

	@When("^I click \\\"([^\\\"]*)\\\" as Login button$")
	public void i_click_Login_button(String element) throws InterruptedException  {
		System.out.println(element);
		HomePage home = new HomePage(driver);
		home.navigateToLoginPage(element);
	}

	@When("^I click \"([^\"]*)\" as Login with Facebook$")
	public void  i_click_Login_with_Facebook(String element) throws InterruptedException {
		LoginPage loginPage = new LoginPage(driver);
		loginPage.clickLoginFacebook(element);
	}

	@Then("^I succeed login by seeing text Mau ke mana\\? in Home page$")
	public void i_succeed_login() throws Throwable {
		home = new HomePage(driver);
		home.verifyHomePageUsingText();
	}

	@Given("^I already in Homepage$")
	public void i_already_in_Homepage() throws Throwable {
		//	    home = new HomePage(driver);
		//	    home.verifyHomePageUsingText();
		System.out.println("Already in Homepage");
	}

	@When("^I click text \"([^\"]*)\" as a Hotel Destination$")
	public void i_click_as_a_Hotel_Destination(String element) throws Throwable {
		home = new HomePage(driver);
		System.out.println(element);
		home.clickHotelDestination(element);
	}

	@Then("^I can click \"([^\"]*)\" to choose a value of location of hotel$")
	public void i_can_click_to_choose_a_value_of_location_of_hotel(String element) throws Throwable {
		home = new HomePage(driver);
		home.selectLocation(element);
	}

	@Then("^I choose existing date value for my booking date$")
	public void i_choose_existing_date_value_for_my_booking_date() throws Throwable {
		System.out.println("xxxxxx");
	}

	@Then("^I can click \"([^\"]*)\" to add the GUEST as many as \"([^\"]*)\" guest$")
	public void i_can_click_to_add_the_guest_as_many_as_guest(String element, String sumGuest) throws Throwable {
		home = new HomePage(driver);
		home.addGuests(element, sumGuest);
	}

	@Then("^I can click \"([^\"]*)\" to add the ROOMS as many as \"([^\"]*)\" rooms$")
	public void i_can_click_to_add_the_rooms_as_many_as_rooms(String element, String sumRooms) throws Throwable {
		home = new HomePage(driver);
		home.addRooms(element, sumRooms);
		Thread.sleep(3000);
		home.clicksearchButtonHotel();
	}

	
	///////////////////////
	@Given("^I login with email \"([^\"]*)\" with Pass \"([^\"]*)\"$")
	public void i_login_with_email_with_Pass(String email, String password) throws Throwable {
		home.navigateToLoginPage(".header-right-item:nth-child(3)");
		loginPage.loginWithEmail(email, password);
		throw new PendingException();
	}

	@Given("^I choose destination from \"([^\"]*)\"$")
	public void i_choose_destination_from(String element) throws Throwable {
		home.clickFlightIcon();
		home.clickDestinationFrom(element);
		throw new PendingException();
	}
	
	@Given("^I choose destination to \"([^\"]*)\"$")
	public void i_choose_destination_to(String element) throws Throwable {
		home.clickFlightIcon();
		home.clickDestinationTo(element);
		throw new PendingException();
	}

	@Given("^I choose current date today$")
	public void i_choose_current_date_today() throws Throwable {
		System.out.println("Use Existing Date");
		throw new PendingException();
	}

	@Given("^I choose \"([^\"]*)\" Adult Passengers$")
	public void i_choose_Adult_Passengers(String sumPassenger) throws Throwable {
		home.selectPassenger(sumPassenger);
	}

	@Given("^I choose Ekonomi Cabin$")
	public void i_choose_Cabin() throws Throwable {
		home.selectCabinClass();
	}

	@Then("^I search the Flight schedule$")
	public void i_search_the_Flight_schedule() throws Throwable {
		home.clicksearchButton();
	}
	
	@Given("^i already in homepage$")
	public void i_already_in_homepage() throws Throwable {
		driver.navigate().back();
		System.out.println("Already in Homepage");
	    throw new PendingException();
	}

	@When("^i click my account icon \"([^\"]*)\"$")
	public void i_click_my_account_icon(String arg1) throws Throwable {
	    home.clickAccountIcon();
	    throw new PendingException();
	}

	@Then("^i can click logout button \"([^\"]*)\"$")
	public void i_can_click_logout_button(String arg1) throws Throwable {
	    home.clickLogout();
	    throw new PendingException();
	}

	@Then("^I can succesfully logout$")
	public void i_can_succesfully_logout() throws Throwable {
	    String text = driver.findElement(By.xpath("//a[contains(text(),'Login')]")).getText();
	    assertEquals(text, "Login", "Verify PASSED");
	    throw new PendingException();
	}


}
