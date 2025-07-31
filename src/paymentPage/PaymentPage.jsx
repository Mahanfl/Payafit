import React, { useState, useEffect } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import styled from "./PaymentPage.module.css";


function PaymentPage () {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    const [paymentMethod, setPaymentMethod] = useState('online');



    const [formDate, setFromData] = useState({
        size: '',
        firstName: '',
        lastName: '',
        adress: '',
        zipCode: '',
        landlinePhone: '',
        mobilePhone1: '',
        mobilePhone2: '',
        selectedSize: product?.selectedSize || '',
        cardNumber: '',
        cvv2: '',
        dynamicPassword: '',
        expMonth: '',
        expYear: '',
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'landlinePhone' || name === 'mobilePhone1' || name === 'mobilePhone2' || name === 'cardNumber' || name === 'cvv2' || name === 'dynamicPassword' || name === 'expMonth' || name === 'expYear') {
            setFromData({ ...formDate, [name]: value.replace(/[^0-9]/g,'')});
        } else {
            setFromData({ ...formDate, [name]: value});
        }
    };

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        if (!formDate.firstName.trim()) { newErrors.firstName = 'نام اجباری است'; isValid= false; }
        if (!formDate.lastName.trim()) { newErrors.lastName = 'نام خانوادگی اجباری است'; isValid= false; }
        if (!formDate.adress.trim()) { newErrors.adress = 'آدرس اجباری است'; isValid= false; }
        if (!formDate.zipCode.trim()) { newErrors.zipCode = 'کد پستی اجباری است'; isValid= false; }
        if (!/^\d{10}$/.test(formDate.zipCode.trim())) {newErrors.zipCode = 'کد پستی باید 10 رقم باشد'; isValid= false; }

        if (!formDate.mobilePhone1.trim()) {newErrors.mobilePhone1 = 'شماره موبایل وارد نکردید'; isValid= false; }
        if (!/^\d{11}$/.test(formDate.mobilePhone1.trim())) {newErrors.mobilePhone1 = 'شماره موبایل نامعتبر است'; isValid= false; }
        if (!formDate.mobilePhone2.trim()) {newErrors.mobilePhone2 = 'شماره موبایل دوم را وارد نکردید'; isValid= false; }
        if (!/^\d{11}$/.test(formDate.mobilePhone2.trim())) {newErrors.mobilePhone2 = 'شماره موبایل دوم نامعتبر است'; isValid= false; }

        if (product?.sizes && !formDate.selectedSize) { newErrors.selectedSize = 'سایز کفش را انتخاب نکردید'; isValid= false; }

        if (paymentMethod === 'online') {
            if (!formDate.cardNumber.trim()) { newErrors.cardNumber = 'شماره کارت اجباری است'; isValid= false; }
            if (!/^\d{16}$/.test(fromData.cardNumber.trim())) {newErrors.cardNumber = 'شماره کارت باید 16 رقم باشد'; isValid= false; }

            if (!formDate.cvv2.trim()) { newErrors.cvv2 = 'CVV2 اجباری است'; isValid= false; }
            if (!/^\d{3,4}$/.test(fromData.cvv2.trim())) {newErrors.cvv2 = 'CVV2 باید باید 3 یا 4 رقم باشد'; isValid= false; }

            if (!formDate.dynamicPassword.trim()) { newErrors.dynamicPassword = 'رمزپویا را وارد نکردید'; isValid= false; }
            if (!/^\d{6,}$/.test(fromData.dynamicPassword.trim())) {newErrors.dynamicPassword = 'رمزپویا حداقل 6 رقم است'; isValid= false; }

            if (!formDate.expMonth.trim()) { newErrors.expMonth = 'ماه انتقضا را وارد نکرید'; isValid= false; }
            if (!/^(0[1-9]|1[0-2])$/.test(fromData.expMonth.trim())) {newErrors.expMonth = 'ماه انقضا نا معتبر است'; isValid= false; }

            if (!formDate.expYear.trim()) { newErrors.expYear = 'سال انقضا را وارد نکردید'; isValid= false; }
            const currentYear = new Date().getFullYear() % 100;
            const inputYear = parseInt(fromData.expYear.trim(), 10);
            if (!/^\d{2}$/.test(fromData.expYear.trim()) || inputYear < currentYear) {newErrors.expYear = 'سال انقضا نامعتبر است'; isValid= false}
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
          if (validateForm()) {
            if (paymentMethod === 'online') {
                console.log('پرداخت انلاین معتبر است', formDate);
                alert('پرداخت انلاین با موفقیت انجام شد');
            } else{
                alert('سفارش شما درب منزل ثبت شد');
            }
            navigate('/order-confirmation');
          } else{
            alert('لطفا تمام فیلد ها را پر کنید');
          }
    };

  

    if (!product) {
        return null
    }

    return(
        <div className={styled.paymentContainer}>
            <h2 className={styled.title}>تکمیل خرید و پرداخت</h2>
            {product && (
                <div className={styled.productSummary}>
                    <img 
                      src={product.image}
                      alt={product.title || 'Product Image'}
                      className={styled.productImage}
                    />
                    <div className={styled.productDetails}>
                        <h3>{product.title}</h3>
                        <p>قیمت : {product.price}</p>
                        
                          <label htmlFor="size">سایز :</label>
                          <input type="text" placeholder="سایز کفش را وارد کنید" id="size" maxLength={2}  name="size" value={formDate.size} onChange={handleChange} className={styled.size} />
                    </div>
                </div>
            )}

            <div className={styled.paymentMethodSelection}>
                <button 
                  type="button"
                  className={`${styled.methodButton} ${paymentMethod === 'online' ? styled.activeMethod : ''}`}
                  onClick={()=> setPaymentMethod('online')}
                >
                    پرداخت آنلاین  
                </button>
                <button 
                    type="button"
                    className={`${styled.methodButton} ${paymentMethod === 'cash_on_delivery' ? styled.activeMethod : ''}`}
                    onClick={()=> setPaymentMethod('cash_on_delivery')}
                >
                    پرداخت درب منزل 
                </button>
            </div>

            <form onSubmit={handleSubmit} className={styled.paymentForm}>
                <h3 className={styled.sectionTitle}>اطلاعات تحویل</h3>
                <div className={styled.formGroup}>
                    <label htmlFor="firstName">نام :</label>
                    <input type="text" id="firstName" name="firstName" value={formDate.firstName} onChange={handleChange} className={errors.firstName ? styled.inputError : ''} required />
                    {errors.firstName && <span className={styled.errorMessage}>{errors.firstName}</span>}
                </div>  

                <div className={styled.formGroup}>
                    <label htmlFor="lastName">نام خانوادگی :</label>
                    <input type="text" id="lastName" name="lastName" value={formDate.lastName} onChange={handleChange} className={errors.lastName ? styled.inputError : ''} required />
                    {errors.lastName && <span className={styled.errorMessage}>{errors.lastName}</span>}
                </div>  

                <div className={styled.formGroup}>
                    <label htmlFor="adress">آدرس :</label>
                    <input type="text" id="adress" name="adress" value={formDate.adress} onChange={handleChange} className={errors.adress ? styled.inputError : ''} required />
                    {errors.adress && <span className={styled.errorMessage}>{errors.adress}</span>}
                </div> 

                <div className={styled.formGroup}>
                    <label htmlFor="zipCode">کدپستی :</label>
                    <input type="text" id="zipCode" name="zipCode" value={formDate.zipCode} onChange={handleChange} className={errors.zipCode ? styled.inputError : ''} required />
                    {errors.zipCode && <span className={styled.errorMessage}>{errors.zipCode}</span>}
                </div> 

                <div className={styled.formGroup}>
                    <label htmlFor="landlinePhone">تلفن ثابت(اختیاری) :</label>
                    <input type="text" id="landlinePhone" name="landlinePhone" value={formDate.landlinePhone} onChange={handleChange} className={errors.landlinePhone ? styled.inputError : ''} required />
                    {errors.landlinePhone && <span className={styled.errorMessage}>{errors.landlinePhone}</span>}
                </div>

                <div className={styled.formGroup}>
                    <label htmlFor="mobilePhone1">شماره موبایل اول :</label>
                    <input type="text" id="mobilePhone1" name="mobilePhone1" value={formDate.mobilePhone1} onChange={handleChange} className={errors.mobilePhone1 ? styled.inputError : ''} required />
                    {errors.mobilePhone1 && <span className={styled.errorMessage}>{errors.mobilePhone1}</span>}
                </div>

                <div className={styled.formGroup}>
                    <label htmlFor="mobilePhone2">شماره موبایل دوم :</label>
                    <input type="text" id="mobilePhone2" name="mobilePhone2" value={formDate.mobilePhone2} onChange={handleChange} className={errors.mobilePhone2 ? styled.inputError : ''} required />
                    {errors.mobilePhone2 && <span className={styled.errorMessage}>{errors.mobilePhone2}</span>}
                </div>     

               

                {paymentMethod === 'online' && (
                <>
                  <h3 className={styled.sectionTitle}>اطلاعات کارت بانکی</h3>
                  <div className={styled.formGroup}>
                     <div className={styled.formGroup}>
                        <label htmlFor="cardNumber">شماره کارت :</label>
                        <input type="text" id="cardNumber" name="cardNumber" value={formDate.cardNumber} onChange={handleChange} maxLength="16" className={errors.cardNumber ? styled.inputError : ''} required />
                        {errors.cardNumber && <span className={styled.errorMessage}>{errors.cardNumber}</span>}
                    </div> 

                    <div className={styled.formGroup}>
                        <label htmlFor="cvv2">CVV2 :</label>
                        <input type="text" id="cvv2" name="cvv2" value={formDate.cvv2} onChange={handleChange} maxLength="4" className={errors.cvv2 ? styled.inputError : ''} required />
                        {errors.cvv2 && <span className={styled.errorMessage}>{errors.cvv2}</span>}
                    </div> 

                    <div className={styled.formGroup}>
                        <label htmlFor="dynamicPassWord">رمزپویا :</label>
                        <input type="password" id="dynamicPassWord" name="dynamicPassWord" value={formDate.dynamicPassword} onChange={handleChange} maxLength="10" className={errors.dynamicPassword ? styled.inputError : ''} required />
                        {errors.dynamicPassword && <span className={styled.errorMessage}>{errors.dynamicPassword}</span>}
                    </div>

                    <div className={styled.formGroup}>
                        <label htmlFor="expMonth">ماه انقضا :</label>
                        <input type="text" id="expMonth" name="expMonth" placeholder="MM" value={formDate.expMonth} onChange={handleChange} maxLength="2" className={errors.expMonth ? styled.inputError : ''} required />
                        {errors.expMonth && <span className={styled.errorMessage}>{errors.expMonth}</span>}
                    </div>

                    <div className={styled.formGroup}>
                        <label htmlFor="expYear">سال انقضا :</label>
                        <input type="text" id="expYear" name="expYear" placeholder="YY" value={formDate.expYear} onChange={handleChange} maxLength="2" className={errors.expYear ? styled.inputError : ''} required />
                        {errors.expYear && <span className={styled.errorMessage}>{errors.expYear}</span>}
                    </div>
                 </div>
             </>
           )}   

           <button type="sumbit" className={styled.sumbitButton} onClick={handleSubmit}>
              {paymentMethod === 'online' ? 'پرداخت آنلاین' : 'پرداخت  درب منزل'}
           </button>
           </form>
          </div>
    )
}    


export default PaymentPage;
                 
                    
                                           
