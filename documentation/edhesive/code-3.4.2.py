'''
n = int(input("Numerator: "))
d = int(input("Denominator: "))
if (d != 0):
    decimal = 1.0 * float(n/d)
    print("Decimal: "+str(decimal))
else:
    print("Error - cannot devide by zero.")
'''

num = int(input("Numerator: "))
den = int(input("Denominator: "))

if (den != 0 ):
    print ("Decimal: " + str (1.0 * num/den))
else:
    print("Error - cannot divide by zero.")

