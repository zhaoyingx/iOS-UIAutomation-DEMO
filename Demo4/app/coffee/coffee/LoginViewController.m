//
//  LoginViewController.m
//  coffee
//
//  Created by 赵颖 on 14-5-16.
//  Copyright (c) 2014年 Ying.Zhao. All rights reserved.
//

#import "LoginViewController.h"
#import "ContentViewController.h"

@interface LoginViewController ()

@property (strong, nonatomic) NSArray *array;

@end

@implementation LoginViewController

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
    UITextField *username = [[UITextField alloc] initWithFrame:CGRectMake(50, 50, 220, 37)];
    username.placeholder = @"username";
    username.clearButtonMode = UITextFieldViewModeAlways;
    username.borderStyle = UITextBorderStyleRoundedRect;
    username.tag = 1;
    [self.view addSubview:username];
    
    UITextField *password = [[UITextField alloc] initWithFrame:CGRectMake(50, 100, 220, 37)];
    [password setSecureTextEntry:YES];
    password.placeholder = @"password";
    password.clearButtonMode = UITextFieldViewModeAlways;
    password.borderStyle = UITextBorderStyleRoundedRect;
    password.tag = 2;
    [self.view addSubview:password];
    
    UIButton *login = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    login.frame = CGRectMake(50, 150, 100, 37);
    [login setTitle:@"Login" forState:UIControlStateNormal];
    [login setTitleColor:[UIColor colorWithRed:0/255.0 green:0/255.0 blue:0/255.0 alpha:1.0] forState:(UIControlStateNormal)];
    login.backgroundColor = [UIColor colorWithRed:153/255.0 green:212/255.0 blue:211/255.0 alpha:1.0];
    login.contentHorizontalAlignment = UIControlContentHorizontalAlignmentCenter;
    [login addTarget:self action:@selector(login) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:login];
    
    UIButton *cancel = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    cancel.frame = CGRectMake(170, 150, 100, 37);
    [cancel setTitle:@"Cancel" forState:UIControlStateNormal];
    [cancel setTitleColor:[UIColor colorWithRed:0/255.0 green:0/255.0 blue:0/255.0 alpha:1.0] forState:(UIControlStateNormal)];
    cancel.backgroundColor = [UIColor colorWithRed:255/255.0 green:117/255.0 blue:18/255.0 alpha:1.0];
    cancel.contentHorizontalAlignment = UIControlContentHorizontalAlignmentCenter;
    [cancel addTarget:self action:@selector(cancel) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:cancel];
    
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    [self setup];
    NSDictionary *dic0 = [NSDictionary dictionaryWithObjectsAndKeys:@"tiramisu",@"username",@"0987",@"password", nil];
    NSDictionary *dic1 = [NSDictionary dictionaryWithObjectsAndKeys:@"kitkat",@"username",@"1234",@"password", nil];
    NSDictionary *dic2 = [NSDictionary dictionaryWithObjectsAndKeys:@"latte",@"username",@"2345",@"password", nil];

    _array = [NSArray arrayWithObjects:dic0, dic1, dic2, nil];
//    NSLog(@"_array is %@",_array);
}

- (void)touchesBegan:(NSSet *)touches withEvent:(UIEvent *)event
{
    UITextField *username = (UITextField*)[self.view viewWithTag:1];
    [username resignFirstResponder];
    UITextField *password = (UITextField*)[self.view viewWithTag:2];
    [password resignFirstResponder];
}

- (void)login
{
    UITextField *username = (UITextField*)[self.view viewWithTag:1];
    UITextField *password = (UITextField*)[self.view viewWithTag:2];
    if ([username.text  isEqual: @""] || [password.text isEqual:@""]) {
        UIAlertView *alertForEmpty = [[UIAlertView alloc] initWithTitle:@"" message:@"用户名密码不能为空" delegate:self cancelButtonTitle:@"确定" otherButtonTitles: nil];
        [alertForEmpty show];
    }
    else
    {
        for (int i=0; i<[_array count]; i++) {
            if (![username.text isEqualToString: [_array[i] valueForKey:@"username"]]) {
                continue;
            }
            else
            {
                if ([password.text isEqualToString: [_array[i] valueForKey:@"password"]]) {
                    ContentViewController *contentViewController = [[ContentViewController alloc] init];
                    [self.navigationController pushViewController:contentViewController animated:NO];
                }
                else
                {
                    UIAlertView *alertForPWError = [[UIAlertView alloc] initWithTitle:@"" message:@"密码错误" delegate:self cancelButtonTitle:@"确定" otherButtonTitles: nil];
                    [alertForPWError show];
                }
                break;
            }
        }
    }
}

- (void)cancel
{
    NSLog(@"operating cancel");
    UITextField *username = (UITextField*)[self.view viewWithTag:1];
    username.text = @"";
    UITextField *password = (UITextField*)[self.view viewWithTag:2];
    password.text = @"";
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
