from models import Product, Clothing, Cosmetics

products = [
    Product("Basic Item", 100, 10),
    Clothing("T-shirt", 25, 20, "M", "Cotton"),
    Cosmetics("Face Cream", 40, 15, "Dry", True),
]

for p in products:
    print(p)
    print("Total price:", p.total_price())

    p.restock(5)
    print("After restock:", p.stock)

    p.sell(3)  

    print(p.get_info())  

    print("-------------------------" )