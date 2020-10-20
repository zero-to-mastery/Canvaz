<img src="https://cdn.discordapp.com/attachments/743608750635483297/760576141291028500/CANVAS.png" width="350" align="right"/>

# Canvas Creations

Your favourite annual creative challenge for Hacktoberfest is here! We will once again be showcasing the creative talents of our ZTM students, this time using the HTML `<canvas>` element.

If you've previously contributed to our projects like [CSS Art](https://github.com/zero-to-mastery/CSS-Art-Hacktoberfest-Edition) or [Animation Nation](https://github.com/zero-to-mastery/Animation-Nation), this will be a piece of cake, and you can skip ahead to the rules for this particular project. If you've never done one of these before though, don't worry! This is a playground for developers of all skill levels and experience, so keep reading and you'll soon have everything you need to get set up.

> **All discussions around this event can now be had in our #hacktoberfest-2020 channel on Discord!**

## Getting Started with Hacktoberfest

Hacktoberfest is a month-long celebration of open source, organised by Digital Ocean. ([More details here](https://github.com/zero-to-mastery/coding_challenge-31/blob/master/README.md#what-is-hacktoberfest))

If you've never made a pull request before, or participated in an open-source project, we recommend taking a look at our [Start Here Guidelines](https://github.com/zero-to-mastery/start-here-guidelines). This repo has everything you need to learn about open-source, with a step-by-step guide to making your very first PR.
Once you've got your feet wet, you're ready to come back and dive into Hacktoberfest fun!

## Rules

- Use HTML, CSS and vanilla JavaScript
- Use the `<canvas>` element
- Please make sure that the code is your own, and not copied from somewhere else
- That's it!

## But what is Canvas?

> `<canvas>` is an HTML element which can be used to draw graphics via scripting (usually JavaScript). This can, for instance, be used to draw 2D shapes, graphs, combine photos, or create simple (and not so simple) animations.

For more information about Canvas, you can read its [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API), and do a [tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)!

## How to contribute

1. First up you need to fork (make a copy) of this repo to your Github account.

2. Clone (download) your fork to your computer

3. Set your streams so you can sync your clone with the original repo (get the latest updates)

   - `git remote add upstream https://github.com/zero-to-mastery/Canvas-Creations.git`
   - `git pull upstream master`
   - The above 2 commands will synchronize your forked version of the project with the actual repository.

4. Create a branch

5. In the Art directory (folder), create a directory named after yourself.

6. Within this folder you just made, create three files, an HTML file, a CSS file, and a JS file.

7. Link your CSS and JS files to your HTML file.

8. Using the `<canvas>` element, create a work of art! It can be as simple or as complex as you like!

9. Get a screenshot of your finished work! Try to crop it so that it looks good as a smallish (preferably squarish) image. Save this in your directory, together with your code files. You can also choose to make a gif instead of a static image, if your art is animated.
   _If you don't add a gif/screenshot, the website won't show your work in the thumbnail._

10. Go to the root `include.js`. You will see an array of objects, each one represents a work of art that someone has created. Copy an example object and paste it at the end, filling it out with your art information and links:

```js
let cards = [
  //  Add your card in this section
  {
    artName: 'welcome robot',
    pageLink: './Art/joy/robot.html',
    imageLink: './Art/joy/robot.png',
    author: 'Joy',
    githubLink: 'https://github.com/royranger'
  }
];
```

11. Pull from the upstream again, like we did in step 3. This is to ensure we still have the latest code.

    - `git pull upstream master`

12. Commit and push the code to your fork

13. Create a pull request to have the changes merged from your fork into the origin

14. [Tweet about making your first Hacktoberfest pull request!](https://ctt.ac/ks767)

> Congratulations! You are now one pull request closer to getting that free t-shirt. Why not have a go at the [HTML challenge](https://github.com/zero-to-mastery/Keiko-Corp) or the [Python Challenge](https://github.com/zero-to-mastery/ascii-art)? You can check how many qualifying pull requests you have made at <https://hacktoberfest.digitalocean.com/profile> .
> Have Fun and Happy Coding!

## Disclaimer

Zero To Mastery receives no commission or incentives for your participating in either this project or entering the Hacktoberfest event.
