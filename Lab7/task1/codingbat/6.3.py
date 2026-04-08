def centered_average(nums):
    nums_sorted = sorted(nums)
    middle = nums_sorted[1:-1]
    return sum(middle) // len(middle)