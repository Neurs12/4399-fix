# 4399-fix
A Chrome extension to patch 4399 China's video games limits.

Made it for my friends so that IT period wouldn't be that boring.

## Storytime
I grew up playing China's 4399 browser-based games, it was really fun, think of it like console games but free and low quality. At least the fun was real.

Back to the present, my friends wanna play those games again, and the site's still up.

But we faced another problem: China's law for children not to play games, only on Saturday or Sunday, or holidays from 8 to 9 pm. That's it.

`But I'm no Chinese` - I said.

So right at that point, I began looking at their codebase, and with dumb luck, I found the code that they implemented in the system, and they messed up.

Usually, the best way to implement these kinds of protections requires the developers to pack those codes into the game itself so that it's harder to revert those changes.

But they didn't, they put everything inside a single script file called `Antiindulgence.js`. And all I have to do is to block the request.

And now, my friends and I can enjoy the old times again.