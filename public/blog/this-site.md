# Creating this website

Nearing the end of my junior year in college, I still hadn't finished a project that I felt comfortable calling "significant." All the things I wrote were either snippets of code, small toys, or abandoned. In the interest of changing that, I decided to choose something significant that would keep me interested: I would finally make my own website, and make it as personalized as I could. That meant, of course, writing the backend from scratch.

I started writing over spring break, and to my surprise, kept making steady progress after being interrupted by exams, assignments, and real life. Now that it's presentable, I'm using this to document everything that I learned from the project:

## Programming with trust issues

One of the biggest reasons I had such trouble sticking with projects was because I restarted constantly. Everything feels neatly put together when you can visualize the entire project in your head, but once you forget anything it becomes a mess to look back at. So I would start, write for a day or two, then come back disgusted at what I had written. Comments wouldn't fix this unless I wanted to comment every line (which I didn't).

As far as I know, this is a very common problem among programmers, and I felt like I was an extreme case. _I simply could not trust my past self to write anything._ That realization hit hard - but once I understood that this was most of the problem, I could actually take steps to fix it.

### Testing

I used to think that testing was something only needed by "the industry." I'm not sure if I was being arrogant or self-deprecating: either "I'm so good at writing that I don't need to do tests" or "the things I write aren't important enough to bother testing." Either way, it wasn't smart, and I needed to fix that mentality. So, the first thing I did for the project was shop around for a testing framework.

I never actually found my Goldilocks testing framework - everything was either too light or too heavy - so I decided to just write my own. I knew that I would only use it for unit tests, so this boiled down to a [single header file](https://github.com/NeillJohnston/web-server/blob/master/include/underscore.h) with a lot of macros and some nicely-formatted output.

Affectionately, I gave it a name. Uncreatively, the name was "underscore", because the macros I wrote had a lot of underscores in them. If you check out the web-server source, each directory in `/src/server` has a folder called `_`, that's where all the tests went.

_(Side note: I don't really like naming my projects because it feels silly [to give cute names to unimportant things,](https://www.youtube.com/watch?v=y8OnoxKotPQ) but I ended up really enjoying writing `#include <underscore.h>` on top of all my unit test files.)_

Having evidence of what my code did allowed me to focus on what I was writing instead of constantly wondering where my code would break. And when my tested code did break, I could just add a new testcase. Before, I always had this deep-seated paranoia that modifying what I wrote would break something else in such a subtle way that I would never find the source of the error. Now, I could confidently add things without fearing that I was accidentally taking away something else.

### Structure

Another obvious idea was to go into the project with a tenuous idea of what I was doing. This was pretty easy, considering it was my third time trying to start the project (the other two were before and during winter break).

I got my notebook out and just drew a little diagram of how I thought things should be structured, which wound up being a tree of the modules I would have to write. I didn't bother describing them, doing any UML or anything like that, I just needed to get some thoughts on the paper.

This made starting much easier, because I finally had something to grasp on while I started writing code. It was a super simple model, but it did a lot to guide my thoughts about the project. The important thing was to have a starting point.

## Making Choices

### Language

The server is written in C. I'm more familiar with C++, but wanted to use something else because:

- Less of a standard library meant more things for me to write and test
- Less modern tools meant more of an opportunity to practice managing the project
- No OOP meant having to structure code differently than I'm used to

Essentially, everything that would normally make me run away from C for such a project made me turn to it. I wanted to take on a project to learn about the nature of projects, and I didn't think I would learn unless I was writing a whole lot in an unfamiliar setting.

Now, you can always keep going lower and lower when making anything "from scratch" - I wasn't about to write in assembly. I had to choose a stopping point, which meant balancing "writing code for the sake of making the project harder" and "writing code for the sake of learning." That balance took a lot of consideration, which was eventually boiled down to this: write what I enjoyed writing. I really love writing code (worth mentioning because I have some CS friends that don't, which surprised me), so I figured that I could just let myself get carried away until I hit a wall.

### Libraries

Some technologies were simply too far outside of what I knew to consider implementing. I ended up including 2 C libraries - SQLite and OpenSSL.

I decided that using SQLite would be a nice way to handle pretty much all of my persistent data needs. I decided this after I wrote a small parser for my server .cfg file, and it got messy quickly. No way I was going to write something like that to handle a table for the router.

As for OpenSSL, this was completely unnecessary - obviously I'm not doing much beyond hosting some very simple web pages, but for some reason I got really interested in the idea of having my browser not yell at me for visiting an unsecure site. But I didn't intend on implementing a bunch of cryptography functions just to get the little lock icon to show up.

## Products and byproducts

In the end, I have a neat little website that I can customize to my heart's content. It's not engineered perfectly, it's riddled with bugs that I have yet to discover, it's a task left better off to the nice folks at Apache, but it's mine.

The project hasn't ended yet: I intend to keep updating this server and using it to run this website for as long as I can. Eventually I want to rewrite it in a more modern language, but not before doing my due diligence and going through at least a couple of refactors and new features.