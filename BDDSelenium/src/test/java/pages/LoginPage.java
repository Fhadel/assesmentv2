package pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		 this.driver = driver;
		 PageFactory.initElements(driver, this);
		 }
	
	public void setUsername(String username) {
		driver.findElement(By.xpath("//*[@id='email']")).sendKeys(username);
	}
	
	public void setPassword(String password) {
		driver.findElement(By.xpath("//*[@id='pass']")).sendKeys(password);
	}
	
	public void clickLoginFacebook(String elementx) throws InterruptedException {
		driver.findElement(By.cssSelector(elementx)).click();
		setUsername("Fhadel");
		setPassword("P@ssw0rd");
		driver.navigate().back();
		driver.navigate().back();
		Thread.sleep(5000);
		//driver.findElement(By.cssSelector("")).click();
	}
	
	public void inputText(String elementx, String value) {
		driver.findElement(By.cssSelector(elementx)).sendKeys(value);
	}
	
	public void setEmail(String email) {
		driver.findElement(By.xpath("//input[contains(@name,'username')]")).sendKeys(email);
	}
	
	public void setPasswordEmail(String password) {
		driver.findElement(By.xpath("//input[contains(@name,'password')]")).sendKeys(password);
	}
	
	public void loginWithEmail(String user, String pass) {
		setEmail(user);
		driver.findElement(By.xpath("//button[contains(@class,'submitEmail')]")).click();
		setPasswordEmail(pass);
		driver.findElement(By.xpath("//button[contains(@class,'loginSubmitButton')]")).click();
	}
	
}