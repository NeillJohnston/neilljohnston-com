# Creating this site

Nearing the end of my junior year in college, I still hadn't finished a side-project that I felt comfortable calling "significant." All the things I wrote were either snippets of code, toy projects, or incomplete. In the interest of changing that, I decided that I would finally make my own website, and make it as personalized as I could.

## Programming with trust issues

One of the biggest reasons I had such trouble sticking with projects was because I restarted constantly. It's really easy to get into the rhythm of writing massive amounts of code when you can fit the entire project in your head, but once you forget anything . So I would start, write for a day or two, then come back disgusted at what I had written because I had forgotten why I wrote it in the first place. Comments wouldn't fix this unless I wanted to comment every line (which I didn't).

As far as I know, this is a very common problem among programmers, and I felt like I had it in an extreme way. _I simply could not trust my past self to write anything._ That realization hit like a bus - once I realized that this was a core part of the problem, I could start taking steps to fix it (fun fact: this is my third time starting this project).

### Testing

One easy way to be able to trust my old code was to make sure it was thoroughly.

The first thing I did for the project was shop around for a testing framework. I never found my Goldilocks testing framework -  everything was either too light or too heavy - so I decided to just write my own. I knew that I would only use it for unit tests, so this boiled down to a [single header file](https://github.com/NeillJohnston/web-server/blob/master/include/underscore.h) with a lot of macros and some pretty-printed output (using ANSI escape codes for different text colors).

Affectionately, I gave it a name. Uncreatively, it was "underscore", because the macros I wrote had a lot of underscores. If you check out the web-server source, each directory in `/src/server` has a folder called `_`, that's where all the tests went.

_(Side note: I don't really like naming my projects because it feels [silly](https://www.youtube.com/watch?v=y8OnoxKotPQ) to christen something so insignificant, but I ended up really enjoying writing `#include <underscore.h>` on top of all my unit test files.)_

### Style

Pick one and stick with it. As I wrote more code and encountered more situations where I might feel like changing later, I added a rule to my own little style guide along with an explanation as to why that rule exists.

## Choices

The backend is written in C. I'm more familiar with C++, but picked C on purpose:

- Less of a standard library meant more things for me to write and test
- No OOP meant having to structure code differently than I'm used to

Essentially, everything that would normally make me run away from C for such a project made me turn to it. This was a project to teach me about _the nature of projects,_ which felt impossible to learn unless I was writing a whole lot in an unfamiliar setting.

### A whole lot?

> If you wish to make an apple pie from scratch, you must first invent the universe.
>
> _Carl Sagan_

You can always keep going lower and lower when making anything "from scratch." I had to choose a stopping point, which meant balancing "writing code for the sake of writing code" and "writing code for the sake of learning."

I ended up including 2 extra libraries - SQLite and OpenSSL. I didn't intend on writing my own database (that would be an entire project on its own), and I didn't intend on implementing a bunch of cryptography functions just so I could get the little lock icon to show up.

## And then

I wrote the frontend.

## Products and byproducts

In the end, I have a neat little website that I can customize to my heart's content. It's not engineered perfectly, it's riddled with bugs, it's a task left better off to the nice folks at Apache, but it's mine.

The project hasn't ended yet: I intend to keep updating this server and using it to run this website for as long as I can. Eventually I want to rewrite it in a more modern language, but I'll stick with C for a while.