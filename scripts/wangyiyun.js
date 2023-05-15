hexo.extend.filter.register('theme_inject', function(injects) {
    injects.sidebar.raw('load-custom-iframe', '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=410161058&auto=1&height=66"></iframe>', {}, {cache: true});
});