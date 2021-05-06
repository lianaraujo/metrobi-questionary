def getMaxValue(types, cap):
    price = []
    wt = []
    n = len(types)
  # the types are divided in two lists one for prices the other for weights
    for i in types:
        price.append(i["price"])
        wt.append(i["kg"])
  # a clean table is created with this list comprehension
    K = [[0 for x in range(cap + 1)] for x in range(n + 1)]

  # the nested loop fills the values for the table
    for i in range(n + 1):
        for w in range(cap + 1):
          # this sets the first row and column to 0
            if i == 0 or w == 0:
                K[i][w] = 0
  # this checks if the current weight is less than the maximun the cell can hold
  # and include or exclude the object depending which value is greater
            elif wt[i-1] <= w:
                K[i][w] = max(price[i-1] + K[i-1][w-wt[i-1]], K[i-1][w])
  # this part is for when the weight is greater than the maximun a cell can hold
            else:
                K[i][w] = K[i-1][w]
    return K[n][cap]


carrotTypes = [{"kg": 5, "price": 100}, {
    "kg": 7, "price": 150}, {"kg": 3, "price": 70}]
capacity = 36

print(getMaxValue(carrotTypes, capacity))
