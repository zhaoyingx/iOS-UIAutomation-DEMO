#!/usr/bin/env python
#-*-coding:utf-8-*=

import unittest
from appium import webdriver
from time import sleep

import desired_capabilities

class TestInput(unittest.TestCase):
    def setUp(self):
        desired_caps = desired_capabilities.get_desired_capabilities('Demo3.zip')
        self.driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)

    def tearDown(self):
        self.driver.quit()

    def testInput(self):
       textField = self.driver.find_element_by_ios_uiautomation('.textFields()[0]')
       textField.click()
       self.driver.set_value(textField,'http://www.google.com.tw')
       sleep(5)
       text = textField.get_attribute('value')
       self.assertEqual('http://www.google.com.tw',text)

if __name__ == '__main__':
    unittest.main()
