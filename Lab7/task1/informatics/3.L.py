x = int(input())

n = 0
power = 1

while x > 0:
    digit = x % 10
    n += digit * power
    power *= 2
    x //= 10

print(n)