import React, {useState} from 'react'

export const Contact = () => {

  return (<>
    <div className='contact'>
      <h1>Osoite</h1>
      <p>Mika Tiihonen</p>
      <p>Kanneltie 9 a 5</p>
      <p>00420 Hki</p>
    </div>

    <div style={{ height: '400px', width: '70%', margin: '20px auto 0 auto' }}>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.7227364293376!2d24.84980131609335!3d60.22164315273173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bd8166e15af%3A0x3d3a1bd4d02cb9c2!2sKanneltie%209%2C%2000420%20Helsinki!5e0!3m2!1sfi!2sfi!4v1623910212824!5m2!1sfi!2sfi"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </>
  )
}
