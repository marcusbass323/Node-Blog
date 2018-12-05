const gatekeeper =

    (req, res, next) => {
        const pass = req.query.pass;
        if (pass === 'Marcus') {
            next();
        } else {
            res
                .status(400)
                .json({ message: "Access Denied" })
        }
    };

module.exports.gatekeeper = gatekeeper;