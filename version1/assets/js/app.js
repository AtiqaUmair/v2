$(document).ready(() =>{
    let hotels = [];
    let transports = [];
    let flights = [];
    let passengers = [];
    let passengerInfo = {};
    let voucherNo  = '';

    $('#headPassenger').show()
    $('#passenger').hide()
    $('#hotel').hide()
    $('#transport').hide()
    $('#flight').hide()

    $('#headNextBtn').on('click', () => {
        if(validator('headPassenger')){
            console.log('SOME FIELDS ARE EMPTY')
            return  
        }

         passengerInfo = {
                        guest : 'GUEST NAME : ' + getValue('#headName'),
                        contact: 'Contact NO. ' + getValue('#contactNo'),
                        agent: 'PAK AGENT NAME' + 'NAGORI TRAVELS PVT LTD 2023-2024',
                        company : 'K-S-A UMRAH COMPANY' + 'BASHMA EMAAR.....!'
                    }
        voucherNo = getValue('#voucherNo')

        $('#headPasenger').hide()
        $('#passenger').show() 
        console.log(passengerInfo)
    })

    $('#headNextBtnToHotel').on('click', () => {
       console.log('hi')
        $('#hotel').show()
        $('#transport').hide() 
    })

    
    
    $('#addPassenger').on('click', () =>{
        if(validator('passenger')){
            console.log('Click On Add Button After Insert Data')
            // alert('Click On Add Button After Insert Data');
            return  
        }
        let passenger = [getValue('#name'), getValue('#gender'), getValue('#passportNo'), getValue('#visaNo')]
        setValue('#name')
        setValue('#gender')
        setValue('#passportNo')
        setValue('#visaNo')
        passengers.push(passenger)
        console.log(passengers)
    })

    // $('#headNextBtnToHotel').on('click', () => {
        
    //         // alert('Click On Add Button After Insert Data');
    //         console.log('SOME FIELDS ARE EMPTY')
    //         return  
    
    //     $('#hotel').show()
    //     $('#passenger').hide()
    // })

    $('#nextToTransportation').on('click', () => {

        if(hotels.length <= 1){
            console.log('At least add hotels')
            return 
        }
        $('#hotel').hide()
        $('#passenger').hide()
        $('#transport').show()
    })
    $('#hotelAddBtn').on('click', () =>{
        if(validator('hotels')){
            console.log('SOME FIELDS ARE EMPTY')
            return  
        }
        let hotel = [getValue('#hotelName'), getValue('#city'), getValue('#roomType'), getValue('#checkIn'), getValue('#checkOut'), getValue('#night')]
        hotels.push(hotel)
        console.log(hotels)
    })

    $('#nextToFlights').on('click', () => {

        $('#transport').hide()
        $('#flight').show()
    })

// $('#hotelAddBtn').on('click', () =>{
//     if(validator('hotels')){
//         console.log('SOME FIELDS ARE EMPTY')
//         return  
//     }
//     let hotel = [getValue('#hotelName'), getValue('#city'), getValue('#roomType'), getValue('#checkIn'), getValue('#checkOut'), getValue('#night')]
//     hotels.push(hotel)
//     console.log(hotels)
// })

$('#addTransport').on('click', () =>{
    if(validator('transport')){
        console.log('SOME FIELDS ARE EMPTY')
        return  
    }
    let transport = [getValue('#transportationCompany'), getValue('#transportationType')]
    transports.push(transport)
    console.log(transports)
})

$('#addFlight').on('click', () =>{
    if(validator('flight')){
        console.log('SOME FIELDS ARE EMPTY')
        return  
    }
    let flight = [getValue('#date'), getValue('#flightNo'), getValue('#route'), getValue('#departure'),getValue('#arrival'), getValue('#PNRtNo')]
    flights.push(flight)
    console.log(flights)
})
     


    $('#generatePDF').on('click', () => {

    passengerInfo = { 
          guest : 'GUEST NAME : ' +  $('#headName').val(),
          contact: 'Contact NO. ' + $('#contactNo').val(),
          agent: 'PAK AGENT NAME' + 'NAGORI TRAVELS PVT LTD 2023-2024',
          company : 'K-S-A UMRAH COMPANY' + 'BASHMA EMAAR.....!'
   }
 
    // const mainImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACfCAMAAADznqoHAAAACXBIWXMAAB7CAAAewgFu0HU+AAABwlBMVEUiHh4pJSZBPT4mIB0kICI9OTotKSr///8kHx8mIiPciArgiworIhxEQUHwlg06NjciHiDqkQw3KRo4NDXYhgqlYwJQNxcuJBs1MTLOfgkxLS5HQ0Xm5ubmjwxLSEnU09Nwbm65uLjjjQyfXwJKNBfe3t4zJhvtkwzFeQq1cApUUVH7+/tOSkxgPhD2mQ5ZVlY8LBmtaAVJRkZ3TA+1bQRcPxiIhodVOhdqRRGAfn+pZgTLy8uaXQPx8fFoZWZkYWJyShCQjo59URG9dQ39/f3IewqGUQVPTE1gXV719PS/vr++cwZmQhHt7e3LfAl6eHmRXBJDMBjZ2Nj49/iWXxFvRw6WWgR9TgmmZwxALhhSTlBGMhhaOxKLWBKWlJXPzs/Cdgbr6uvBeAyraxCZYA+7cgbzlw6iZQ5QTk6dYxGmpKVcWVqxbQjVgwqxr7CwagRraGlWUlSFVRHSgQicm5tqRxirqarIxsc+Lhy1tLSeYAiSWQh0cnK5cw3i4uK5cAbFw8Pfiw6MVQbTgwl6UBawbxFjQxhtSRWDVRZ2dHTVhQ6ioaF0TRYwLCx1TRjUhRBgQBfKycnTgwzqkQ5eQBqEgoM5AzyVAAAX9UlEQVR4Ae2ciVfayvfAAwQClGUeIJs7AtaqFbFKtVYrilu1ouK+VdQqLq221WqrVXwiakX7RP/f352wJOzBnvPO93fOm3OaTDIzdz65c+feyQRLUP9LifhfgqH+nGa0qHTh5OSkdGSx64+f7A9oBk9+DfUKeUQ8IWNhW9Ne6ejjoR5H01X6a1tPEKQ4ThLLSBBB8ps/Fj2O6BE0o+VDRgKRsf7TnCUEYe8ofQRQvjTV/Yc8EnrLlZAE8Zss+QLlRzM4LySyKSWRUUJsHORn2fnQFDXzOGiFTUQSwl/5GDV3mqIhCXe1MEhInwcPV5rXzZI89cIAqfe4jhc3mupfocfoJQqEiJIFbvbMiaa0hnnQ9DmZLf396F2SGHrNhYcDTfXXHAaDZL6r3aw04CjV3zjg5KYpWsvREbGrCahQrkqIeMg9u3LS9ItyWAzpU1yTOWEAFpXkjBc5aLrmUa6OVp/foJyVaM2RoVyjlZ1mtI0Wk+WAbhQBjjCgHfJXduPJSjM4nWOUANOr2OVMA9WbsrqebDRFhblhULHiHmXRXXIROVSdRT1ZaIqUuWEIoviDh0u1OBVqy4KTmaZIyKUX1PnhgyPeFZcMusw8WBlpBvnc4pI2/FxxI+CCEauDhjKOVSaavkJOMAg5bj88/xB2ebSxznKfxU2ZcDLQdLVxGSboGK0GjvwfFJXhYo8M5QaJ1viYAScDTRNHwRJfZdhttkqsZybTkYxjI4haGWJ6epoDjnKtncXeGQmJEIkcfv9S6itEBjmkMX2QSEtjYb0kZZBH3xYsmQKYBcGIoV2T/zxb5YQysiftPE9HM2rnaDTXUpcOWKJRatVfBVgcE+pIN8/T0TxwFeqV7jJVkfaJdJ8jC672LY0lp6H5h+khu/B9zVaCpbyTXmdvwC4l1X2pOKk0o3yO44RXWQnyV6Vz7OscedTMhWY+hxSm+FozyVxAzid1J1znuECp78YpuvnJyQfTHZ1fVbE7JCf9n9nXufJkT4ohp9C0cacxb7kQu8t3eUxxut1B8lgl0/zDFp8jL9BoWJMIaf13uhwtEouROnndnkzDYbXHiFySriLmyuf3MBfccskL0yQazqrRNQYduuEtf3xOo90nmn1dcPJocoYbCa6lT1JOEk0v19ntcC577yavpaa5qMvZfWIKOgyuG9bY5aZCe4mWk0hTmltAvIZYEDS45vzFt+7zxvs571+ms13pqjVezCmDhInTKpHmkKtqIn1pr+4cV4rnzxWKcNhl1ko9EEE5UTCV+hOUk0AzyH120/JQ0O+T3HuOjgLuRpJn8Oax3orykL2ZadYRA80t5zUNn2tJUMm5yuN3cHoBThSMEhY6CbqpyZvmzHQTcMOSguw88xvyHiYAQ/Ns5bBpfiZic7ly+M+WlvB6q9NT7HuEaghCnonma342jJ9M67/w+bBuVgPhXFs4GZ6OvY3L1s00ytAg8+1r0zmmIdCcwdSYf3MQTLKHikWzmKc0QSMh7jTtL12AbtBF2PRI3fSwhopFc5BZBWlLgg0oKF1qLD4He0Fn4eLlPJ8mKhSxdgRZNJd5ehv3aqNL6vWHHQCDLm5Nt2mZc94Usxwgi0aZs2FihTnD1pV0af8WRgpeOX3e4vx2B2LCJKz3YIZmMFbM9awLXl83IuRTHF1cBCq116a8Vn5ML9OM4TA0/Uw59xy8fOuOFM8VlW6S9Lrz9hB0RxJmWcHQzOdpNliS6u4MfA3v5pxHInIpnzcG9gOPxJXD0JTl/2QOw+cnnecSXaUXqYJ3phnE7oN7nlkeMzQl3JtHa4o/a3Y9xWH/nM8dCIeLgyhvCXQDCeP/GBqOOwHsHq9hE73YN+f3+gNnnbeq/JVLCyPLUkdqkd0Nx7xDI9XJSHJf4YWdCtI9mdeGG9NHTSrNyCOebEb6VIKQdlfh2rUipHIFdIjpg3tOmUrzjXvreM39KyeEqMDz5x8U5whJzg2B6JI9XoNLBvFSacq5NEyqY9XMAY3s3h/Yh1h1fau9e9wkj+8sxa14L9+RMvsEMo0HQhQizRgGuZ/c/97ivr3FerLFmHLiNPN50ky9dYuJrVVYETfCrh8OVWemZXRtyOPdLs4TXxszNPm54uGjSdgC9S4RZCeshzENcW1yEcRk5yMm1p/SqDY38fxZqkLoCFswfsxdvw9iheERsfMPaQTfq+g3XJ8Xwae7pQjNuamRIJDToMJoeaU/oxH/qJoi8GrGA6N08eE2QvP7CTZhnSt/5aTSrOdhxQNVv9EATGY0JyXQReU1TYO0piDWiPNd3spJpTnAkril4U8NhOAY93kh1aGzSgcS6HQyYsrkxE+kMji5iWFqxRc48Tl1whTmyAm+F4gJnVcL1S6kKnStuL8Pw2ePc6vJTbc82swhILk4jS8u5TxSLz+ZCWLq/QrYMaY5r7wOwEeYvxxI6kHQ0bDLkOe+iTrm/JhfkRUlE2e6trZMQJG1akUnUF1oVORM5RkS7/rPCPJqFcbJZ1gyYAPPI9lTabq4rm8a6m24p2GtYPUMdEPuf5jbv9XgVztDgHS4AjaxK779hivmTOR2Kg0lz9mMrmAtwKqBpJtckl1IraRK4ZnxyYhzMfJKAxonuOLO/OY46xUmbsXUNqI7yXUYa4lEoqnNZd2cU6ojVIpVydmNpLgRdfo7tVjIUWwvMJesaDnzJS9O09XBLVCNf8cyZMGVBkK15NEIkCQcIJfCwwGf2/RkCjkgeh25o91wPDEf8uI0FDeHYy4YgD4c9Z4ZgcPp2jqCC/8R6VYE7otXfabhC40Wid+dccSIVEPMxxiGhtukaigAr9dQP0voqlyGL3g5Q956YWVcKb0nr/13+CvMsAHiVR6JmVLMDKeoEBcJ460E8eY7OBTbU0yzBD7Qe0vuhythP/TMfxWEpWjQYOMiKVaHHIpPKTYNl4/OYjyjWgGBIH6vvvuypdHYyM5wMOxVeJHgyk8XLHfGOoqdzRPDsWyaM/Nyx6bhEjd1BW8I4oc5shjX7fr+lppRp8LvkPjDPNvVFsKdeWG02Ek2MQG6zJzi61CKTcNlE9KGjfgHRIZIEvgMAt5teJ8kPZVaYhfWfmA2X+LFdCVB90uxLAsOnxkoNg3Fj3SR7TgFNDPjEdUQhPZIE1R5FWHHDHkW3kU3sPYjiDl3ooCJl7qx8URAdgWW70vQDcXB49gKurWtEC5x0k5+2brYf3fkCQf9ksawm3Bfw13rOxsujKfh7zPjDbr4ZUpGzHibRJr03zwEtW/Gas1RebaCggI6a/297DK4rmWdXp77VnJ7NhN2wQ72GayOnSihx4ax1pcJN5Iu1OzvHoy/geETJtWMXeqGa7vH6KHXfS9oaR0beLO88v79+wadYM5/Tp5foP39+0r/vskNkyo2itG2goLWsZiYdGfygWU2CXZDZX6nEshmu/H0FRcUtLR8+vTieKWqwYpkS26pg35/UV0pwtd3N37WdLJqMZi55UcSXxITs5UEWAm6+YmSqkYubbW1s2abCuOg1vGB7y2bVd9fyoBi16OVXu1DRnVbeRE+Q7KnbkaA7PP3KYIYaMnmaghUw1ZNIg2V6dOdbKq2+7T2FGZGQwF89hHPRt4SloPE8C5cm/0KH++vO53k6IKhmXQ46qeIzz+YO+lyiR/vEnRDZdmJFJi7W8dthLYAglBjCxYsJjYdoC149w1/ONJq74pNT/zBaI8yglheOfaMiytepmOI3wvFF+i0jhJpukrIeMWUjGys9VQgqDgVa+s/gS0MzxGbHjEhOIc90U7e+c2932Tyxl57l22EY+W4peFNfdb38oSPDMl2Q+VYVphbawXOlqmWTx5AdToJ3xfvkcaEIybpCZ+rgrtxl/v5nFCtHL8YqK+HkJ85SVi7+lg5ibqhurL/rG62QjXcUvBpswA6OF8lZgwaqak4oIU9iqOwN2JLdNfiJTMxs1L1YuAU18yYEGsbPc1IUdTHjE1hJTxlHesWjMEMr4InFix5rGa3xzkDloNIlZtehEZaW5dhgegE3TSOObPII0SDNANzSNIN1VWT2XJ05rHuAoe1oH7zRQN0MvzWG4z8NAmBLcPHzWjH1mDnkYoQ1APN1CyumCmhrwxHJJdMQy1kaCseHmiYqNU2jAvM4P1eYOO0uu80nU7wJ5gmMk7imbPAl3efIXh8frtS9Z1wvCGImYE3Y7O2VB+IlIkTCoBSaKjLdMrRDXRPDMzOjk1UFGiJN/Wbx5GXKrPvzl8s7QwsuS8uLtye1cCdRmPwYH/nfP925dhByGyzracvZ2cHJrpnYdYnpvJk1aShWUyzIlV118LcFYA8XTe4M1v98cox+B1IgvslP/wYEr7PFxebTJrO5XM8yad8GAZmHhr70f2jwQz3ZAMTdIP4IelTOE2Wqps0hizrxgOj6p7Fg+IEf2+bhKjpi7gS2Jrdn9E2OhzafZ2E7svmcT19//7tMlaGFlkLKip+2OiChAMvvk/CqCgNDdWePFazAyDHdlobk4bAZDrfP323dA0OhjYa2EqPmvHw2ZLhHdC8dWIYXFxRUdF6GvdEMRlEYkyIEKWjWdQn4TRgwRPjeAzohOA4u+l6By8NVZ6be7NVh2Q63b75/Mzj3dr6gmkmtZGqOOxjnLHYZfTMevlmVJPGbqDwBCW27YZLwfg441ahXCxwbBq+XGn84Iux4cDvViFQSTUaoDFMQgCLJXNBQUVrKxbBSqQ6yQtn1g1FzbMaQhaL0o2PnzI4kfLGuSrsjIGG/pkJppFqtqqccb1ANVUrrZskGkkpe8kX1066kaKorkTTmcATany8dRzPrISEhoNLBphUCthOKi5+ctfpCyYiD7e2tABOsm6YjYA4Cc6kp6H6En4gX2sGhInx1tbW8VlrAg2B99FJsXXfbJ7ZT/0Coxurr2+BpXRFK54HTEqOTzGkDDRUkZFlyVPdYMZaoKmoKChopd0HIxnRkwpTMfciuamG+s1P9RHdsDVGtqcdpsy6oahS9t8ojeEpMYZpKmBdXF//I/hbq2L7+lhkiANZG52TEKgwDaimArePAZE7KREhl24oaoHHaEcwMSYgBN2AA2pvqf+0+eL47fv3S3PBe/OMbd+q0+loNAlkVKoZ7fVyFTict8dAAyMFdvMDAtdAdLAka8wOSYwids40UlD+ioVDDEzoCFkDPVQtEMNfrLwF72f4opH6i8Pwyy28KUrPcOkVnuHY/b1fOa6K6uZUBxElCkMWpp3bEZ4sNNQr1mAJ6DcY7Tg9Up82qzAN3jLRPDGFFbS/oWn84G/+NhhcrvfetyswUp/wSI0JZNrT6Kwnd5LXNDG94HM2GmpEzQwWYZvoNhOC2nH8QhUZKeyLo/4G6yYc9TdfaGcMuoHF3+anFqdVMPvjTdRoUG/mYcpFQxXJWTjE1MRpw7DMMYEXf8dv3z51wQaONOL9PnyohKEymbD3Y2iOq1prbeaJ7xMQaCPpMP7RkK2SeD6rbiiqrw3FBOGz7WX3+MRLba1zfBOCOAQq0M2T4r9ihmMy+YHm74huVpY/vxkY+FzR+jI2mRCZstiLc0QyOWgo+HMurB6EWeg09eZ7fcvpy8Y3c6suw99bbJh4nHr3zjX5eaDhx6eqFrz+iCbS+C2p85TLXDQU9S05ohOqWed3PMM3NwNfwIr/ikRNbMUar3frKADR/enT9yvLztkpiCTgHCM4dWkWNEk8uWmoxe3ow8VPCMKWeeDs82qnIWY3Ctpu6Kjp2lz1OAds8ZAGtWHnVPI1u8nQXBxo4LWGNdUjD0v3gHvR2YbN99c3NzfX18EgeOhhq4AOEWKsEuyho6opSdiLSFJJ/JITDTV4SFsP7h4S3RF9xBcI38JJLMZfohHkIv9wtUgiQ78yRaY4CHfdQM3SNYKZ7DGcaGc5TiTJ7Q9ZoRduusHgJyUsnhwArGKSLPuJm3NK3Gkoqr8nbx6SPOTOko9u8MO92ob/xYBzIgl9E2trmoN28tENFrfYIeemIJKQbHzkMKkTGPOlgcYjHfATL8ak06kKUNrXs6wcEhBYF4+ggdY/1y/hl5NkOiQYStTzUJ41VLP6T8w+jgbLWOz/emg3JmoGqese1hceR4JlPp4Gt4Ygb3lVfrAOae+gv7Qo44I3Ujnn8U9pcnaQV4X/aDKr6z/d/KebtBqozvY2FfM3r4VCcBU7QqWwpLmLEsLZTv/vEUNKvJug3sGSm4yl+KSuG1HXwXlNPqRUQk3lJR8OSmWbRQ1JvjFICfkQE5rxX/Li5rFaz5QUZZlW6uUdFLWh/AYrlBDstfXTsiIdgNCIFX+V8H4Bjb6tvYb3leKr23rt5CVs4/AJOSzahJimq5lH0wh3RoxQh1orPGhrU6vb2j7K4dDWtm4x8g8Pd0R18LG2naIO9UWR5rFaz/hUkVK9PWTnDVF1hHyUOiHXgQsZYcVBdwB9RGlK5Hz4bLUjBN+qbqf48Lv16hr9T6qcV8KD3/dHKgMNXk4CjSikLKLW8A8OSvBBvgYHiF3GMjiW8Cm+SPSRpqGbQxu6FtC0hU6gA7tysE7PO6RpXivtIXjqRJoR42VZqJTaUW+3rYUOKD4WP08egEZ/Yk0m60a0E9ph0wgPDw8vRyzGnl9fy/RrlLwExgrrBporoXmcxo7ZqSbiYx1/2vgN62ae11/CH02iKTOWlxvbqB2RWqk3/oo8bDkxP6ietvSoiyg+bTcs3TSV8b6ydBPS6/WhcoueJyJFaxaKX7cnageaWPM4DdY5/ug0X8f/qZSXS9YpO3+kWbKXSFPNl/BEEmHfjrB61MK3R3TTgco7CB6PJx5K1U1Tn1xZyIxUTR+kLouxfeRBtNGF4Xt5fH1RrHmcZq0Q0zyQ5XV80Ipdsl4akvB4aC2R5qPk8uBgiJzHdkP18KuxIfTZhYN2+UH5gVxenaobmBAhhiZiNxY92E0vrwN0Qw0KQ/qiWPM4zSW2/kG5sA9oup4ZyfVt4/pB+bTRkmA3O0qYkq+FJTv6Z9OFvDaYU9M9Ql7Hggib5SHvo1A9PT1dxswpEUz7MoKhwcXTbRZsxa+FyiIMvxfS98eax2leF4aebQhDvyigoX4qiV/8EuignFdGd3AIeQKrAfdKXdrba2p6dsDPPKupWdv4SM3LR+C2pfCypwbS9tdCfEmVHFoKYWr2PduAi158qMPFNb1FdvAk1F7hwzMst8zeFGseqVXWA6yHdn5JOXSFtfnVPi8HXYGWpmkB25AHmkwJz+d/OWWh+ZdJcHf/H2hev6JTqQVOpXSgG331k7K8wuvv6leWBbrUUkRfR1S4cAAzAdLIP3QZXFg+nkDsw+3gLb6Uwm1G6PalH0eq6bqph/S66SclEp5Ewt8Ah8PT4/8jZp1nh3/YTg8k80IJTr0PvIWYwGYeD6IFJDndUNw/WCfikfw9yhIqg7t2PiXEotTz1GIPj+TVLMYaJp7T0ywelPeo9w6+bSj7T8p7JBCr1gjeq1EczKg65WBhITii8lKGpku41k+jUt8O9tQlBweLO8ahhV98/QI976maQkpuPznZEwr7LkXzC03G7USK2FV6Giht1wP/Bv4se0A2QUhsh3DaZrRQg+oNSt5DN2doKLtyJxLiwb0pe2EjXrRNdVGlxjqGBrfZFpX26vurqd42WkDKITONGtMYNzbqhPoRakg0sqMcLBUN4UBHFarX1tZK/mlmjRQZUQ3IH1QDzVfiAHcl59MemtaNemNjxyiv/kfN4/eCstOmzDS0bkJy+N8p/qG65Mr5drKDshdSJXLoRA3+yv6N0U2TSCiqKwEKSDRNh+QE50sKGd3o5UoJH2zLclmiDyX8IgnXjKTMNLRulKOjdaKv4L1DoZCoEBSzJ2oGmh66cZymi19S3c6DZRRONM0CDy8aXwvXRvG4UYWwzlijivjq0q5pqPXTzk8/qzLTxOxmkK/8Wae0vH69zet/rSZg3ZKGxl5dpKcBojTVfP4ranQDVpSF/EXqlbGXbvPNaK9eEy5QfTV4SZkm5aah9kQ19MIVbJLaIHdAiNyI18CFDyQc6S3pZh5frVeKaHOgdUOdKENyNURgqkOk54f0C5S8BhqWSR4O1CG+OjSfBgVuZaT5WAauap3+LtDU236CWzcPdZVuf4PMwzZOHf34WGbBRXvth6WL7bT6+8pg9Q1bGM0b7eU4c7Jdh+s8dEC+r6y5euSht4wWhwuTUkaapHr/zuV/NJn1/H+ap07sE8l+BQAAAABJRU5ErkJggg==";
    generateTable(passengers,hotels, flights, transports ,passengerInfo,  $('#voucherNo').val())
      
    })
        
}) 
 
 function validator(validation){
          let result = true;

          if(validation == 'hotels'){
            result =  validateValue('#hotelName')
            result =  validateValue('#city')
            result =  validateValue('#roomType')
            result =  validateValue('#checkIn')
            result =  validateValue('#checkOut')
            result =  validateValue('#night')
          }
          
              if(validation == 'headPassenger'){
                if(validateValue('#headName')){
                    alert('FILL INPUT FIELD');
                    return true;
                }

                if(validateValue('#contactNo')){
                    alert('FILL INPUT FIELD');
                    return true;
                }
                if(validateValue('#voucherNo')){
                    alert('FILL INPUT FIELD');
                    return true;
                }
                return false;
              }
              if(validation == 'passenger'){
                if(validateValue('#name')){
                    alert('FILL INPUT FIELD');
                    return true;
                }
                if(validateValue('#gender')){
                    alert('FILL INPUT FIELD');
                    return true;
                }
                if(validateValue('#passportNo')){
                    alert('FILL INPUT FIELD');
                    return true;
                }
                if(validateValue('#visaNo')){
                    alert('FILL INPUT FIELD');
                    return true;
                }
                return false;
              }
              if(validation == 'transport'){
                if(validateValue('#transportationCompany')){
                    return true;
                }
                if(validateValue('#transportationType')){
                    return true;
                }
                return false;
              }

              if(validation == 'flight'){
                if(validateValue('#date')){
                    return true;
                }
                if(validateValue('#flightNo')){
                    return true;
                }
                if(validateValue('#route')){
                    return true;
                }
                if(validateValue('#arrival')){
                    return true;
                }
                if(validateValue('#PNRtNo')){
                    return true;
                }
                return false;
              }
            return result;

 }

 function validateValue(selector){
          return $(selector).val() == '' ? true : false ; 
 }

 function getValue(selector){
    return $(selector).val()
 }

 function setValue(selector){
    return $(selector).val('')
 }