//
//  CollectionViewController.m
//  coffee
//
//  Created by 赵颖 on 14-5-17.
//  Copyright (c) 2014年 Ying.Zhao. All rights reserved.
//

#import "CollectionViewController.h"
#import "Cell.h"

@interface CollectionViewController ()

@property (strong, nonatomic) NSArray *array;

@end

@implementation CollectionViewController

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
    UITabBarItem *item = [[UITabBarItem alloc] initWithTitle:@"tab1" image:
                                                         [UIImage imageNamed:@"10246026_463419093790032_744858224_n.jpg"]tag:1];
    self.tabBarItem = item;
}

- (UICollectionViewFlowLayout *)createLayout
{
    UICollectionViewFlowLayout *layout = [[UICollectionViewFlowLayout alloc] init];
    layout.footerReferenceSize = CGSizeMake(300, 75);
    return layout;
}

- (NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section
{
    return 10;
}

// The cell that is returned must be retrieved from a call to -dequeueReusableCellWithReuseIdentifier:forIndexPath:
- (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath
{
    static NSString *CellIdentifier = @"cellIdentifier";
    Cell *cell=[collectionView dequeueReusableCellWithReuseIdentifier:CellIdentifier forIndexPath:indexPath];
    if (cell == nil)
    {
        //
    }
    cell.backgroundColor = [UIColor whiteColor];
    cell.imageView.image = [UIImage imageNamed:@"1742923_290111287833273_891201880_n.ipg"];
    return cell;
}

- (CGSize)collectionView:(UICollectionView *)collectionView layout:(UICollectionViewLayout*)collectionViewLayout sizeForItemAtIndexPath:(NSIndexPath *)indexPath
{
    return CGSizeMake(320, 360);
}


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
