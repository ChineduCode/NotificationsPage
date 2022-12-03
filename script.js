// Variables
const markAsRead = document.querySelector('.mar-text');
const numOfNotification = document.querySelector('.ntf-num');
const msgs = document.querySelectorAll('.msg-content');
const notifications = document.querySelectorAll('.msg-header');
const messages = document.querySelectorAll('.msg-content');
const notificationsContainer = document.querySelectorAll('.ntf-container');

//To hide divs with empty messages
msgs.forEach(msg => {
    if(msg.innerText === ''){
        msg.style.display = 'none';
    }else{
        msg.style.display = 'inherit';
    }
});

//JavaScript for read-messages
notificationsContainer.forEach(container => {
    container.addEventListener('click', (e)=>{
        e.preventDefault()
        let value = numOfNotification.innerText/1;

        if(container.classList.contains('unread-msg')){
            container.classList.remove('unread-msg');

            value--;
            numOfNotification.innerText= value;
        };

        if(value === 0){
            numOfNotification.innerText = 0;
        }
    })
});

// JavaScript for 'Mark all as read'
markAsRead.addEventListener('click', (e)=>{
    e.preventDefault()
    
    notificationsContainer.forEach(container =>{
        if(container.classList.contains('unread-msg')){
            container.classList.remove('unread-msg');  
        }
    })
    
    numOfNotification.innerText= 0;
});



