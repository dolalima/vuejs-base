module.exports = function(router){
	router.map({
        '*': {
            component: require('./components/Login.vue')
        }
    })
	
}