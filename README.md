# AdventureGameEngine-TweeGo
An adventure game engine based on Sugarcube 2 &amp; TweeGo

This project uses the excellent TweeGo-Sugarcube-2-Boilerplate project as a base (https://github.com/ObstacleCorpse/TweeGo-SugarCube-2-Boilerplate).

## Usage

Everything you need is in this project. Put your source files in the `src` directory. Name them with a `.tw` extension.

The source files are exactly the same as in Twine 2, except you must specify the name of the passage, and you may have more than one passage in a source file. For example:

example.tw
```
:: Start
This is the starting passage.
[[Play!|Intro]]

:: Intro
This is the introductory passage.
```

You can also stick to one passage per file, it's up to you. TweeGo will automatically compile `.js` and `.css` files in the `src` directory into the project.

Any images in the `src` directory will be converted into image passages, but **don't** do this with the Adventure Game Engine, instead put an images folder in the `bin` directory and link with HTML. The engine does not know how to reference image passages.

When you are ready to compile the game, double click on `compile.bat` or `compile_debug.bat` (this one shows you errors). Or on Linux, run the `compile.sh` script.

## All Roads Lead To Room

There is a 'room' passage which is responsible for handling navigation. When you need the player to be able to move around or interact with the environment, send them to the 'room' passage.

## Game Setup

You should avoid changing anything in the `src/engine/` directory unless you know what you are doing. Instead, use the `src/game/` directory. Specifically, `src/game/setup/GameSetup.tw` is a good place to initialize variables.

GameSetup is also where you should use the macros for creating rooms, setting up the player, creating items, etc...

If you want to make GameSetup neater, you can create multiple passages in `/src/game/setup` and link them from GameSetup with `<<include passagename>>`.

## ID's must be unique
This system uses ID's to identify everything from characters to rooms. The IDs must be unique, and they will remain the same throughout the life of the object. The name can change, but the ID will always remain the same as when you created it.

## Rooms

Make sure you are in the GameSetup passage or a passage included in GameSetup.

Initialize a room:
`<<room init "roomid">>`

Where roomid is the unique identifier for the room. By default the name of the room will match the roomid. If that isn't what you want, change the name of the room:

`<<room setname "roomid" "My New Room">>`

Once the room has been created, the system will expect three passages to exist in the game:

`roomid_title`

`roomid_description`

`roomid_image`

I recommend you put them in src/game/rooms and have one source file per roomid. For example:

roomid.tw
```
:: roomid_title
My New Room

:: roomid_image
<img src="img/blah.jpg" />

:: roomid_description
Placeholder Description
```

If you'd rather not use images, you can turn it off per room with:

`<<room image "roomid" false>>`

or back on with:

`<<room image "roomid" true>>`

Once you have two rooms, you'll want to make sure you can navigate between them. So we'll need to setup the exits:

`<<room addexit "target_roomid" "destination_roomid">>`

`<<room addexit "destination_roomid" "target_roomid">>`

You can remove exits with:

`<<room delexit "target_roomid" "destination_roomid">>`

Adding and removing exits can be done after game setup also from any passage. Using this system you could have a switch that reveals a secret passage or a trap that blocks off a corridor.

You can specify an image to use for navigation links. For best results the image should be 200 pixels wide, unless you want to edit style sheets.

`<<room setimage "roomid" "img/path.jpg">>`

If there is no image set, then the system defaults to text links.

Example Room Setup:

```
<<room init "bedroom">>
<<room setname "bedroom" "Bedroom">>

<<room init "hallway">>
<<room setname "hallway" "Hallway">>

<<room addexit "bedroom" "hallway">>
<<room addexit "hallway" "bedroom">>
```

## Player

There must be a starting room set for the player to be in when the game starts. Set it with:

`<<player setroom "roomid">>`

You can also change the player's name with:

`<<player setname "Jason">>`

There is a player_description passage in `src/game/characters/player/player_description.tw` which you can use to describe the player. The passage is linked by the player's name in the sidebar.

## Items

To add an item to your scene, you need to initialize it first:

`<<item init "itemid">>`

The item's name will match the itemid by default, you can set the name with:

`<<item setname "itemid" "My Item">>`

Every item must have a matching `itemid_examine` passage. You can put an item description in there, as well as any actions the player can take with the item.

Once the item has been created, you should place it somewhere. You can add it to the player's inventory at the start of the game with:

`<<pickup "itemid">>`

Or you can put it in a room with:

`<<room additem "roomid" "itemid">>`

Similarly you can remove an item from a room with:

`<<room delitem "roomid" "itemid">>`

If you don't know where an item is, you can forcefully move it somewhere without knowing its location with:

`<<room moveitem "roomid" "itemid">>`

In the above example, roomid is the room to move the item to. This can be helpful if the item is something players can pick up, because they could drop the item in a different room.

You can also specify an image to use in the item links. The image should be 200 pixels wide or you'll need to modify the stylesheet.

`<<item setimage "itemid" "img/path.jpg">>`

If no image is specified, the system defaults to text based links.

Here is an example item setup:

```
<<room init "bedroom">>
<<room setname "bedroom" "Bedroom">>

<<item init "laptop">>
<<item setname "laptop" "Laptop">>

<<room additem "bedroom" "laptop">>
```

## Money

In the `src/engine/money.tw` passage you can change the money unit from `$` to anything else.

To add money:

`<<money add x>>`

where x is the amount to add.

You can also subtract with:

`<<money sub x>>`

## Inventory

Full Disclosure: This is the only system I didn't write myself from scratch. I borrowed it (it was open source) and modified it slightly.

To pick up an item, you can use:

`<<pickup "itemid">>`

This will place the item in the player's inventory. If the item exists in the room the player is standing in, the item will also be deleted from that room. Literally as if the player picked it up.

If you want a player to drop something in their inventory:

`<<drop "itemid">>`

That will remove the item from the player's inventory and place it in the room the player is standing in.

If you want to check if the player has an item:

```
<<has "itemid">>
Do this if the player has this item
<<otherwise>>
Do this if the player doesn't have the item
<</has>>
```

## Characters

You can create a character with:

`<<character init "characterid">>`

Again the default character name matches the characterid, if that isn't what you want then you can set the name with:

`<<character setname "characterid" "Joe Bloggs">>`

You can move the character around with:

`<<character move "characterid" "roomid">>`

The engine will expect a passage to exist named:

`characterid_examine`

You can put the description of the character here, including any actions you can perform.

The engine utilizes a key based conversation system. To set a conversation key on a character:

`<<character conversation "characterid" "conversationkey">>`

Once the key is set, the game will expect a passage to exist:

`characterid_conversationkey_conversation`

For example:

`<<character conversation "receptionist" "intro">>`

Then the passage will be:

`receptionist_intro_conversation`

In the character examine passage (or any passage really) you can create a 'talk' link which will point to the current conversation passage referenced by the key (at the time the passage loads):

`<<character talk "characterid">>`

You can also use image links to show the characters. Again the images must be 200 pixels wide or you'll have to edit the stylesheet:

`<<character setimage "characterid" "img/path.jpg">>`

If the image is not set, the system defaults to text based links.

## Energy

There is an energy system enabled by default, but it's entirely optional.

`<<energy setmax x>>`

Sets the maximum energy to x number.

`<<energy add x>>`

Adds x to energy

`<<energy sub x>>`

Subtracts x from energy

`<<energy set x>>`

Sets the energy to x

`<<energy setcost x>>`

Sets the energy cost for moving between rooms. Set it to 0 if you want to handle energy manually.

`<<energy setday x>>`

Sets the current day to x number.

`<<energy setcollapse "roomid">>`

When the player runs out of energy, all exits will be temporarily unavailable except for one (this should be where the player goes to sleep). Set which room this is here.

`<<sleep>>`

Sets energy to the max value, increments day by 1. Usually you want to create a sleep action in the bedroom or wherever and link it to a passage such as "You have a restful sleep" and then add this <<sleep>> to that passage.

## Images

You can add images easily to a passage with:

`<<image add>>img/path.jpg<</image>>`

You can also replace an image with:

`<<image replace>>img/path.jpg<</image>>`

That will replace all images in the passage that were added with the `<<image add>>` macro.

If you don't want to replace all images at once, when you add the images you have to give them each a unique id:

`<<image add "viewport">>img/viewport.jpg<</image>>`

`<<image add "character">>img/character.jpg<</image>>`

Then you can target each one for a replace with:

`<<image replace "viewport">>img/newviewport.jpg<</image>>`

## Colors

There are several helper color macros which you can use:

```
<<red>>My red text<</red>>
<<blue>>My blue text<</blue>>
<<pink>>My pink text<</pink>>
<<orange>>My orange text<</orange>>
<<black>>My black text<</black>>
<<white>>My white text<</white>>
<<brown>>My brown text<</brown>>
<<green>>My green text<</green>>
<<purple>>My purple text<</purple>>
```

You can modify the actual colors produced by editing the stylesheet.

## SugarCube 2

In addition to all of the above, the normal SugarCube functionality remains. See more at: http://www.motoslave.net/sugarcube/2/

I recommend you make liberal use of the `\` to eliminate whitespace from passages. Just place it after anything in the passage that would be invisible to the user (such as code).
