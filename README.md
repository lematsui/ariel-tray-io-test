# Ariel Matsui-LeRoy Tray.io test 

Simple command-line program built using Node.js.

The program navigates an imaginary robotic hoover (much like a Roomba) through an equally imaginary room based on:

* room dimensions as X and Y coordinates, identifying the top right corner of the room rectangle. This room is divided
up in a grid based on these dimensions; a room that has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible 
hoover positions. The bottom left corner is the point of origin for our coordinate system, so as the room contains all 
coordinates its bottom left corner is defined by X: 0 and Y: 0.
* locations of patches of dirt, also defined by X and Y coordinates identifying the bottom left corner of those grid positions.
* an initial hoover position (X and Y coordinates like patches of dirt)
* driving instructions (as cardinal directions where e.g. N and E mean "go north" and "go east" respectively)

The room is rectangular, has no obstacles (except the room walls), no doors and all locations in the room are clean
(hoovering has no effect) except for the locations of the patches of dirt presented in the program input.

Placing the hoover on a patch of dirt ("hoovering") removes the patch of dirt so that patch is then clean for the remainder
of the program run. The hoover is always on - there is no need to enable it.

Driving into a wall has no effect (the robot skids in place).

## How to run

#### Install Node.js 

On Debian, Ubuntu, Linux Mint:

```console
$ sudo apt-get install nodejs npm
```

Other OS or alternative package manager:

If you are using a different package manager please follow this guide:
https://nodejs.org/en/download/package-manager/

If you do not have a package manager installed please download the appopriate installer from here:
https://nodejs.org/en/download/

#### Running the app

After installing Node.js, download this repository and unzip the zipfile. Then in your terminal navigate to the folder
you have just unzipped (should be called ariel-tray-io-test-master).

To run the app please run:

```console
$ node app.js
```
##### Changing the input

Program input is received in the input.txt file

Example:

```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

* the first line holds the room dimensions (X Y), separated by a single space (all coordinates are presented in this format)
* the second line holds the hoover position
* subsequent lines contain the zero or more positions of patches of dirt (one per line)
* the next line then always contains the driving instructions (at least one)

## Output

Program output is printed in the terminal.

* The first line of the program output displays the X and Y coordinates marking the position of the hoover after processing all commands.
* The second line of the program output displays the number of patches of dirt the robot cleaned up

Example (matching the input above):

```
1 3
1
```




