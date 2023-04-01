from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
import json

# Taylor Liegel
# 3/31/2023








def obtain_info(username, password):

    options = Options()
    options.add_argument("headless")
    options.add_argument("--log-level=3")
    service = Service("chromedriver.exe")
    driver = webdriver.Chrome(service=service, options=options)

    driver.get("https://tribecard.wm.edu/login/cas.php")

    # Logging into cbord

    user_field = driver.find_element(By.ID, "username")
    pass_field = driver.find_element(By.ID, "password")

    user_field.send_keys(username)
    pass_field.send_keys(password)

    submit_button = driver.find_element(By.NAME, "submit")

    submit_button.click()

    # Table time babey

    tbody = driver.find_element(By.XPATH, '//*[@id="divContent"]/table[2]/tbody/tr/td[2]/div/table[1]/tbody')
    valueDict = {}

    for row in tbody.find_elements(By.XPATH, './tr'):
        ta = row.find_element(By.XPATH, './th').find_element(By.XPATH, './a')
        name = ta.accessible_name
        td = row.find_element(By.XPATH, './td')
        value = td.accessible_name.replace("$", "")

        valueDict[name] = value


    # print(valueDict)

    mealSwipes = driver.find_element(By.XPATH, '//*[@id="divContent"]/table[2]/tbody/tr/td[2]/div/table[2]/tbody/tr/td').accessible_name

    valueDict["Swipes"] = mealSwipes

    json_object = json.dumps(valueDict, indent = 4)
    return json_object