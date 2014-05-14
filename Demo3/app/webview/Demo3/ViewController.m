//
//  ViewController.m
//  Demo3
//
//  Created by 赵颖 on 14-5-12.
//  Copyright (c) 2014年 Ying.Zhao. All rights reserved.
//

#import "ViewController.h"
#import "ZYWebView.h"

@interface ViewController ()

@property (nonatomic, strong) NSString *url;

@end

@implementation ViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    UITextField *textField = [[UITextField alloc] initWithFrame:CGRectMake(40, 40, 180, 37)];
    textField.placeholder = @"please input URL";
    textField.tag = 1;
    textField.clearButtonMode = UITextFieldViewModeAlways;
    [self.view addSubview:textField];
    
    UIButton *button = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    button.frame = CGRectMake(230, 40, 40, 37);
    [button setTitle:@"GO" forState:UIControlStateNormal];
    button.contentHorizontalAlignment = UIControlContentHorizontalAlignmentCenter;
    [button addTarget:self action:@selector(btnClick) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
}

- (void)btnClick
{
    UITextField *textField = (UITextField*)[self.view viewWithTag:1];
    if([textField.text  isEqual: @""])
    {
        UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:@"" message:@"输入不能为空" delegate:self cancelButtonTitle:@"确定" otherButtonTitles: nil];
        [alertView show];
    }
    else
    {
        ZYWebView *webview = [[ZYWebView alloc] init];
        _url = textField.text;
        webview.url = _url;
        [self.navigationController pushViewController:webview animated:YES];
    }
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
