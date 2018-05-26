from __future__ import print_function
import turtle
from turtle import

def draw(ls):
    turtle.reset()
    for element in ls:
        if element > 0:
            turtle.forward(element)
            