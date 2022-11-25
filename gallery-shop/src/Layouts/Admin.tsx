import axios, { AxiosError, AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Containers/Loading'
import NavbarAdmin from '../Containers/NavbarAdmin'
import PageNotFound from '../Containers/PageNotFound'
import SidebarAdmin from '../Containers/SidebarAdmin'
import { host } from '../Variables/Server'
import { token } from '../Variables/Storage'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  //
}

const Admin = (props: Props) => {
  const [authorized, setAuthorized] = useState<boolean>(false)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      setLoading(true)
      await checkAuth()
      setLoading(false)
    })()
  }, [])

  const checkAuth = async () => {
    const res = await axios.get(host + '/auth/check', {
      headers: {
        Authorization: await token.get()
      }
    })
      .then((res: AxiosResponse) => {
        setAuthorized(true)
        console.log(res);
        return res
      })
      .catch((err: AxiosError) => {
        setAuthorized(false)
        console.error(err);
        return err
      })
    console.log(res);
    
  }

  return (
    <div className={`bg-base min-h-screen`}>
      <Loading isLoading={isLoading} />
      {!authorized && <PageNotFound />}
      <SidebarAdmin />
      <NavbarAdmin />
      <main className={`${props.className}`}>
        {props.children}
      </main>
    </div>
  )
}

export default Admin