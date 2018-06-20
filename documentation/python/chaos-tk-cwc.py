#!/usr/bin/python3
# -*- coding: utf-8 -*-
from tkinter import Tk, Canvas, Frame, BOTH
from random import randint

class Example(Frame):

    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):

        self.master.title("Lines")
        self.pack(fill=BOTH, expand=1)
        canvas = Canvas(self)
        h = randint(0,650) 
        k = randint(0,650)
        alist = [h,k]
        count = 0
        alist = newpoint(alist)
        print(alist)
        canvas.create_line(15, 25, 16, 25, fill = "#00f" , width=1)
       
        canvas.pack(fill=BOTH, expand=1)

def newpoint(plist):  # Define a function called newpoint
	vx =[300,600,0]  # Set the x values for triangle vertices.
	vy =[0,520,520]  # Set the y values for triangle vertices.
	px = plist[0] # Get the x value of a point
	py = plist[1] # Get the y value of a point
	random_point = randint(0,3) #Get one of 3 points.
	# Calculate half the distance from the current point to a triangle vertex.
	if (random_point % 3 == 0):
		plist[0] = int((px + vx[0])/2)
		plist[1] = int((py + vy[0])/2)
	if (random_point % 3 == 1):
		plist[0] = int((px + vx[1])/2)
		plist[1] = int((py + vy[1])/2)
	if (random_point % 3 == 2):
		plist[0] = int((px + vx[2])/2)
		plist[1] = int((py + vy[2])/2)
	print(plist)  #print the new point
	return plist #Send the point (list) back to the calling function.
		
def main():
    root = Tk()
    ex = Example()
    root.geometry("400x250+300+300")
    root.mainloop()


if __name__ == '__main__':
    main()
