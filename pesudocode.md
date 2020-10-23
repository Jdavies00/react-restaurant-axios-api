Generate the following information:

The restaurant's name (give it a good one!)
The restaurant's address
The restaurant's hours of operation
Access the API using Axios. Learn more

Create a dynamic restaurant menu

Must include at least five sections for unique meal type (appetizers, lunch, main course, sides, dessert, etc) with unique food items

One meal section must have
    at least 15 unique items, 
    and 3 other different meal 
sections must have at least 8 unique items each. 
    (think 15 main courses, 10 
appetizers, 1 special, 8 sides, etc)
A price for the food item

Since the api generates random foods, you do not need to sort the foods, as long as you are display them in their unique sections (imagine this restaurant exists in a parallel universe where people eat whatever, whenever)

Each Menu Section must be viewable separately in an organism (for example, a bootstrap accordion or nav tabs)

Each menu item must be an molecule (for example, using a bootstrap card with a picture of the meal, as well as the name, and the price, etc)

Manage the React Component State

Each time you access the API, you get a different menu. Use
 React Lifecycle Methods
    compo did mount 
    returning users get the same meals

 to save the results in local storage so that every time your website is accessed, the user gets the same menu (Different users will see different menus; that's okay). Make sure if you delete local storage, you retrieve a new menu from the API

 make 2 calls to api for 24 and 25 items 
    stor locallys
    once # of items reaches 49 
    send to certain numnre  of variables ot each method
    each meoth can filter(..., -__) to break the jason objects onto alist


**menu**
contain 5 methods one for each accordian
1. pull from local 
2
3
4
5