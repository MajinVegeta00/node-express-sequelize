const PUBLIC_VAPID_KEY='BOJi0MfOdVCExxCSxfPde1atSKekSj-bBNi82jGhniv53WcGsVQQpEMnws7AP8N8t2maL6WsA-I3eMOARerU9x0';

const urlBase64ToUint8Array=(base64String)=>
{
    const padding ='='.repeat((4-base64String.length % 4)%4);
    const base64=(base64String + padding).replace(/-/g, '+').replace(/_/g, '/');

    const rawData= window.atob(base64);
    const outputArray=new Uint8Array(rawData.length);

    for(let i =0; i<rawData.length; ++i )
    {
        outputArray[i]= rawData.charCodeAt(i);
    }
    return outputArray;
}

const subscription=async ()=>
{
    //? Registrando service Worker
    const register=await navigator.serviceWorker.register('./serviceWorker.js',
    {
      scope:'/'
    });
    console.log('here')

    //? Creando subscripcion
    const subscripcion=await register.pushManager.subscribe(
        {
            userVisibleOnly:true,
            applicationServerKey:urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
        });

     console.log('here')   
    await fetch ('/api/notify/notification',{
        method: 'POST',
        body:JSON.stringify(subscripcion),
        headers:{
          "Content-type":'application/json'
        }
                                                                 })
        console.log('Subscrito') 
         
            }
            subscription();
