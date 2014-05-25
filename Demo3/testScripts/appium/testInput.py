#!/usr/bin/env python
#-*-coding:utf-8-*=

# xcodebuild -project example.xcodeproj -sdk iPhoneSimulator

import unittest
from appium import webdriver
from time import sleep

import desired_capabilities

class TestInput(unittest.TestCase):
    def setUp(self):
        '''
            execute 'xcodebuild -project example.xcodeproj -sdk iPhoneSimulator' first
            Then it will generate a *.app file at build/Release-iphonesimulator/
        '''
        desired_caps = desired_capabilities.get_desired_capabilities('Demo3.zip')
        self.driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)

    def tearDown(self):
        self.driver.quit()

    def testTextEmpty(self):
        print "start testing alert...."
        goButton = self.driver.find_element_by_ios_uiautomation('.buttons()[0]')
        goButton.click()
        sleep(2)
        alert = self.driver.switch_to_alert()
        self.assertIsNotNone(alert)
        sleep(2)
        #dismiss alert
        alert.accept()


    def testInput(self):
        print "start testing input and clear...." 
        textField = self.driver.find_element_by_ios_uiautomation('.textFields()[0]')
        textField.click()
        self.driver.set_value(textField,'http://www.google.com.tw')
        sleep(5)
        text = textField.get_attribute('value')
        self.assertEqual('http://www.google.com.tw',text)

        textField.clear()
        default_text = textField.get_attribute('value')
        self.assertEqual(textField.get_attribute("value"), default_text)

    def testOpenWebView(self):
        print "start testing open webview...."
        textField = self.driver.find_element_by_ios_uiautomation('.textFields()[0]')
        textField.click()
        self.driver.set_value(textField,'http://www.douban.com')
        self.driver.find_element_by_ios_uiautomation('.buttons()[0]').click()
        sleep(5)
        try:
            webview = self.driver.find_elements_by_class_name('UIAWebView')
            self.assertIsNotNone(webview)
            logo = self.driver.find_elements_by_name('豆瓣')
            self.assertIsNotNone(logo)
        except:
            pass
        finally:
            self.driver.find_element_by_ios_uiautomation('.navigationBar().buttons()[0]').click()

    def testLinkInPage(self):
        print "test scroll...."
        textField = self.driver.find_element_by_ios_uiautomation('.textFields()[0]')
        textField.click()
        self.driver.set_value(textField,'http://www.douban.com')
        self.driver.find_element_by_ios_uiautomation('.buttons()[0]').click()
        sleep(2)
        self.assertIsNotNone(self.driver.find_elements_by_name('豆瓣'))
        
        try:
            el1 = self.driver.find_elements_by_name('发现更多生活')
            el2 = self.driver.find_elements_by_name('移动风格')
            self.driver.scroll(el1,el2)
            sleep(5)
            self.assertIsNotNone(self.driver.find_elements_by_name('豆瓣电影'))
            self.assertIsNotNone(self.driver.find_elements_by_name('豆瓣东西'))
            self.assertIsNotNone(self.driver.find_elements_by_name('豆瓣读书'))
            self.assertIsNotNone(self.driver.find_elements_by_name('豆瓣音乐'))
            self.assertIsNotNone(self.driver.find_elements_by_name('豆瓣小组'))
            self.assertIsNotNone(self.driver.find_elements_by_name('豆瓣同城'))
        except:
            pass
        finally:
            self.driver.find_element_by_ios_uiautomation('.navigationBar().buttons()[0]').click()


if __name__ == '__main__':
    unittest.main()
