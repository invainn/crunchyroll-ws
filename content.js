let container = document.getElementById('template_container');
let layout = document.getElementsByClassName('new_layout new_layout_wide')[0];
let box = document.getElementById('showmedia_video_box_wide');
let content = document.getElementById('main_content');
let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if(mutation.type == 'childList') {
            if(mutation.addedNodes[0].tagName === 'IFRAME') {
                let player = document.getElementById('showmedia_video_player').querySelector('iframe');
                player.style.maxWidth = '100%';
                player.style.height =  '90vh';
                player.style.width =  '100vw';
            }
        }
    });
});

container.style.height = '100%';
container.style.width = '100%';
container.style.padding = '0';

layout.style.display = 'flex';
layout.style.flexFlow = 'column wrap';
layout.style.alignItems = 'center';
layout.style.justifyContent = 'center';

box.style.height = '100%';
box.style.width = '100%';

content.style.marginRight = '10px';

observer.observe(document.body, { childList: true, attributes: false, characterData: false });