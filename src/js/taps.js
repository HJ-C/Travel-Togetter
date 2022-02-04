function Taps(){

    var selectTabs = {
        menu: document.getElementById('menu__select').firstElementChild,
        menu_text: document.getElementById('menu__text').firstElementChild,
        menu_link: document.querySelectorAll('#menu__select li a'),
        menu_list: document.querySelectorAll('#menu__select li'),
        menu_item: document.querySelectorAll('#menu__text > div')
    }
    
    var tabs = {
        
        init: function(){
            selectTabs.menu.className = 'active';
            selectTabs.menu_text.className = 'active';
    
            for (var i = 0; i < selectTabs.menu_link.length; i++) {
                selectTabs.menu_link[i].addEventListener('click', tabs.event);
            }
        },
    
        event: function(e){
            e.preventDefault();
    
            for (var i = 0; i < selectTabs.menu_list.length; i++) {
                selectTabs.menu_list[i].className = '';
            }
    
            for (var i = 0; i < selectTabs.menu_item.length; i++) {
                selectTabs.menu_item[i].className = '';
            }
    
            this.parentElement.className = 'active';
            selectTabs.selectActive = this.getAttribute('href');
            document.querySelector(selectTabs.selectActive).className = 'active';
            document.querySelector(selectTabs.selectActive).style.opacity = 0;
            setTimeout(function(){
                document.querySelector(selectTabs.selectActive).style.opacity = 1;
            }, 100)
        }
    
    }
    tabs.init();
    }


    export default Taps;

    