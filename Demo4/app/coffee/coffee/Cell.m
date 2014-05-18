//
//  Cell.m
//  coffee
//
//  Created by 赵颖 on 14-5-17.
//  Copyright (c) 2014年 Ying.Zhao. All rights reserved.
//

#import "Cell.h"

@implementation Cell

@synthesize imageView;

- (id)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        // Initialization code
        imageView = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, 320, 300)];
        
        [self addSubview:imageView];
    }
    return self;
}

/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect
{
    // Drawing code
}
*/

@end
