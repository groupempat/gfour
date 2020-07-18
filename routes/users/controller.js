const { hashed } = require("../../helpers");
const { User } = require("../../models");

module.exports = {
    home: (req, res) => {
        res.render("welcome");
    },
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    dashboard: (req, res) => {
        console.log(req.user);
        res.render("dashboard", {
            user: req.user,
        });
    },
    create: async (req, res) => {
        try {
            const { email, password, fullname, username } = req.body;

            const result = await User.findOne({ email });

            if (!result) {
                const hashPassword = await hashed(password);

                await User.create({
                    email,
                    password: hashPassword,
                    fullname,
                    username,
                });
                res.redirect("/users/login");
            }
        } catch (error) {
            console.log(error);
        }
    },
    logout: (req, res) => {
        req.logout();
        res.redirect("/users/login");
    },
};
