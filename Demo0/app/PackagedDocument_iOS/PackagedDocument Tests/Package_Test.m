//
//  Package_Test.m
//  PackagedDocument
//
//  Created by 赵颖 on 14-6-1.
//  Copyright (c) 2014年 Apple Inc. All rights reserved.
//

#import <XCTest/XCTest.h>
#import <XCTest/XCTestAssertions.h>
#import <KIF/KIF.h>
#import <SenTestingKit/SenTestingKit.h>
#include <stdlib.h>

@interface Package_Test : XCTestCase

@end

@implementation Package_Test

- (void)setUp
{
    [super setUp];
    // Put setup code here. This method is called before the invocation of each test method in the class.
}

- (void)tearDown
{
    // Put teardown code here. This method is called after the invocation of each test method in the class.
    [super tearDown];
}

- (void)testExample
{
//    XCTFail(@"No implementation for \"%s\"", __PRETTY_FUNCTION__);
    UITableView *tableView = (UITableView*)[tester waitForViewWithAccessibilityLabel:@"Empty list"];
    int oldLen = [tableView numberOfRowsInSection:0];
    NSLog(@"oldLen is %d",oldLen);
    int r = arc4random_uniform(1000);
    [tester tapViewWithAccessibilityLabel:@"Add"];
    [tester enterTextIntoCurrentFirstResponder:[NSString stringWithFormat:@"KIF example %d",r]];
    [tester tapViewWithAccessibilityLabel:@"Create"];
    [tester tapViewWithAccessibilityLabel:@"Documents"];
    int newLen = [tableView numberOfRowsInSection:0];
    NSLog(@"newLen is %d",newLen);
    XCTAssertEqual(oldLen+1,newLen);
}

@end
