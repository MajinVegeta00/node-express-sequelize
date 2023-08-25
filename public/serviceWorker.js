console.log(' New Service Worker')

self.addEventListener('push',e=>
{
    const data=e.data.json();
    console.log(data)
    console.log('Notificacion recibida')
    self.registration.showNotification(data.tittle,
        {
            body:data.message,
            icon:'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/05/dart-vader-scaled.jpeg?fit=2560%2C1661&quality=55&strip=all&ssl=1'
        })
})