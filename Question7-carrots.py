def getMaxValue(types, cap):
    price = []
    wt = []
    n = len(types)

    # creating lists for value and weight
    for i in types:
        price.append(i["price"])
        wt.append(i["kg"])
    print(wt, price)

    # creating a list that represents the capacity of the bag
    bag = [0 for i in range(cap + 1)]

    # each run of this for loop will check if the current index of the bag
    # can hold more weight and when it can it adds the best value it can get
    # until its full
    for i in range(cap + 1):
        for j in range(n):
            if (wt[j] <= i):
                bag[i] = max(bag[i], bag[i - wt[j]] + price[j])
                print(bag)

    return bag[cap]


carrotTypes = [{"kg": 5, "price": 100}, {
    "kg": 7, "price": 150}, {"kg": 3, "price": 70}]
capacity = 36

print(getMaxValue(carrotTypes, capacity))
