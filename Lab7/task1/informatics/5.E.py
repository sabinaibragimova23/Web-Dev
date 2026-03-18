n = int(input())
a = list(map(int, input().split()))

found = False
for i in range(n - 1):
    if a[i] > 0 and a[i + 1] > 0:
        found = True
    if a[i] < 0 and a[i + 1] < 0:
        found = True

if found:
    print("YES")
else:
    print("NO")