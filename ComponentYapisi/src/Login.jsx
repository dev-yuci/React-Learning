import React from 'react'

/* Dışarıdan erişilebilir hale getrimek için kullanılır. */
export const users = [
    {
        username: "admin",
        password: "admin"
    },
    {
        username: "user",
        password: "user"
    }
]

function Login() {
    //Fragment
  return (
    <>
    <div>
        <div>
            <p>Kullanıcı Adınız</p>
            <input type="text" />
        </div>
        <div>
            <p>Şifreniz</p>
            <input type="password" />
        </div>
        <div>
            <button>Giriş Yap</button>
        </div>
    </div>
    </>
  )
}

export default Login //Dışarı çıkart
