import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: {' '}
            <a href='https://www.apple.com/lae/iphone-15-pro/' target="_blank" className="underline text-blue">
            Find an Apple Store {' '}
            </a>
            or {' '}
            <span >
            other retailer
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 000800-123-4567
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Inspired by <a  target="_blank" href='https://www.youtube.com/@javascriptmastery' className="underline text-blue">JsMastery</a>. Made by <a target="_blank" href='https://www.linkedin.com/in/franciscofrco/' className="underline text-blue"> FFranco.</a></p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer