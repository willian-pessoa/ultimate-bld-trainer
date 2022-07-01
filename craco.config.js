module.exports = {
    style: {
        sass: {
            loaderOptions: {
                additionalData: `
            @import "src/_variables.scss";
            @import "src/_mixins.scss";
          `,
            },
        },
    },
};