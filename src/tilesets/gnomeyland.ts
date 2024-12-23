// tilesets/gnomeyland.ts
import { TileSet } from '../types';
import { convertTextToTileSet } from '../utils/tilesetConverter';

const GNOMEYLAND_TEXT = `
default attributes fill="none" stroke="black" stroke-width="3"
text font-size="20pt" dy="15px"
label font-size="20pt" dy="5px"
glow stroke="white" stroke-width="5pt"

# Colors
# object shadow: #fecb86

trail path attributes stroke="#e3bea3" stroke-width="6" fill="none"
river path attributes transform="translate(20,10)" stroke="#6ebae7" stroke-width="8" fill="none" opacity="0.7"
canyon path attributes transform="translate(20,10)" stroke="black" stroke-width="24" fill="none" opacity="0.2"

# paper white
white attributes fill="#f7f7f7"
shadow attributes fill="black" opacity="0.2"

# agriculture
light-soil attributes fill="#e5de47"
soil attributes fill="#b0b446"
dark-soil attributes fill="#c97457"

# coastlines, deserts
rock attributes fill="#b0856a"
dust attributes fill="#ede787"
sand attributes fill="#e3bea3"
water attributes fill="#6ebae7"
ocean attributes fill="#1c86ee"


# wetlands
light-grey attributes fill="#dcddbe"
grey attributes fill="#afbc9e"
dark-grey attributes fill="#859d70"
blue-green attributes fill="#6f9487"
poisoned attributes fill="#af84a5"

# suitable for forests
light-green attributes fill="#b7c18c"
green attributes fill="#77904c"
dark-green attributes fill="#2d501a"

# invisible stuff that we need to create correct PDF files
dry attributes fill="black" opacity="0.1"
port attributes opacity="0"

# debug
red attributes fill="red" opacity="0.8" transform="scale(0.5)"

# Buildings
<g id="keep_base"><rect fill="white" height="58" width="49" y="-24" x="-25"/><path style="fill:#fecb86" d="M 5,3 C 2,20 -6,29 -13,34 l 36,0 0,-58 -20,0 c 3,8 4,18 2,27 z"/><path fill="none" stroke="black" stroke-width="5" d="m -25,-24 49,0 0,58 -49,0 z"/><path d="M -12,-6 c 0,-8 -6,-8 -6,0 c 2,0 3,0 6,0 z" stroke="black" stroke-width="2"/><path d="M 15,-6 c 0,-8 -6,-8 -6,0 c 2,0 3,0 6,0 z" stroke="black" stroke-width="2"/><rect fill="white" height="19" width="65" y="-43" x="-34"/><path fill="#fecb86" d="m 26,-35 -6,0 0,-6 -6,0 0,6 -6,0 0,-6 -6,0 0,6 -3,0 c 2,3 3,7 5,12 l 28,0 0,-18 -6,0 0,6 0,0 z"/><path d="m -1,8 c -6,0 -11,11 -11,25 l 22,0 C 10,19 5,8 -1,8 z" stroke="black" stroke-width="2"/><path stroke="black" stroke-width="5" d="m -19,34 76,0"/><path fill="none" stroke="black" stroke-width="5" d="m 32,-24 0,-18 -6,0 0,0 0,6 -6,0 0,-6 -6,0 0,6 -6,0 0,-6 -6,0 0,6 -6,0 0,-6 -6,0 0,6 -6,0 0,-6 -6,0 0,6 -6,0 0,-6 -6,0 0,18 z"/></g>

<g id="keep"><use xlink:href="#keep_base" transform="scale(0.6)"/></g>
<g id="tower"><use xlink:href="#hill_base" transform="scale(0.9) translate(0,30)"/><use xlink:href="#keep_base" transform="scale(0.5) translate(0,-10)"/></g>
<g id="castle"><rect height="16.1" width="38.0" y="1.2" x="-20.0" fill="white"/><path fill="#fecb86" d="m -0.6,17.2 22.6,0.1 0,-18.1 -19.0,0 C 4.5,4.8 -0.3,9.6 -0.6,17.2 z"/><path d="m -20.0,-0.8 42.4,0 0,18.1 -42.4,0 z" fill="none" stroke="black" stroke-width="2.4"/><rect height="8.5" width="50.2" y="-6.5" x="-24.2" fill="white"/><path d="m 13.8,-4.1 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -1.4,0 C 1.9,-2.7 3.1,-1.4 3.4,1.6 l 22.9,0 0,-8.6 -12.4,0 z" fill="#fecb86"/><path d="m 26.2,2.1 0,-8.6 -12.4,0 0,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -12.4,0 0,8.6 z" fill="none" stroke="black" stroke-width="2.4"/><rect fill="white" x="-39.0" y="-10.3" width="23.3" height="27.6"/><path d="m -24.7,2.5 c -1.4,8.1 -5.2,12.4 -8.6,14.8 l 17.1,0 0,-27.6 -9.5,0 c 1.4,3.8 1.9,8.6 1.0,12.9 z" fill="#fecb86"/><path fill="none" stroke="black" stroke-width="2.4" d="m -39.0,-10.3 23.3,0 0,27.6 -23.3,0 z"/><path stroke="black" stroke-width="1.0" d="m -32.8,-1.7 c 0,-3.8 -2.9,-3.8 -2.9,0 1.0,0 1.4,0 2.9,0 z"/><path stroke="black" stroke-width="1.0" d="m -20.0,-1.7 c 0,-3.8 -2.9,-3.8 -2.9,0 1.0,0 1.4,0 2.9,0 z"/><rect fill="white" x="-43.3" y="-19.4" width="31.0" height="9.0"/><path fill="#fecb86" d="m -14.7,-15.5 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -1.4,0 c 1.0,1.4 1.4,3.3 2.4,5.7 l 13.3,0 0,-8.6 -2.9,0 0,2.9 0,0 z"/><path d="m 1.0,4.9 c -2.9,0 -5.2,5.2 -5.2,11.9 l 10.5,0 c 0,-6.7 -2.4,-11.9 -5.2,-11.9 z" stroke="black" stroke-width="1.0"/><path stroke="black" stroke-width="2.4" d="m 18.1,17.3 36.2,0"/><path fill="none" stroke="black" stroke-width="2.4" d="m -11.9,-10.3 0,-8.6 -2.9,0 0,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,8.6 z"/><rect fill="white" height="27.6" width="23.3" y="-10.3" x="18.1"/><path fill="#fecb86" d="M 32.4,2.5 C 31.0,10.6 27.2,14.9 23.8,17.3 l 17.1,0 0,-27.6 -9.5,0 c 1.4,3.8 1.9,8.6 1.0,12.9 z"/><path fill="none" stroke="black" stroke-width="2.4" d="m 18.1,-10.3 23.3,0 0,27.6 -23.3,0 z"/><path stroke="black" stroke-width="1.0" d="m 24.3,-1.7 c 0,-3.8 -2.9,-3.8 -2.9,0 1.0,0 1.4,0 2.9,0 z"/><path stroke="black" stroke-width="1.0" d="m 37.2,-1.7 c 0,-3.8 -2.9,-3.8 -2.9,0 1.0,0 1.4,0 2.9,0 z"/><rect fill="white" height="9.0" width="31.0" y="-19.4" x="13.8"/><path fill="#fecb86" d="m 42.4,-15.5 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -1.4,0 c 1.0,1.4 1.4,3.3 2.4,5.7 l 13.3,0 0,-8.6 -2.9,0 0,2.9 0,0 z"/><path fill="none" stroke="black" stroke-width="2.4" d="m 45.3,-10.3 0,-8.6 -2.9,0 0,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,2.9 -2.9,0 0,-2.9 -2.9,0 0,8.6 z"/></g>

# Settlement Library
<g id="thorp_base"> <circle fill="#ffd700" stroke="black" stroke-width="7" cx="0" cy="0" r="15"/></g>
<g id="house"><rect fill="white" x="-15" y="-50" width="30" height="50"/><path fill="#fecb86" d="M-10,0 C10,-20 10,-40 2,-50 h15 v50 z"/><path stroke="black" stroke-width="7" d="M-15,0 v-50 m-15,0 h60 m-15,0 v50 M0,0 v-37"/></g>
<g id="hut"><rect fill="white" x="-15" y="-40" width="30" height="40"/><path fill="#fecb86" d="M-10,0 C10,-20 10,-40 2,-40 h15 v40 z"/><path stroke="black" stroke-width="7" d="M-15,0 v-40 m-15,0 h60 m-15,0 v40 M0,0 v-27"/></g>
<path id="flag" fill="white" stroke="black" stroke-width="7" d="M0,-50 l-3,-30 c-1,-10 8,-10 6,0 z"/>
<path id="arrow" fill="black" stroke="black" stroke-width="3" d="M10,0 h10 v2 l4,-2 l-4,-2 v2 "/>
<g id="star_base"><circle cx="0" cy="0" r="10"/><use xlink:href="#arrow"/><use xlink:href="#arrow" transform="rotate(45)"/><use xlink:href="#arrow" transform="rotate(90)"/><use xlink:href="#arrow" transform="rotate(135)"/><use xlink:href="#arrow" transform="rotate(180)"/><use xlink:href="#arrow" transform="rotate(225)"/><use xlink:href="#arrow" transform="rotate(270)"/><use xlink:href="#arrow" transform="rotate(315)"/></g>

# Settlement Icons

<g id="thorp"> <use xlink:href="#thorp_base" transform="scale(0.7)"/> </g>
<g id="village"><g transform="scale(0.7)"><g transform="translate(0,40)"><use xlink:href="#house"/><use xlink:href="#thorp_base"/><use xlink:href="#flag"/></g></g></g>
<g id="town"><g transform="scale(0.7)"><g transform="translate(-10,40)"><use xlink:href="#house"/><use xlink:href="#flag"/><use xlink:href="#thorp_base"/><use xlink:href="#hut" transform="translate(43,15)"/><path stroke="black" stroke-width="7" d="M0,15 h70"/></g></g></g>
<g id="large-town"><g transform="scale(0.7)"><g transform="translate(0,45)"><use xlink:href="#house" transform="translate(-40,0)"/><use xlink:href="#flag" transform="translate(-40,0)"/><use xlink:href="#house" transform="translate(40,0)"/><use xlink:href="#flag" transform="translate(40,0)"/><use xlink:href="#thorp_base" transform="translate(0,-15)"/><path stroke="black" stroke-width="7" d="M-70,0 h140"/></g></g></g>
<g id="city"><g transform="scale(0.7)"><g transform="translate(0,60)"><use xlink:href="#house" transform="translate(-40,0)"/><use xlink:href="#flag" transform="translate(-40,0)"/><use xlink:href="#house" transform="translate(40,0)"/><use xlink:href="#flag" transform="translate(40,0)"/><use xlink:href="#house" transform="translate(0,-15)"/><use xlink:href="#flag" transform="translate(0,-15)"/><use xlink:href="#thorp_base" transform="translate(0,-15)"/><path stroke="black" stroke-width="7" d="M-70,0 h140"/></g></g></g>
<g id="shrine"><path transform="scale(0.7)" fill="none" stroke="black" stroke-width="7" d="M-20,20 v-40 h40 v40 M-20,-20 v-10 M20,-20 v-10 M-30,-30 h60"/></g>
<g id="law" transform="scale(0.7) translate(-20,20)"><use xlink:href="#arrow" transform="rotate(270) scale(3) translate(-5,0)"/><use xlink:href="#thorp_base"/><use xlink:href="#hut" transform="translate(40,15)"/><path stroke="black" stroke-width="7" d="M0,15 h70"/></g>
<g id="chaos" transform="scale(0.7) translate(-20,40)"><use xlink:href="#star_base" transform="scale(1.4) translate(0,-40)"/><use xlink:href="#thorp_base"/><use xlink:href="#hut" transform="translate(40,15)"/><path stroke="black" stroke-width="7" d="M0,15 h70"/></g>

# Deciduous Tree
<g id="tree_base"><path d="m 28,-2 c 0,20 -12,31 -27,31 -15,0 -27,-11 -27,-31 0,-20 12,-43 27,-43 15,0 27,22 27,43 z" fill="white"/><path d="m 6,-43 c 0,0 0,16 -4,19 -3,4 -4,15 -1,18 2,3 8,8 5,11 -3,3 -6,5 -5,9 0,4 8,6 -4,8 -11,2 -11,2 -11,2 0,0 13,9 26,2 14,-6 16,-29 16,-29 0,0 4,-21 -22,-41 z" fill="#39b54a"/><path d="m 28,-2 c 0,20 -12,31 -27,31 -15,0 -27,-11 -27,-31 0,-20 12,-43 27,-43 15,0 27,22 27,43 z" stroke="black" fill="none" stroke-width="6"/><rect x="-4" y="30" width="11" height="20" fill="#39b54a" stroke="black" stroke-width="6"/><line x1="-4" y1="50" x2="29" y2="50" fill="#39b54a" stroke="black" stroke-width="6"/></g>
<g id="tree"><use xlink:href="#tree_base" transform="scale(0.6)"/></g>
<g id="trees"><use xlink:href="#tree_base" transform="scale(0.6) translate(-40,-10)"/><use xlink:href="#tree_base" transform="scale(0.7) translate(30,-15)"/><use xlink:href="#tree_base" transform="scale(0.55) translate(0,10)"/></g>
<g id="forest"><use xlink:href="#tree_base" transform="scale(0.5) translate(-20,-40)"/><use xlink:href="#tree_base" transform="scale(0.5) translate(-60,-20)"/><use xlink:href="#tree_base" transform="scale(0.5) translate(40,-40)"/><use xlink:href="#tree_base" transform="scale(0.5) translate(80,-30)"/><use xlink:href="#tree_base" transform="scale(0.5) translate(-40,10)"/><use xlink:href="#tree_base" transform="scale(0.5) translate(-100,0)"/><use xlink:href="#tree_base" transform="scale(0.5) translate(5,-15)"/><use xlink:href="#tree_base" transform="scale(0.5) translate(50,-10)"/><use xlink:href="#tree_base" transform="scale(0.5) translate(-60,30)"/><use xlink:href="#tree_base" transform="scale(0.5) translate(30,20)"/><use xlink:href="#tree_base" transform="scale(0.5) translate(-20,35)"/><use xlink:href="#tree_base" transform="scale(0.5) translate(95,25)"/></g>
<g id="fields_base"> <path fill="none" stroke="black" stroke-width="2" d="M-40,0 L0,30 L40,0 L0,-30 L-40,0 M-30,-7.5 L10,22.5 M-20,-15 L20,15 M-10,-22.5 L30,7.5 M-30,7.5 L10,-22.5 M-20,15 L20,-15 M-10,22.5 L30,-7.5"/> </g> <g id="fields"><use xlink:href="#fields_base" transform="scale(0.7)"/></g>

# Bush
<g id="bush_base"><path fill="white" d="m 15,-13 c 1,-2 2,-4 2,-7 0,-9 -8,-17 -18,-17 -10,0 -18,8 -18,17 0,2 1,4 1,6 -8,4 -13,11 -13,20 0,13 13,24 29,24 16,0 29,-11 29,-24 0,-8 -5,-15 -12,-19 z"/><path fill="#39b54a" d="m -16,26 c 0,0 16,-5 12,-21 -4,-17 -2,-17 0,-17 3,0 12,-8 12,-12 0,-5 -4,-2 -5,-5 0,-4 5,-5 9,3 4,8 5,6 1,16 7,4 8,-5 13,19 C 32,30 -8,38 -16,26 z"/><path fill="none" stroke="black" stroke-width="6" d="m 15,-13 c 1,-2 2,-4 2,-7 0,-9 -8,-17 -18,-17 -10,0 -18,8 -18,17 0,2 1,4 1,6 -8,4 -13,11 -13,20 0,13 13,24 29,24 16,0 29,-11 29,-24 0,-8 -5,-15 -12,-19 z"/><path d="m 41,34 c -16,0 -31,0 -47,0 0,-1 0,-2 0,-4" fill="none" stroke="black" stroke-width="6"/></g>
<g id="bush"><use xlink:href="#bush_base" transform="scale(0.6)"/></g>
<g id="bushes"><use xlink:href="#bush_base" transform="scale(0.5) translate(-30,0)"/><use xlink:href="#bush_base" transform="scale(0.5) translate(60,-10)"/><use xlink:href="#bush_base" transform="scale(0.5) translate(0,30)"/></g>
<g id="brushland"><use xlink:href="#bush_base" transform="scale(0.45) translate(0,-70)"/><use xlink:href="#bush_base" transform="scale(0.5) translate(-50,-50)"/><use xlink:href="#bush_base" transform="scale(0.5) translate(50,-50)"/><use xlink:href="#bush_base" transform="scale(0.5) translate(-20,-20)"/><use xlink:href="#bush_base" transform="scale(0.5) translate(-90,-40)"/><use xlink:href="#bush_base" transform="scale(0.55) translate(90,-20)"/><use xlink:href="#bush_base" transform="scale(0.55) translate(20,0)"/><use xlink:href="#bush_base" transform="scale(0.5) translate(-65,0)"/><use xlink:href="#bush_base" transform="scale(0.5) translate(80,0)"/><use xlink:href="#bush_base" transform="scale(0.45) translate(-120,35)"/><use xlink:href="#bush_base" transform="scale(0.5) translate(-30,40)"/><use xlink:href="#bush_base" transform="scale(0.5) translate(50,40)"/><use xlink:href="#bush_base" transform="scale(0.45) translate(110,40)"/><use xlink:href="#bush_base" transform="scale(0.45) translate(20,70)"/></g>

# Coniferous forest
<g id="fir_base"><path fill="white" d="m -16,-27 c 0,0 -11,-4 -12,15 -1,19 -9,1 -10,13 -1,13 -1,26 29,30 30,4 37,-15 37,-15 0,0 9,-13 -1,-18 -10,-5 4,-13 -12,-15 -17,-3 11,-14 -9,-14 -20,0 4,-15 -9,-15 -13,0 -13,19 -13,19 z"/><path fill="#39b54a" d="M 30,-2 C 20,-7 34,-15 18,-17 1,-20 28,-31 9,-31 c -5,0 -7,-1 -8,-2 0,0 -25,50 0,64 C 13,38 31,16 31,16 c 0,0 9,-13 -1,-18 z"/><path fill="none" stroke="black" stroke-width="6" d="m -16,-27 c 0,0 -11,-4 -12,15 -1,19 -9,1 -10,13 -1,13 -1,26 29,30 30,4 37,-15 37,-15 0,0 9,-13 -1,-18 -10,-5 4,-13 -12,-15 -17,-3 11,-14 -9,-14 -20,0 4,-15 -9,-15 -13,0 -13,19 -13,19 z"/><path fill="none" stroke="black" stroke-width="6" d="m -7,36 42,0"/></g>
<g id="fir"><use xlink:href="#fir_base" transform="scale(0.6)"/></g>
<g id="firs"><use xlink:href="#fir_base" transform="scale(0.6) translate(-40,-10)"/><use xlink:href="#fir_base" transform="scale(0.7) translate(30,-15)"/><use xlink:href="#fir_base" transform="scale(0.55) translate(0,10)"/></g>
<g id="fir-forest"><use xlink:href="#fir_base" transform="scale(0.5) translate(-20,-40)"/><use xlink:href="#fir_base" transform="scale(0.5) translate(-60,-20)"/><use xlink:href="#fir_base" transform="scale(0.5) translate(40,-40)"/><use xlink:href="#fir_base" transform="scale(0.5) translate(80,-30)"/><use xlink:href="#fir_base" transform="scale(0.5) translate(-40,10)"/><use xlink:href="#fir_base" transform="scale(0.5) translate(-100,0)"/><use xlink:href="#fir_base" transform="scale(0.5) translate(5,-15)"/><use xlink:href="#fir_base" transform="scale(0.5) translate(50,-10)"/><use xlink:href="#fir_base" transform="scale(0.5) translate(-60,30)"/><use xlink:href="#fir_base" transform="scale(0.5) translate(30,20)"/><use xlink:href="#fir_base" transform="scale(0.5) translate(-20,35)"/><use xlink:href="#fir_base" transform="scale(0.5) translate(95,25)"/></g>

# hill_defs & Mountains
<g id="hill_base"><path fill="white" d="M 49,17 C -3,-103 -46,16 -46,16"/><path fill="#fecb86" d="m -8,17 c 0,0 50,11 55,-2 C 52,6 8,-46 8,-33 8,10 -8,17 -8,17 z"/><path fill="none" stroke="black" stroke-width="4" d="M 49,17 C -3,-103 -46,16 -46,16"/></g>
<g id="hill"><use xlink:href="#hill_base"/></g>
<g id="mountain_base"><path fill="white" d="m -48,16 c 0,0 32,-18 44,-42 C 7,-51 49,15 49,15"/> <path style="fill:#fecb86" d="m -1,-32 c 0,0 14,43 -4,47 -18,5 54,0 54,0 0,0 -35,-56 -49,-47 z"/> <path fill="none" stroke="black" stroke-width="3" d="m -48,16 c 0,0 32,-18 44,-42 C 7,-51 49,15 49,15"/></g>
<g id="forest-hill"><use xlink:href="#hill_base"/><use xlink:href="#tree_base" transform="scale(0.4) translate(65,-60)"/></g>
<g id="fir-hill"><use xlink:href="#hill_base"/><use xlink:href="#fir_base" transform="scale(0.4) translate(65,-60)"/></g>
<g id="mountain"><use xlink:href="#mountain_base"/></g>
<g id="forest-mountain"><use xlink:href="#mountain_base"/><use xlink:href="#tree_base" transform="scale(0.4) translate(60,-60)"/></g>
<g id="fir-mountain"><use xlink:href="#mountain_base"/><use xlink:href="#fir_base" transform="scale(0.4) translate(60,-60)"/></g>
<g id="peak_base"><path fill="white" d="m 37,30 c 0,0 -37,-130 -47,-82 -10,48 -39,83 -39,83"/><path fill="#fecb86" d="m -8,-62 c 0,0 12,83 -4,93 -16,10 48,0 48,0 0,0 -31,-110 -44,-93 z"/><path fill="none" stroke="black" stroke-width="4" d="m 37,30 c 0,0 -37,-130 -47,-82 -10,48 -39,83 -39,83"/></g>
<g id="mountains"><use xlink:href="#mountain_base" transform="scale(0.7) translate(-45,0)"/><use xlink:href="#peak_base" transform="scale(0.7)"/><use xlink:href="#mountain_base" transform="scale(0.7) translate(40,25)"/></g>
<g id="forest-mountains"><use xlink:href="#mountain_base" transform="scale(0.7) translate(-45,0)"/><use xlink:href="#peak_base" transform="scale(0.7)"/><use xlink:href="#mountain_base" transform="scale(0.7) translate(40,25)"/><use xlink:href="#tree_base" transform="scale(0.3) translate(-120,-40)"/><use xlink:href="#tree_base" transform="scale(0.3) translate(10,-20)"/><use xlink:href="#tree_base" transform="scale(0.3) translate(150,10)"/></g>
<g id="fir-mountains"><use xlink:href="#mountain_base" transform="scale(0.7) translate(-45,0)"/><use xlink:href="#peak_base" transform="scale(0.7)"/><use xlink:href="#mountain_base" transform="scale(0.7) translate(40,25)"/><use xlink:href="#fir_base" transform="scale(0.3) translate(-120,-40)"/><use xlink:href="#fir_base" transform="scale(0.3) translate(10,-20)"/><use xlink:href="#fir_base" transform="scale(0.3) translate(150,10)"/></g>

# Simple things to layer on top
<g id="desert_base"> <path stroke="black" stroke-width="4" d="M-60,10 v4 M-50,-30 v4 M-40,-0 v4 M-30,40 v4 M-20,-20 v4 M-10,10 v4 M5,-30 v4 M10,20 v4 M20,0 v4 M30,30 v4 M30,-40 v4 M40,10 v4 M60,-10 v4"/> </g> <g id="desert"><use xlink:href="#desert_base" transform="scale(0.7)"/></g>
<g id="grass"><path stroke="black" stroke-width="6" d="m -21,-24 c -2,7 1,11 4,17"/><path stroke="black" stroke-width="6" d="m -10,-32 c 0,0 -1,15 3,23"/><path stroke="black" stroke-width="6" d="m 3,-20 c 0,0 0,11 -3,13"/><path stroke="black" stroke-width="6" d="m 25,1 c 0,10 7,11 7,21"/><path stroke="black" stroke-width="6" d="m 36,4 c 0,0 6,4 4,15"/><path stroke="black" stroke-width="6" d="m 49,7 c 0,0 -1,11 -1,12"/><path stroke="black" stroke-width="6" d="m -44,10 c 0,7 4,10 6,17"/><path stroke="black" stroke-width="6" d="m -33,5 c -1,7 1,13 3,19"/><path stroke="black" stroke-width="6" d="m -24,14 c 0,0 3,7 3,11"/></g>
<g id="marsh"><path stroke="black" stroke-width="6" d="m -44,6 c 0,0 8,4 9,9"/><path stroke="black" stroke-width="6" d="m -32,1 c 0,0 6,9 6,12"/><path stroke="black" stroke-width="6" d="m -15,-1 c 0,0 -4,10 -3,13"/><path stroke="black" stroke-width="6" d="m -4,5 c 0,0 -7,7 -7,9"/><line stroke="black" stroke-width="6" y2="22" x2="-9" y1="22" x1="-36"/><path stroke="black" stroke-width="6" d="m 2,-16 c 0,0 7,5 7,9"/><path stroke="black" stroke-width="6" d="m 10,-26 c 0,0 7,12 7,16"/><line stroke="black" stroke-width="6" y2="-10" x2="25" y1="-32" x1="25"/><path stroke="black" stroke-width="6" d="m 40,-24 c 0,0 -6,11 -5,16"/><line stroke="black" stroke-width="6" y2="-2" x2="34" y1="-2" x1="11"/></g>
<g id="swamp"><path d="m -24,12 c 0,0 7,3 7,7" stroke="black" stroke-width="5"/><path d="m -14,8 c 0,0 4,7 4,9" stroke="black" stroke-width="5"/><path d="m 0,7 c 0,0 -4,5 -3,9" stroke="black" stroke-width="5"/><path d="m 9,11 c 0,0 -6,6 -6,8" stroke="black" stroke-width="5"/><path stroke="black" stroke-width="5" d="m 12,38 c 0,0 -7,-3 -7,-7"/><path stroke="black" stroke-width="5" d="m 3,43 c 0,0 -4,-7 -4,-9"/><path stroke="black" stroke-width="5" d="m -11,44 c 0,0 4,-6 3,-10"/><path stroke="black" stroke-width="5" d="m -20,40 c 0,0 6,-6 6,-8"/><line x1="-17" y1="25" x2="4" y2="25" stroke="black" stroke-width="5"/><path d="m -4,-34 c 0,0 7,3 7,7" stroke="black" stroke-width="5"/><path d="m 6,-39 c 0,0 4,7 4,9" stroke="black" stroke-width="5"/><path d="m 19,-40 c 0,0 -3,5 -2,9" stroke="black" stroke-width="5"/><path d="m 28,-36 c 0,0 -6,6 -6,8" stroke="black" stroke-width="5"/><path stroke="black" stroke-width="5" d="m 32,-9 c 0,0 -7,-3 -7,-7"/><path stroke="black" stroke-width="5" d="m 22,-4 c 0,0 -4,-7 -4,-9"/><path stroke="black" stroke-width="5" d="m 8,-3 c 0,0 5,-5 3,-10"/><path stroke="black" stroke-width="5" d="m -1,-7 c 0,0 6,-6 6,-8"/><line x1="2" y1="-22" x2="24" y2="-22" stroke="black" stroke-width="5"/></g>
<g id="swamp2"><g transform="translate(-50,-10)"><path d="m -24,12 c 0,0 7,3 7,7" stroke="black" stroke-width="5"/><path d="m -14,8 c 0,0 4,7 4,9" stroke="black" stroke-width="5"/><path d="m 0,7 c 0,0 -4,5 -3,9" stroke="black" stroke-width="5"/><path d="m 9,11 c 0,0 -6,6 -6,8" stroke="black" stroke-width="5"/><path stroke="black" stroke-width="5" d="m 12,38 c 0,0 -7,-3 -7,-7"/><path stroke="black" stroke-width="5" d="m 3,43 c 0,0 -4,-7 -4,-9"/><path stroke="black" stroke-width="5" d="m -11,44 c 0,0 4,-6 3,-10"/><path stroke="black" stroke-width="5" d="m -20,40 c 0,0 6,-6 6,-8"/><line x1="-17" y1="25" x2="4" y2="25" stroke="black" stroke-width="5"/></g><g transform="translate(30,0)"><path d="m -4,-34 c 0,0 7,3 7,7" stroke="black" stroke-width="5"/><path d="m 6,-39 c 0,0 4,7 4,9" stroke="black" stroke-width="5"/><path d="m 19,-40 c 0,0 -3,5 -2,9" stroke="black" stroke-width="5"/><path d="m 28,-36 c 0,0 -6,6 -6,8" stroke="black" stroke-width="5"/><path stroke="black" stroke-width="5" d="m 32,-9 c 0,0 -7,-3 -7,-7"/><path stroke="black" stroke-width="5" d="m 22,-4 c 0,0 -4,-7 -4,-9"/><path stroke="black" stroke-width="5" d="m 8,-3 c 0,0 5,-5 3,-10"/><path stroke="black" stroke-width="5" d="m -1,-7 c 0,0 6,-6 6,-8"/><line x1="2" y1="-22" x2="24" y2="-22" stroke="black" stroke-width="5"/></g></g>

# Zone diagonal pattern
<g id="zone"><defs><pattern id="striped" width="10" height="10" patternTransform="rotate(-30)" patternUnits="userSpaceOnUse"> <rect x="0" y="0" width="10" height="2" fill="red"/> </pattern> </defs> <polygon opacity="0.6" fill="url(#striped)" points="-100.0,0.0 -50.0,86.6 50.0,86.6 100.0,0.0 50.0,-86.6 -50.0,-86.6"/> </g> <g id="zone"><use xlink:href="#zone" transform="scale(0.7)"/></g>

# cliffs for hexmaps
<g id="cliff0_base"> <path d="M-90,-17.3 l-8.7,-5 M-80,-34.6 l-8.7,-5 M-70,-52 l-8.7,-5 M-60,-69.3 l-8.7,-5" stroke="black" stroke-width="5px" fill="none"/> </g> <g id="cliff0"><use xlink:href="#cliff0_base" transform="rotate(0)"/></g>

<g id="cliff1_base"> <path d="M-90,-17.3 l-8.7,-5 M-80,-34.6 l-8.7,-5 M-70,-52 l-8.7,-5 M-60,-69.3 l-8.7,-5" stroke="black" stroke-width="5px" fill="none"/> </g> <g id="cliff1"><use xlink:href="#cliff1_base" transform="rotate(60)"/></g>

<g id="cliff2_base"> <path d="M-90,-17.3 l-8.7,-5 M-80,-34.6 l-8.7,-5 M-70,-52 l-8.7,-5 M-60,-69.3 l-8.7,-5" stroke="black" stroke-width="5px" fill="none"/> </g> <g id="cliff2"><use xlink:href="#cliff2_base" transform="rotate(120)"/></g>

<g id="cliff3_base"> <path d="M-90,-17.3 l-8.7,-5 M-80,-34.6 l-8.7,-5 M-70,-52 l-8.7,-5 M-60,-69.3 l-8.7,-5" stroke="black" stroke-width="5px" fill="none"/> </g> <g id="cliff3"><use xlink:href="#cliff3_base" transform="rotate(180)"/></g>

<g id="cliff4_base"> <path d="M-90,-17.3 l-8.7,-5 M-80,-34.6 l-8.7,-5 M-70,-52 l-8.7,-5 M-60,-69.3 l-8.7,-5" stroke="black" stroke-width="5px" fill="none"/> </g> <g id="cliff4"><use xlink:href="#cliff4_base" transform="rotate(240)"/></g>

<g id="cliff5_base"> <path d="M-90,-17.3 l-8.7,-5 M-80,-34.6 l-8.7,-5 M-70,-52 l-8.7,-5 M-60,-69.3 l-8.7,-5" stroke="black" stroke-width="5px" fill="none"/> </g> <g id="cliff5"><use xlink:href="#cliff5_base" transform="rotate(300)"/></g>

# lakes
<g id="lake_base"><ellipse fill="#6ebae7" stroke="black" stroke-width="3" cx="0" cy="0" rx="45" ry="30"/></g>
<g id="lake"><use xlink:href="#lake_base" transform="scale(0.7)"/></g>
`;

export const GNOMEYLAND_TILESET = convertTextToTileSet(GNOMEYLAND_TEXT, {
    name: "Gnomeyland",
    description: "Basic terrain mapping, landmarks, and hazards",
    author: "Original Text Mapper / Obsidian Port",
    license: "GNU Affero General Public License, Version 3"
});
