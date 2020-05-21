package pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	WebDriver driver;

	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void navigateToLoginPage(String elementx) throws InterruptedException {
		driver.findElement(By.cssSelector(elementx)).click();
		Thread.sleep(3000);
	}

	public void clickHotelIcon() {
		driver.findElement(By.cssSelector(".product-list-content > .product-box:nth-child(2)")).click();
	}

	public void clickHotelDestination(String elementx) {
		//clickHotelIcon();
		WebElement elementz = driver.findElement(By.xpath("//*[contains(@placeholder,"+elementx+")]"));
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", elementz);
	}

	public void selectLocation(String elementx) throws InterruptedException {
		driver.findElement(By.cssSelector(elementx)).click();
		Thread.sleep(3000);
	}

	public void verifyHomePageUsingText() {
		Boolean Display = driver.findElement(By.xpath("//*[contains(text(),'Mau ke mana?')]")).isDisplayed();
		System.out.println("Element displayed is :"+Display);
		//		Boolean DisplayAds = driver.findElement(By.xpath("//*[@class='ab-close-button']")).isDisplayed();
		//		if(DisplayAds == true) {
		//			driver.findElement(By.xpath("//*[@class='ab-close-button']")).click();
		//		}else {
		//			System.out.println("Ads is not displayed :"+DisplayAds);
		//		}
	}

	public void addGuests(String elementx, String sums) throws InterruptedException {
		int sum = Integer.parseInt(sums);
		List<WebElement> elementsValue = driver.findElements(By.xpath("//*[contains(@class,"+elementx+")]")); 
		String valueTextField = elementsValue.get(1).getText();
		int existing = Integer.parseInt(valueTextField);
		for(int i=existing ; i <= sum ; i++) {
			if(existing != sum) {
				List<WebElement> elements = driver.findElements(By.xpath("//*[contains(@class,'tix-plus')]")); 
				elements.get(0).click();
				Thread.sleep(3000);
			}else {
				break;
			}

		}
	}

	public void addRooms(String elementx, String sums) throws InterruptedException {
		int sum = Integer.parseInt(sums);
		List<WebElement> elementsValue = driver.findElements(By.xpath("//*[contains(@class,"+elementx+")]")); 
		String valueTextField = elementsValue.get(4).getText();
		int existing = Integer.parseInt(valueTextField);
		for(int i=existing ; i <= sum ; i++) {
			if(existing != sum) {
				List<WebElement> elements = driver.findElements(By.xpath("//*[contains(@class,'tix-plus')]")); 
				elements.get(1).click();
				Thread.sleep(3000);
			}else {
				driver.findElement(By.xpath("//span[contains(text(),'SELESAI')]")).click();
			}

		}
	}
	
	public void clicksearchButtonHotel() {
		driver.findElement(By.xpath("//button[contains(text(),'CARI HOTEL')]")).click();
	}

	public void clickFlightIcon() {
		driver.findElement(By.cssSelector(".product-list-content > .product-box:nth-child(1)")).click();
	}

	public void clickDestinationFrom(String elementx) {
		List<WebElement> elementsValue = driver.findElements(By.xpath("//*[contains(text(),"+elementx+")]"));
		elementsValue.get(0).click();
		//driver.findElement(By.cssSelector(elementx)).click();
		//surabaya
	}

	public void clickDestinationTo(String elementx) {
		List<WebElement> elementsValue = driver.findElements(By.xpath("//*[contains(text(),"+elementx+")]"));
		elementsValue.get(1).click();
		//driver.findElement(By.cssSelector(elementx)).click();
		//jakarta
	}

	public void selectPassenger(String sumPassengers) {
		int sumPass = Integer.parseInt(sumPassengers);
		driver.findElement(By.cssSelector("#passengerCabin")).click();
		List<WebElement> elementsValue = driver.findElements(By.xpath("//*[contains(@class,'widget-passenger-counter-item')]"));
		String value = elementsValue.get(1).getText();
		int valueExisiting = Integer.parseInt(value);
		for(int i=valueExisiting;i<=sumPass;i++) {
			if(valueExisiting <= sumPass) {
				elementsValue.get(2).click();
			}
		}
	}

	public void selectCabinClass() throws InterruptedException {
		driver.findElement(By.cssSelector("#passengerCabin")).click();
		List<WebElement> elementsValue = driver.findElements(By.xpath("//*[contains(@class,'widget-cabin-type')]"));
		elementsValue.get(0).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//span[contains(text(),'SELESAI')]")).click();
	}
	
	public void clicksearchButton() {
		driver.findElement(By.xpath("//button[contains(text(),'CARI PENERBANGAN')]")).click();
	}
	
	public void clickAccountIcon() {
		driver.findElement(By.cssSelector(".header-account")).click();
	}

	public void clickLogout() throws InterruptedException {
		driver.findElement(By.xpath("//span[contains(text(),'Keluar')]")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//div[contains(text(),'YA')]")).click();
		
	}

}
