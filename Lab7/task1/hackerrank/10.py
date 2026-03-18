import re
import email.utils

n = int(input())

pattern = r'^[A-Za-z][A-Za-z0-9._-]*@[A-Za-z]+\.[A-Za-z]{1,3}$'

for _ in range(n):
    name, addr = email.utils.parseaddr(input())
    
    if re.match(pattern, addr):
        print(email.utils.formataddr((name, addr)))