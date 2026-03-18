def sum13(nums):
    total = 0
    skip = False
    
    for x in nums:
        if x == 13:
            skip = True
            continue
        if skip:
            skip = False
            continue
        total += x
        
    return total