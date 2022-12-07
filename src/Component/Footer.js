import React from 'react'
import '../styles/footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='contact_info'>
                <h4>CONTACT INFO</h4>
                <div className='info'>
                    <p><i className='fa fa-map-marker'></i>CuKuin District, DakLak Province</p>
                    <p><i className='fa fa-phone'></i>0825 820 709</p>
                    <p><i className='fa fa-envelope'></i>hophap1311@gmail.com</p>
                </div>
            </div>
            <div className='about_us'>
                <h4>ABOUT US</h4>
                <div className='info'>
                    <p><i className='fa fa-arrow-right'></i>Giới thiệu TWatch</p>
                    <p><i className='fa fa-arrow-right'></i>Quy định sử dụng</p>
                    <p><i className='fa fa-arrow-right'></i>Chính sách bảo mật</p>
                    <p><i className='fa fa-arrow-right'></i>Câu hỏi thường gặp</p>
                </div>
            </div>
            <div className='connect_with_us'>
                <h4>CONNECT WITH US</h4>
                <div className='info'>
                    <p><a href='https://www.facebook.com/profile.php?id=100009562365980' target='_blank'><i className='fab fa-facebook'></i>FaceBook</a></p>
                    <p><a href='https://www.facebook.com/profile.php?id=100009562365980' target='_blank'><i className='fab fa-instagram'></i>Instagram</a></p>
                </div>
            </div>
        </div>
    )
}
