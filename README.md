# win23-a8

Welcome to the World's Simplest Messageboard!

It's a place where you can put whatever thoughts you want on the Internet
anonymously. We're sure nothing bad can happen because of that.[^1]

To prevent unauthorized ne'er-do-wells from posting whatever messages they want,
there's also an Extremely Secure™ Password™ mechanism.[^2] You set the password
by keeping the password in plain text, in the `PASSWORD` environment variable.

## Building the code

Make sure to run `npm ci` to install all the dependencies. Then,
run `npm run build` to build the application. It will output to the `build`
directory.

## Running the server

Make sure that dependencies are installed via `npm ci`. Then, ensure that
the `/data` directory exists and is persisted (this is where messages are
stored). Finally, make sure an Extremely Secure™ Password™ is available in the
`PASSWORD` environment variable, otherwise nobody will be able to post anything.

Finally, run `node build` in order to run the server. It will be hosted on port 3000.

[^1]: This is sarcasm.

[^2]: This is also sarcasm.
