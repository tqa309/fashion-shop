const path = require("path");

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    webpack: (config) => {
        config.resolve.alias['react'] = path.join(__dirname, "node_modules/react"),
        config.resolve.alias['react-dom'] = path.join(__dirname, "node_modules/react-dom")
        return config;
    },
};
