# 4399-fix
A Chrome extension to patch 4399 China's video games limits.

Made it for my friends so that IT period wouldn't be that boring.

## Storytime
Though I'm not Chinese, I grew up playing their browser-based games, it was really fun, think of it like console games but free and low quality. At least the fun was real.

Back to present, my friends wanna play those games again, and the site's still up.

But we faced another problem: China's law for children not to play games, only Saturday or Sunday, or holidays at 8 to 9 pm. That's it.

`But I'm no Chinese` - I said.

So right at that point, I began looking at their codebase, and with dumb luck, I've found the code that they implemented the system, and they messed up.

Usually, the best way to implement these kinds of protections require the devlopers to pack those codes into the game itself so that it's harder to revert those changes.

But they didn't, they put everything inside a single script file called