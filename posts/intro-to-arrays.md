---
title: 'Introduction to Arrays'
date: 'November 22, 2021'
excerpt: 'An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.'
cover_image: '/images/posts/img3.jpg'
---

# Introduction to Arrays

It was simple when we used to store just a couple of numbers, we just make some variables for that and store respectively. But what if we want to store 50 numbers? Of cource, we can make 50 variables and store but that would be very childish approach and inappropriate. And now assume we have to 5000 numbers, we can't make just 5000 variables.

To handle this situation, in almost all programming languages we have a data structure called `Arrays`.

---

## What is an Array ?

An array is a data structure used to store a collection of data of the same data type. Normally, an array is a collection of similar type of elements which has contiguous memory location.

Java array is an object which contains elements of a similar data type. Additionally, The elements of an array are stored in a contiguous memory location. It is a data structure where we store similar elements. We can store only a fixed set of elements in a Java array.

Array in Java is index-based, the first element of the array is stored at the 0th index, 2nd element is stored on 1st index and so on.

Unlike C/C++, we can get the `length` of the array using the length member. In C/C++, we need to use the `sizeof` operator.

In Java, array is an object of a dynamically generated class. Java array inherits the Object class, and implements the Serializable as well as Cloneable interfaces. We can store primitive values or objects in an array in Java. Like C/C++, we can also create single dimentional or multidimentional arrays in Java.

Moreover, Java provides the feature of anonymous arrays which is not available in C/C++.

```java
datatype[] variablename = new datatype[size];
```
for eg. We want to store roll numbers:

```java
int[] rollnos = new int[5];
// Or
int[] rollnos = {51, 82, 13, 15, 16};
```
`int` represents the type of data, all the elements in the array should be of same data type, here it is int so the elements in the should be of int data type.

```java
int[] rollnow; //declaration of arrays
//rollnos get defined in stack
```

There are two types of Arrays:

- Single Dimensional Arrays
- Multidimentional Arrays  
  
Let's understand these in detail.

---

## One Dimensional Arrays
The general form of a one-dimensional array declaration is - 
```java
type var-name[];
//OR
type[] var-name;
```
An array declaration has two components: the type and the name. type declares the element type of the array. The element type determines the data type of each element that comprises the array. Like an array of integers, we can also create an array of other primitive data types like char, float, double, etc. or user-defined data types (objects of a class). Thus, the element type for the array determines what type of data the array will hold 
for eg.
```java
// both are valid declarations
int intArray[]; 
or int[] intArray; 

byte[] byteArray;
short[] shortsArray;
boolean[] booleanArray;
long[] longArray;
float[] floatArray;
double[] doubleArray;
char[] charArray;

// an array of references to objects of
// the class MyClass (a class created by
// user)
MyClass myClassArray[]; 

Object[]  ao,        // array of Object
Collection[] ca;  // array of Collection
                     // of unknown type
```
Although the first declaration above establishes the fact that intArray is an array variable, no actual array exists. It merely tells the compiler that this variable (intArray) will hold an array of the integer type. To link intArray with an actual, physical array of integers, you must allocate one using new and assign it to intArray.
### Instantiating an Array in Java
When an array is declared, only a reference of array is created. To actually create or give memory to array, you create an array like this:The general form of new as it applies to one-dimensional arrays appears as follows - 
```java
var-name = new type [size];
```
Here, type specifies the type of data being allocated, size specifies the number of elements in the array, and var-name is the name of array variable that is linked to the array. That is, to use new to allocate an array, you must specify the type and number of elements to allocate.
For Eg. 
```java
int intArray[];    //declaring array
intArray = new int[20];  // allocating memory to array
OR

int[] intArray = new int[20]; // combining both statements in one
```