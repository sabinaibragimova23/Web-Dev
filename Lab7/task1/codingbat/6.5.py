def sum67(nums):
    total = 0
    ignore = False
    
    for x in nums:
        if x == 6:
            ignore = True
        elif x == 7 and ignore:
            ignore = False
        elif not ignore:
            total += x
            
    return total