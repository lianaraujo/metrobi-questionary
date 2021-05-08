# formula to find the worst case x(x+1)/2 = 100
# the reason behind the formula is to make all possible cases take the same number
# of drops.
# So the first drop is x, if it doesnt breake next drop is x + (x-1)
# that reduces the number of attempts by 1 each drop.
# When it breaks the next drop is from the previous value of x+1 until the current x-1.


# this function gets the floor it would break as a argument and it returns how
# many tries it took to find the floor


def eggDrop(floor):
    eggs = 2
    floors = 100
    tries = 0

    dropFloor = 14
    remainingFloors = 14

    while eggs > 0:
        if eggs > 1:
            tries += 1
            if floor <= dropFloor:
                eggs -= 1
                limit = dropFloor
                if limit > 100:
                    limit = 100
                dropFloor -= remainingFloors - 1
            else:
                remainingFloors -= 1
                dropFloor += remainingFloors
        else:
            while dropFloor < limit:
                tries += 1
                if floor == dropFloor:
                    eggs -= 1
                    break
                else:
                    dropFloor += 1
            break
    return 'It took ' + str(tries) + ' tries to find the floor ' + str(floor)


print(eggDrop(1))
