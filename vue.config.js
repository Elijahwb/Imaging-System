module.exports = {
    chainWebpack: config => {
        config.module.rule('vue').uses.delete('cache-loader')			
        config.module.rule('js').uses.delete('cache-loader')		
        config.module.rule('ts').uses.delete('cache-loader')	
        config.module.rule('tsx').uses.delete('cache-loader')
        const svgRule = config.module.rule('svg')

        svgRule.uses.clear()

        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
    },
    transpileDependencies: ['vuex-module-decorators']
}