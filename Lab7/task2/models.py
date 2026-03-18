class Product:
    def __init__(self, name, price, stock):
        self.name = name
        self.price = price
        self.stock = stock

    def total_price(self):
        return self.price * self.stock

    def restock(self, amount):
        self.stock += amount

    def sell(self, amount):
        if self.stock >= amount:
            self.stock -= amount
            print(f"Sold {amount} {self.name}")
        else:
            print("Not enough stock")

    def get_info(self):
        return f"{self.name} is a product."

    def __str__(self):
        return f"Product: {self.name}, Price: {self.price}, Stock: {self.stock}"


class Clothing(Product):
    def __init__(self, name, price, stock, size, material):
        super().__init__(name, price, stock)
        self.size = size
        self.material = material

    def wear(self):
        return f"You are wearing size {self.size} {self.name}"

    def get_info(self):
        return self.wear()

    def __str__(self):
        return f"Clothing: {self.name}, Size: {self.size}, Material: {self.material}, Price: {self.price}, Stock: {self.stock}"


class Cosmetics(Product):
    def __init__(self, name, price, stock, skin_type, is_organic):
        super().__init__(name, price, stock)
        self.skin_type = skin_type
        self.is_organic = is_organic

    def apply(self):
        return f"{self.name} is suitable for {self.skin_type} skin"

    def get_info(self):
        return self.apply()

    def __str__(self):
        return f"Cosmetics: {self.name}, Skin type: {self.skin_type}, Organic: {self.is_organic}, Price: {self.price}, Stock: {self.stock}"
    
