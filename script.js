function notify(){
  const msg = document.getElementById('msg');

  if(!('Notification' in window)){
    msg.innerText = 'Browser does not support notifications';
    return;
  }

  if(Notification.permission === 'granted'){
    new Notification('Hello!', {
      body: 'This is a browser notification'
    });
  }else if(Notification.permission !== 'denied'){
    Notification.requestPermission().then(permission=>{
      if(permission === 'granted'){
        new Notification('Permission Granted!', {
          body: 'Notifications are now enabled'
        });
      }
    });
  }else{
    msg.innerText = 'Notification permission denied';
  }
}
