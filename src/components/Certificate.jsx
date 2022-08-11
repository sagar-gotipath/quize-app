import { uid } from 'uid'
import domtoimage from 'dom-to-image'
import { collection, addDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect, useMemo } from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { AppContext } from '../App'
import { db } from '../firebase.config'
import Button from './Button'
import CenterWrapper from './CenterWrapper'
import SharePage from './SharePage'

const Certificate = () => {
  const location = useLocation()
  const imageNode = useRef()
  const renderNode = useRef()
  const { userInfoForStore } = useContext(AppContext)
  const [isUserInfoSaved, setIsUserInfoSaved] = useState(false)
  const [isError, setIsError] = useState(false)
  const [certificateData, setCertficateData] = useState(null)
  const [isLoadedCertificate, setIsLoadedCertificate] = useState(false)
  const [isUserPhotoLoad, setUserPhotoLoad] = useState(false)

  const imageName = userInfoForStore.name + '_certificate_' + Date.now()

  console.log(location)
  // generate image
  useEffect(() => {
    if (isLoadedCertificate && isUserPhotoLoad) {
      domtoimage
        .toPng(imageNode.current)
        .then((dataUrl) => {
          setCertficateData(dataUrl)
        })
        .catch((err) => {
          console.log('image error', err)
        })
    }
  }, [isLoadedCertificate, isUserPhotoLoad])

  // useEffect(() => {
  //   setTimeout(() => {
  //     domtoimage
  //       .toPng(imageNode.current)
  //       .then((dataUrl) => {
  //         setCertficateData(dataUrl)
  //       })
  //       .catch((err) => {
  //         console.log('image error', err)
  //       })
  //   }, 500)
  // }, [])

  // useEffect(() => {
  //   // save user info into firestore
  //   const saveInDb = async (userData) => {
  //     try {
  //       setIsUserInfoSaved(false)
  //       setIsError(false)
  //       const docRef = await addDoc(collection(db, 'users'), {
  //         name: userData.name,
  //         phoneNumber: userData.phoneNumber,
  //         imageUrl: imageName,
  //       })
  //       console.log(docRef.id)
  //       setIsUserInfoSaved(true)
  //     } catch (e) {
  //       console.error('Error adding document: ', e)
  //       setIsError(true)
  //     }
  //   }
  //   if (userInfoForStore.phoneNumber !== '') {
  //     saveInDb(userInfoForStore)
  //   }
  // }, [])

  return (
    <CenterWrapper>
      <img src="/assets/images/mujib.png" alt="mujib logo" className="block w-24 mx-auto mb-8" />
      <article className="mb-6 text-center">
        <p>অভিনন্দন</p>
        <h2 className="text-xl">আপনার সার্টিফিকেট</h2>
      </article>
      <div className="p-4 lg:p-0">
        <div className="lg:h-[460px] max-w-[646px] mx-auto" ref={renderNode}>
          <div id="image" ref={imageNode} className="relative">
            <img
              src="/assets/images/certificate_blank.png"
              alt="certificate"
              className="max-w-[646px] max-h-[460px] h-auto object-cover mx-auto lg:mb-8 mb-4 w-full block"
              onLoad={() => setIsLoadedCertificate(true)}
            />
            <span className="absolute z-50 text-lg italic font-bold uppercase -translate-x-1/2 -translate-y-2 font left-1/2 top-1/2">
              {userInfoForStore.name || 'Mohammed Sagar'}
            </span>
            <img
              src={userInfoForStore.userPhoto || '/assets/images/avatar-cropped.svg'}
              alt="quiz participant"
              className="absolute w-[130px] h-[130px] object-cover rounded-full top-14 left-12"
              onLoad={() => setUserPhotoLoad(true)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-0 space-y-3 lg:space-y-0 lg:mt-8 lg:space-x-6 lg:justify-center lg:flex-row">
        {location.state !== null ? (
          <>
            <div>
              <Button className="flex items-center justify-center bg-orange-600">
                <a href={certificateData} download={imageName}>
                  ডাউনলোড করুন
                </a>
                <img src="/assets/images/download_icon.svg" alt="download icon" className="w-4 inline-block ml-1.5" />
              </Button>
            </div>
            <div>
              <SharePage>
                <Button className="flex items-center justify-center bg-blue-800">
                  শেয়ার করুন
                  <img src="/assets/images/share_icon.svg" alt="share icon" className="w-4 inline-block ml-1.5" />
                </Button>
              </SharePage>
            </div>
          </>
        ) : (
          <Link to="/">
            <Button>অংশগ্রহণ করুন</Button>
          </Link>
        )}
      </div>
    </CenterWrapper>
  )
}

export default Certificate
