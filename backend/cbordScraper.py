from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json

# Taylor Liegel
# 3/31/2023


def obtain_info(username, password):

    options = Options()
    options.add_argument("headless")
    options.add_argument("--log-level=3")
    driver = webdriver.Chrome(
        executable_path='/Users/lenazheng/Downloads/chromedriver_mac64/chromedriver', options=options)

    driver.get("https://tribecard.wm.edu/login/cas.php")

    # Logging into cbord

    user_field = driver.find_element(By.ID, "username")
    pass_field = driver.find_element(By.ID, "password")

    user_field.send_keys(username)
    pass_field.send_keys(password)

    submit_button = driver.find_element(By.NAME, "submit")

    submit_button.click()

    # Table time babey

    tbody = driver.find_element(
        By.XPATH, '//*[@id="divContent"]/table[2]/tbody/tr/td[2]/div/table[1]/tbody')
    valueDict = {}

    for row in tbody.find_elements(By.XPATH, './tr'):
        ta = row.find_element(By.XPATH, './th').find_element(By.XPATH, './a')
        name = ta.text
        td = row.find_element(By.XPATH, './td')
        value = td.text.replace("$", "")

        valueDict[name] = value

    # print(valueDict)

    mealSwipes = driver.find_element(
        By.XPATH, '//*[@id="divContent"]/table[2]/tbody/tr/td[2]/div/table[2]/tbody/tr/td').text

    valueDict["Swipes"] = mealSwipes


    individualDining = driver.find_element(
        By.XPATH, '//*[@id="divContent"]/table[2]/tbody/tr/td[2]/div/table[1]/tbody/tr[2]/th/a')

    individualDining.click()


    monthSelection = driver.find_element(
        By.XPATH, '//*[@id="svcHistForm"]/input[1]')

    monthSelection.click()

    WebDriverWait(driver, 10).until(EC.presence_of_element_located(
        (By.XPATH, '//*[@id="divHist"]/table[1]/tbody/tr[1]/td[2]')))


    init_val = driver.find_element(
        By.XPATH, '//*[@id="divHist"]/table[1]/tbody/tr[1]/td[2]').text


    valueDict["MonthStartDining"] = init_val.replace("$", "")

    post_val = driver.find_element(
        By.XPATH, '//*[@id="divHist"]/table[1]/tbody/tr[2]/td[2]').text

    valueDict["MonthEndDining"] = post_val.replace("$", "")

    driver.get("https://tribecard.wm.edu/student/welcome.php")

    individualSwipes = driver.find_element(
        By.XPATH, '//*[@id="divContent"]/table[2]/tbody/tr/td[2]/div/table[2]/tbody/tr/th/a')

    individualSwipes.click()


    monthSelection = driver.find_element(
        By.XPATH, '//*[@id="svcHistForm"]/input[1]')

    monthSelection.click()

    WebDriverWait(driver, 10).until(EC.presence_of_element_located(
        (By.XPATH, '//*[@id="divHist"]/table[1]/tbody/tr[1]/td[2]')))


    init_val = driver.find_element(
        By.XPATH, '//*[@id="divHist"]/table[1]/tbody/tr[1]/td[2]').text


    valueDict["MonthStartSwipes"] = init_val.replace("$", "")

    post_val = driver.find_element(
        By.XPATH, '//*[@id="divHist"]/table[1]/tbody/tr[2]/td[2]').text

    valueDict["MonthEndSwipes"] = post_val.replace("$", "")

    # new

    driver.get("https://tribecard.wm.edu/student/welcome.php")

    individualSwipes = driver.find_element(
        By.XPATH, '//*[@id="divContent"]/table[2]/tbody/tr/td[2]/div/table[1]/tbody/tr[1]/th/a')

    individualSwipes.click()


    monthSelection = driver.find_element(
        By.XPATH, '//*[@id="svcHistForm"]/input[1]')

    monthSelection.click()

    WebDriverWait(driver, 10).until(EC.presence_of_element_located(
        (By.XPATH, '//*[@id="divHist"]/table[1]/tbody/tr[1]/td[2]')))


    init_val = driver.find_element(
        By.XPATH, '//*[@id="divHist"]/table[1]/tbody/tr[1]/td[2]').text


    valueDict["MonthStartExpress"] = init_val.replace("$", "")

    post_val = driver.find_element(
        By.XPATH, '//*[@id="divHist"]/table[1]/tbody/tr[2]/td[2]').text

    valueDict["MonthEndExpress"] = post_val.replace("$", "")


    json_object = json.dumps(valueDict, indent=4)
    return json_object
