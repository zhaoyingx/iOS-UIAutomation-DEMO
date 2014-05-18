//
//  ContentViewController.m
//  coffee
//
//  Created by 赵颖 on 14-5-16.
//  Copyright (c) 2014年 Ying.Zhao. All rights reserved.
//

#import "ContentViewController.h"
#import "CollectionViewController.h"
#import "TableViewController.h"

@interface ContentViewController ()

@end

@implementation ContentViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)setup
{
    CollectionViewController *collectionView = [[CollectionViewController alloc] init];
    TableViewController *tableView = [[TableViewController alloc] init];
    NSArray *array = [NSArray arrayWithObjects:collectionView, tableView, nil];
    UITabBarController *tabBarController = [[UITabBarController alloc] init];
    [tabBarController setViewControllers:array animated:YES];
    self.view.window.rootViewController = tabBarController;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    [self setup];
}

- (BOOL)tabBarController:(UITabBarController *)tabBarController shouldSelectViewController:(UIViewController *)viewController NS_AVAILABLE_IOS(3_0)
{
    return YES;
}
#pragma mark 已经被选中
- (void)tabBarController:(UITabBarController *)tabBarController didSelectViewController:(UIViewController *)viewController
{
    NSLog(@"%s", __FUNCTION__);
}

#pragma mark 点击Edit时候执行
- (void)tabBarController:(UITabBarController *)tabBarController willBeginCustomizingViewControllers:(NSArray *)viewControllers NS_AVAILABLE_IOS(3_0)
{
    NSLog(@"%s", __FUNCTION__);
}
#pragma mark 点击Done时候执行
- (void)tabBarController:(UITabBarController *)tabBarController willEndCustomizingViewControllers:(NSArray *)viewControllers changed:(BOOL)changed NS_AVAILABLE_IOS(3_0)
{
    
    NSLog(@"%@", viewControllers);
    
    NSLog(@"%s", __FUNCTION__);
}
#pragma mark 点击Done时候执行
- (void)tabBarController:(UITabBarController *)tabBarController didEndCustomizingViewControllers:(NSArray *)viewControllers changed:(BOOL)changed
{
    NSLog(@"%s", __FUNCTION__);
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
